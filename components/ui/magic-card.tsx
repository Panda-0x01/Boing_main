'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MagicCardProps {
  children: ReactNode
  className?: string
  gradientColor?: string
}

export function MagicCard({
  children,
  className,
  gradientColor = "#00d4ff"
}: MagicCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
        "before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] before:transition-transform",
        "hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${gradientColor}20, transparent 70%)`
        }}
      />
    </motion.div>
  )
}