"use client";

import Image from "next/image";
import {
  useCallback,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type LayerIndex = 0 | 1 | 2;
type StackPosition = "front" | "middle" | "back";

const TRANSITION =
  "transition-[top,left,width,height,transform,box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]";

const POSITION_LAYOUT: Record<StackPosition, string> = {
  front:
    "top-0 left-9 z-30 h-[17rem] w-[15.75rem] rotate-0 shadow-[0_20px_44px_-14px_rgba(23,23,28,0.28)]",
  middle:
    "top-4 left-4 z-20 h-[16rem] w-[15rem] -rotate-[3.5deg] shadow-[0_12px_28px_-10px_rgba(23,23,28,0.2)]",
  back: "top-9 left-0.5 z-10 h-[15.5rem] w-[14.5rem] -rotate-[7deg] shadow-[0_10px_24px_-10px_rgba(23,23,28,0.18)]",
};

const STACK_ORDER: Record<LayerIndex, readonly [LayerIndex, LayerIndex, LayerIndex]> = {
  0: [0, 1, 2],
  1: [1, 0, 2],
  2: [2, 1, 0],
};

function positionForLayer(layer: LayerIndex, active: LayerIndex): StackPosition {
  const [front, middle] = STACK_ORDER[active];
  if (layer === front) return "front";
  if (layer === middle) return "middle";
  return "back";
}

export function StackedFolders({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const [active, setActive] = useState<LayerIndex>(2);
  const [frontLayer, middleLayer, backLayer] = STACK_ORDER[active];

  const bringToFront = useCallback((layer: LayerIndex) => {
    setActive((current) => (current === layer ? current : layer));
  }, []);

  const layers = [
    { index: 0 as LayerIndex, src: images[0]?.src, alt: images[0]?.alt ?? "", surface: "bg-[#c7dbff]" },
    { index: 1 as LayerIndex, src: images[1]?.src, alt: images[1]?.alt ?? "", surface: "bg-[#0d47a1]" },
    { index: 2 as LayerIndex, src: images[2]?.src, alt: images[2]?.alt ?? "", surface: "" },
  ];

  return (
    <div className={cn("relative mx-auto h-[20rem] w-[19rem]", className)}>
      {layers.map((layer) => {
        const position = positionForLayer(layer.index, active);
        return (
          <div
            key={layer.index}
            aria-hidden
            className={cn(
              "pointer-events-none absolute overflow-hidden rounded-[2rem] border-[7px] border-white",
              TRANSITION,
              POSITION_LAYOUT[position],
              layer.surface,
            )}
          >
            {layer.src ? (
              <Image
                src={layer.src}
                alt={layer.alt}
                fill
                sizes="280px"
                className="object-cover"
                draggable={false}
              />
            ) : null}
          </div>
        );
      })}

      <button
        type="button"
        tabIndex={-1}
        aria-label="Show back folder"
        onMouseEnter={() => bringToFront(backLayer)}
        onFocus={() => bringToFront(backLayer)}
        className="absolute top-0 bottom-0 left-0 z-40 w-4 cursor-default border-0 bg-transparent p-0"
      />
      <button
        type="button"
        tabIndex={-1}
        aria-label="Show middle folder"
        onMouseEnter={() => bringToFront(middleLayer)}
        onFocus={() => bringToFront(middleLayer)}
        className="absolute top-0 bottom-0 left-4 z-40 w-5 cursor-default border-0 bg-transparent p-0"
      />
      <button
        type="button"
        tabIndex={-1}
        aria-label="Show front folder"
        onMouseEnter={() => bringToFront(frontLayer)}
        onFocus={() => bringToFront(frontLayer)}
        className="absolute top-0 right-0 bottom-0 left-9 z-40 cursor-default border-0 bg-transparent p-0"
      />
    </div>
  );
}
