import type { Gpu, Surface } from "vgpu";
import { surface } from "vgpu";

import { loadHeroGlassAssets, type HeroGlassAssets } from "./assets";
import {
  createCameraControls,
  createHeroFractalScene,
  destroyHeroFractalScene,
  HERO_FLOOR_AO_DEFAULTS,
  renderHeroFractalScene,
  resizeHeroFractalScene,
  setHeroFractalSceneSettings,
  type HeroFractalScene,
} from "./scene";
import {
  HERO_FRACTAL_CAMERA,
  HERO_FRACTAL_GLASS,
  HERO_FRACTAL_MATERIAL,
  HERO_ORB_MATERIAL,
} from "./settings";

interface RendererOptions {
  readonly canvas: HTMLCanvasElement;
  readonly reducedMotion?: boolean;
  readonly onError?: (error: unknown) => void;
}

export interface GlassFractalRenderer {
  readonly ready: Promise<void>;
  setProgress(value: number): void;
  dispose(): void;
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Production adaptation of vgpu's MIT-licensed Glass Fractal renderer.
 * Scroll owns morph progress directly; no competing timeline is created.
 */
export function createRenderer(
  options: RendererOptions
): GlassFractalRenderer {
  const { canvas, reducedMotion = false } = options;
  const abort = new AbortController();
  let disposed = false;
  let reportedFailure = false;
  let gpu: Gpu | undefined;
  let canvasSurface: Surface | undefined;
  let scene: HeroFractalScene | undefined;
  let assets: HeroGlassAssets | undefined;
  let resizeObserver: ResizeObserver | undefined;
  let visibilityObserver: IntersectionObserver | undefined;
  let resizeFrame = 0;
  let drawFrame = 0;
  let pointerFrame = 0;
  let orbFrame = 0;
  let sphereMix = 0;
  let morphDirection = 1;
  let orbTime = 0;
  let isVisible = true;
  let pointerTargetX = 0;
  let pointerTargetY = 0;
  let pointerX = 0;
  let pointerY = 0;
  const orbEpoch = performance.now();
  const camera = createCameraControls(HERO_FRACTAL_CAMERA);
  const glass = {
    ...HERO_FRACTAL_GLASS,
    sphereMix,
    absorption: [...HERO_FRACTAL_GLASS.absorption] as [
      number,
      number,
      number,
    ],
    environmentRotation: [...HERO_FRACTAL_GLASS.environmentRotation] as [
      number,
      number,
      number,
    ],
  };

  const canAnimateOrb = () =>
    !disposed &&
    !reducedMotion &&
    isVisible &&
    !document.hidden &&
    sphereMix > 0.02;

  const renderNow = () => {
    if (disposed || !gpu || !canvasSurface || !scene || !assets) return;
    glass.sphereMix = sphereMix;
    setHeroFractalSceneSettings(scene, assets, canvasSurface.size, {
      camera: HERO_FRACTAL_CAMERA,
      fractalMaterial: HERO_FRACTAL_MATERIAL,
      orbMaterial: HERO_ORB_MATERIAL,
      glass,
      time: orbTime,
      view: {
        ...camera,
        pointer: [pointerX, pointerY],
      },
      floorAo: HERO_FLOOR_AO_DEFAULTS,
      morphDirection,
    });
    renderHeroFractalScene(gpu, canvasSurface, scene);
  };

  const fail = (error: unknown) => {
    if (reportedFailure || disposed) return;
    reportedFailure = true;
    options.onError?.(error);
    dispose();
  };

  const safeRender = () => {
    try {
      renderNow();
    } catch (error) {
      fail(error);
    }
  };

  const requestDraw = () => {
    if (drawFrame || disposed) return;
    drawFrame = requestAnimationFrame(() => {
      drawFrame = 0;
      safeRender();
    });
  };

  const stopOrb = () => {
    if (orbFrame) cancelAnimationFrame(orbFrame);
    orbFrame = 0;
  };

  const animateOrb = (time: number) => {
    orbFrame = 0;
    if (!canAnimateOrb()) return;
    orbTime = (time - orbEpoch) * 0.001;
    safeRender();
    if (canAnimateOrb()) orbFrame = requestAnimationFrame(animateOrb);
  };

  const requestOrb = () => {
    if (!orbFrame && canAnimateOrb()) {
      orbFrame = requestAnimationFrame(animateOrb);
    }
  };

  const setProgress = (value: number) => {
    if (disposed) return;
    const nextMix = clamp01(value);
    if (Math.abs(nextMix - sphereMix) < 0.0001) return;
    morphDirection = nextMix >= sphereMix ? 1 : -1;
    sphereMix = nextMix;
    requestDraw();
    if (sphereMix > 0.02) requestOrb();
    else stopOrb();
  };

  const resizeAndDraw = () => {
    resizeFrame = 0;
    if (disposed || !canvasSurface) return;
    try {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const mobileDpr = window.innerWidth < 768 ? 1.5 : 2;
      const dpr = Math.min(mobileDpr, Math.max(1, window.devicePixelRatio || 1));
      canvasSurface.resize([
        Math.max(1, Math.round(rect.width * dpr)),
        Math.max(1, Math.round(rect.height * dpr)),
      ]);
      if (scene) resizeHeroFractalScene(scene, canvasSurface.size);
      safeRender();
    } catch (error) {
      fail(error);
    }
  };

  const requestResize = () => {
    if (!resizeFrame && !disposed) {
      resizeFrame = requestAnimationFrame(resizeAndDraw);
    }
  };

  const animatePointer = () => {
    pointerFrame = 0;
    if (disposed) return;
    pointerX += (pointerTargetX - pointerX) * camera.mouseLerp;
    pointerY += (pointerTargetY - pointerY) * camera.mouseLerp;
    const moving =
      Math.abs(pointerTargetX - pointerX) > 0.0001 ||
      Math.abs(pointerTargetY - pointerY) > 0.0001;
    if (!orbFrame) requestDraw();
    if (moving) pointerFrame = requestAnimationFrame(animatePointer);
  };

  const requestPointerDraw = () => {
    if (!pointerFrame) pointerFrame = requestAnimationFrame(animatePointer);
  };

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    const rect = canvas.getBoundingClientRect();
    pointerTargetX = clamp01((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerTargetY = clamp01((event.clientY - rect.top) / rect.height) * 2 - 1;
    requestPointerDraw();
  };

  const resetPointer = () => {
    pointerTargetX = 0;
    pointerTargetY = 0;
    requestPointerDraw();
  };

  const onVisibilityChange = () => {
    if (document.hidden) stopOrb();
    else {
      requestDraw();
      requestOrb();
    }
  };

  function dispose() {
    if (disposed) return;
    disposed = true;
    abort.abort();
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    if (drawFrame) cancelAnimationFrame(drawFrame);
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    stopOrb();
    resizeObserver?.disconnect();
    visibilityObserver?.disconnect();
    canvas.removeEventListener("pointermove", onPointerMove);
    canvas.removeEventListener("pointerleave", resetPointer);
    window.removeEventListener("resize", requestResize);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    try {
      if (scene) destroyHeroFractalScene(scene);
      assets?.dispose();
      gpu?.dispose();
    } catch {
      // Cleanup should never turn a graceful fallback into a runtime failure.
    }
  }

  const initialize = async () => {
    if (!("gpu" in navigator)) {
      throw new Error("WebGPU is not supported in this browser.");
    }
    const { init } = await import("vgpu");
    if (disposed) return;
    gpu = await init();
    if (disposed) return;
    canvasSurface = surface(gpu, canvas, { dpr: [1, 2] });
    assets = await loadHeroGlassAssets(gpu, abort.signal);
    if (disposed) return;
    scene = await createHeroFractalScene(
      gpu,
      canvasSurface,
      assets,
      "digineom-hero"
    );
    if (disposed) return;

    resizeObserver = new ResizeObserver(requestResize);
    resizeObserver.observe(canvas);
    visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? false;
      if (isVisible) {
        requestDraw();
        requestOrb();
      } else {
        stopOrb();
      }
    });
    visibilityObserver.observe(canvas);
    window.addEventListener("resize", requestResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
      canvas.addEventListener("pointermove", onPointerMove, { passive: true });
      canvas.addEventListener("pointerleave", resetPointer);
    }
    resizeAndDraw();
  };

  const ready = initialize().catch((error: unknown) => {
    if (!disposed) fail(error);
    throw error;
  });

  return { ready, setProgress, dispose };
}
