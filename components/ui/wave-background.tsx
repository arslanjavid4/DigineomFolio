"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import { cn } from "@/lib/utils";

interface Point {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: { x: number; y: number; vx: number; vy: number };
}

export interface WavesProps {
  className?: string;
  strokeColor?: string;
  backgroundColor?: string;
  pointerSize?: number;
}

export function Waves({
  className = "",
  strokeColor = "rgba(255,255,255,0.16)",
  backgroundColor = "transparent",
}: WavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const noise = createNoise2D();
    const mouse = {
      x: -10,
      y: 0,
      lx: 0,
      ly: 0,
      sx: 0,
      sy: 0,
      v: 0,
      vs: 0,
      a: 0,
      set: false,
    };

    let paths: SVGPathElement[] = [];
    let lines: Point[][] = [];
    let bounding: DOMRect | null = null;
    let raf = 0;
    let visible = true;

    const setSize = () => {
      bounding = container.getBoundingClientRect();
      svg.style.width = `${bounding.width}px`;
      svg.style.height = `${bounding.height}px`;
    };

    const setLines = () => {
      if (!bounding) return;
      const { width, height } = bounding;
      lines = [];
      paths.forEach((path) => path.remove());
      paths = [];

      const xGap = 22;
      const yGap = 20;
      const oWidth = width + 200;
      const oHeight = height + 30;
      const totalLines = Math.ceil(oWidth / xGap);
      const totalPoints = Math.ceil(oHeight / yGap);
      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;

      for (let i = 0; i < totalLines; i++) {
        const points: Point[] = [];
        for (let j = 0; j < totalPoints; j++) {
          points.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          });
        }

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", strokeColor);
        path.setAttribute("stroke-width", "0.7");
        svg.appendChild(path);
        paths.push(path);
        lines.push(points);
      }
    };

    const updateMousePosition = (clientX: number, clientY: number) => {
      bounding = container.getBoundingClientRect();
      mouse.x = clientX - bounding.left;
      mouse.y = clientY - bounding.top;
      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }
    };

    const onResize = () => {
      setSize();
      setLines();
    };

    const onMouseMove = (event: MouseEvent) => {
      updateMousePosition(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updateMousePosition(touch.clientX, touch.clientY);
    };

    const moved = (point: Point, withCursorForce = true) => ({
      x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
      y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
    });

    const movePoints = (time: number) => {
      lines.forEach((points) => {
        points.forEach((point) => {
          const move =
            noise((point.x + time * 0.008) * 0.003, (point.y + time * 0.003) * 0.002) * 8;
          point.wave.x = Math.cos(move) * 12;
          point.wave.y = Math.sin(move) * 6;

          const dx = point.x - mouse.sx;
          const dy = point.y - mouse.sy;
          const d = Math.hypot(dx, dy);
          const l = Math.max(175, mouse.vs);

          if (d < l) {
            const s = 1 - d / l;
            const f = Math.cos(d * 0.001) * s;
            point.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00035;
            point.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00035;
          }

          point.cursor.vx += (0 - point.cursor.x) * 0.01;
          point.cursor.vy += (0 - point.cursor.y) * 0.01;
          point.cursor.vx *= 0.95;
          point.cursor.vy *= 0.95;
          point.cursor.x += point.cursor.vx;
          point.cursor.y += point.cursor.vy;
          point.cursor.x = Math.min(50, Math.max(-50, point.cursor.x));
          point.cursor.y = Math.min(50, Math.max(-50, point.cursor.y));
        });
      });
    };

    const drawLines = () => {
      lines.forEach((points, index) => {
        if (points.length < 2 || !paths[index]) return;
        const first = moved(points[0], false);
        let d = `M ${first.x} ${first.y}`;
        for (let i = 1; i < points.length; i++) {
          const current = moved(points[i]);
          d += `L ${current.x} ${current.y}`;
        }
        paths[index].setAttribute("d", d);
      });
    };

    const tick = (time: number) => {
      if (!visible) return;

      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);
      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      movePoints(time);
      drawLines();
      raf = requestAnimationFrame(tick);
    };

    setSize();
    setLines();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    raf = requestAnimationFrame(tick);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const next = Boolean(entry?.isIntersecting);
        if (next && !visible) {
          visible = true;
          raf = requestAnimationFrame(tick);
        } else if (!next) {
          visible = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "80px" },
    );
    observer.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      paths.forEach((path) => path.remove());
    };
  }, [strokeColor]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ backgroundColor }}
    >
      <svg ref={svgRef} className="block h-full w-full" xmlns="http://www.w3.org/2000/svg" />
    </div>
  );
}
