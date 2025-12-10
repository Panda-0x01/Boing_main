'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedBeamProps {
  className?: string
  duration?: number
  delay?: number
  pathLength?: number
}

export function AnimatedBeam({
  className,
  duration = 3,
  delay = 0,
  pathLength = 1,
}: AnimatedBeamProps) {
  return (
    <motion.div
      className={cn(
        "absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent",
        className
      )}
      initial={{ 
        scaleX: 0,
        opacity: 0 
      }}
      animate={{ 
        scaleX: [0, pathLength, 0],
        opacity: [0, 1, 0] 
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: "left" }}
    />
  )
}