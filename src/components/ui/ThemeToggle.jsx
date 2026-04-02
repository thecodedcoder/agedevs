import { motion } from 'framer-motion'
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { useTheme } from '@context/ThemeContext'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-1.5 sm:p-2 rounded-full bg-light-200 dark:bg-dark-700 border border-light-300 dark:border-white/10 text-dark-700 dark:text-light-100 hover:border-stacks/50 transition-colors duration-300 ${className}`}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? <BsSun className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <BsMoonStars className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
