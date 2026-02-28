import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    href?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', href, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none'

        const variants = {
            primary: 'bg-primary text-white hover:bg-primary-dark shadow-[0_0_20px_-5px_rgba(0,102,204,0.4)] hover:shadow-[0_0_30px_-5px_rgba(0,102,204,0.6)]',
            secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg',
            outline: 'border-2 border-primary/20 text-neutral-900 hover:border-primary hover:bg-primary/5',
            ghost: 'hover:bg-primary/5 text-primary font-semibold',
        }

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-8 text-base',
            lg: 'h-14 px-10 text-lg',
        }

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

        if (href) {
            return (
                <Link href={href} className={`${classes} active:scale-[0.98] transition-transform duration-150`}>
                    {children as React.ReactNode}
                </Link>
            )
        }

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={classes}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(props as any)}
            >
                {children}
            </motion.button>
        )
    }
)
Button.displayName = 'Button'
