"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroGradientProps {
  className?: string
  gradient?: boolean
  blur?: boolean
}

const HeroGradient = React.forwardRef<HTMLDivElement, HeroGradientProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-0 isolate z-0 flex w-full flex-1 items-start justify-center pointer-events-none",
          className,
        )}
        {...props}
      >
        {gradient && (
          <>
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-white/20 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem", opacity: 0 }}
              animate={{ width: "16rem", opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-white/20 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem", opacity: 0 }}
              animate={{ width: "30rem", opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-white/30"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              animate={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-white/30 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            />

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              animate={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-white/30 [--conic-position:from_290deg_at_center_top]"
            />
          </>
        )}
      </div>
    )
  },
)
HeroGradient.displayName = "HeroGradient"

export { HeroGradient }

