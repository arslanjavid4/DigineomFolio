'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Balancer } from 'react-wrap-balancer'
import { SplineScene } from '@/components/ui/spline-scene'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const splineRef = useRef<any>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1 // Normalize to -1 to 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1 // Normalize to -1 to 1
      
      setMousePosition({ x, y })

      // Update Spline camera/rotation if loaded
      if (splineRef.current) {
        try {
          const camera = splineRef.current.findObjectByName('Camera')
          if (camera) {
            // Rotate camera based on mouse position
            camera.rotation.x = y * 0.3
            camera.rotation.y = x * 0.3
          }
        } catch (error) {
          // Silently handle if object not found
        }
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const handleSplineLoad = (spline: any) => {
    splineRef.current = spline
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-visible pt-32 pb-20 px-4"
    >
      {/* Content */}
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left pl-4 lg:pl-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="gradient-text block">
                <Balancer>
                  Big ideas, smart strategies, and endless creativity.
                </Balancer>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed"
            >
              <Balancer>
                Transforming businesses through innovative software development and cutting-edge web design.
              </Balancer>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  Get Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/projects">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all gap-2">
                  View Our Work
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive 3D Spline Component */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] flex items-end justify-center overflow-visible mb-0 pr-4 lg:pr-8"
          >
            <div className="w-full h-full relative max-w-full" style={{ transform: 'scale(1.1)', transformOrigin: 'center bottom', marginBottom: 0 }}>
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                onLoad={handleSplineLoad}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
