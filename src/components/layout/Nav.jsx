import { motion } from 'framer-motion'
import { navItems } from '@data/navigation'
import useScrollSpy from '@hooks/useScrollSpy'
import ThemeToggle from '@components/ui/ThemeToggle'

const Nav = () => {
  const sectionIds = navItems.map((item) => item.id)
  const activeId = useScrollSpy(sectionIds)

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-4 left-0 right-0 mx-auto w-fit z-50 flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-light-300 dark:border-white/10 shadow-lg shadow-dark-900/10 dark:shadow-dark-950/40"
    >
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeId === item.id

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative p-1.5 sm:p-2.5 rounded-full transition-all duration-300 group ${
              isActive
                ? 'text-white'
                : 'text-light-600 dark:text-light-500 hover:text-stacks dark:hover:text-accent'
            }`}
            aria-label={item.label}
          >
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-stacks to-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <Icon className="relative z-10 w-4 h-4 sm:w-[18px] sm:h-[18px]" />

            {/* Tooltip */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-dark-700 dark:bg-dark-600 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </a>
        )
      })}

      <div className="w-px h-4 sm:h-5 bg-light-300 dark:bg-white/10 mx-0.5 sm:mx-1" />
      <ThemeToggle />
    </motion.nav>
  )
}

export default Nav
