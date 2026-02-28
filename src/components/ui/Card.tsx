import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
    const baseClasses = `bg-white rounded-3xl border border-neutral-100/50 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group ${className}`

    if (hoverEffect) {
        return (
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className={`${baseClasses} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_24px_48px_rgb(0,0,0,0.1)] hover:border-primary/25 transition-all duration-300`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">{children}</div>
            </motion.div>
        )
    }

    return (
        <div className={`${baseClasses} shadow-[0_8px_30px_rgb(0,0,0,0.04)]`}>
            <div className="relative z-10">{children}</div>
        </div>
    )
}
