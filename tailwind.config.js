/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        btc: {
          DEFAULT: '#F7931A',
          light: '#FFB84D',
          dark: '#C47415',
        },
        stacks: {
          DEFAULT: '#5546FF',
          light: '#7B6FFF',
          dark: '#3D30CC',
        },
        accent: {
          DEFAULT: '#4DB5FF',
          light: '#7DCAFF',
          dark: '#2196F3',
        },
        dark: {
          950: '#060610',
          900: '#0a0a14',
          800: '#10101c',
          700: '#1a1a2e',
          600: '#1f1f38',
          500: '#2c2c6c',
          400: '#3d3d7a',
        },
        light: {
          50: '#ffffff',
          100: '#fafbfc',
          200: '#f0f2f5',
          300: '#e4e7eb',
          400: '#cdd3da',
          500: '#9ca3af',
          600: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(85,70,255,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(247,147,26,0.08) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(77,181,255,0.08) 0px, transparent 50%)',
        'mesh-gradient-light': 'radial-gradient(at 40% 20%, rgba(85,70,255,0.06) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(247,147,26,0.04) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(77,181,255,0.04) 0px, transparent 50%)',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'grid-pattern-light': 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        'gradient-btc-stacks': 'linear-gradient(135deg, #F7931A, #5546FF)',
        'gradient-stacks-accent': 'linear-gradient(135deg, #5546FF, #4DB5FF)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(85,70,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(85,70,255,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
