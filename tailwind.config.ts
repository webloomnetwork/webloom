import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#33ccff',
          DEFAULT: '#0066cc', // Vibrant Blue string
          dark: '#004aad',
        },
        accent: {
          DEFAULT: '#ff8800', // Vibrant Orange
          light: '#ffaa00',
        },
        navy: {
          DEFAULT: '#0a192f',
        },
        background: '#FFFFFF',
        foreground: '#0A192F',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'glow-primary': '0 0 60px -15px rgba(0, 102, 204, 0.5)',
        'glow-accent': '0 0 60px -10px rgba(255, 136, 0, 0.5)',
      },
      animation: {
        'float': 'float-orb 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        'float-orb': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)', opacity: '0.8' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)', opacity: '0.5' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 40px -10px rgba(255, 136, 0, 0.5)' },
          '50%': { boxShadow: '0 0 60px -5px rgba(255, 136, 0, 0.7)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
