'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MagicButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function MagicButton({
  children,
  className,
  variant = 'primary',
  onClick,
  href,
  target,
  rel
}: MagicButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg",
    "overflow-hidden transition-all duration-300 group",
    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
    "before:translate-x-[-100%] before:transition-transform before:duration-700",
    "hover:before:translate-x-[100%]",
    variant === 'primary' 
      ? "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:shadow-lg hover:shadow-cyan-500/25" 
      : "border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10",
    className
  )

  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Component
        className={baseClasses}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    </motion.div>
  )
}