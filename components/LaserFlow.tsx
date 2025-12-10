'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LaserFlowProps {
  className?: string
  color?: string
  direction?: 'horizontal' | 'vertical'
  speed?: number
}

export default function LaserFlow({ 
  className = '', 
  color = '#00d4ff',
  direction = 'horizontal',
  speed = 2
}: LaserFlowProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const variants = {
    hidden: {
      x: direction === 'horizontal' ? '-100%' : 0,
      y: direction === 'vertical' ? '-100%' : 0,
      opacity: 0,
    },
    visible: {
      x: direction === 'horizontal' ? '100%' : 0,
      y: direction === 'vertical' ? '100%' : 0,
      opacity: [0, 1, 0],
      transition: {
        duration: speed,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  }

  if (!isVisible) return null

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={variants}
        style={{
          background: direction === 'horizontal' 
            ? `linear-gradient(90deg, transparent, ${color}80, transparent)`
            : `linear-gradient(180deg, transparent, ${color}80, transparent)`,
        }}
      />
    </div>
  )
}