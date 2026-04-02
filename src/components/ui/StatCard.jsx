import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import useInView from '@hooks/useInView'

const StatCard = ({ number, suffix = '', label, icon: Icon, delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold: 0.5 })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const target = parseInt(number)
      const duration = 1500
      const steps = 40
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 glass-card"
    >
      {Icon && <Icon className="mx-auto mb-3 text-stacks dark:text-accent" size={28} />}
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {count}{suffix}
      </div>
      <p className="text-sm text-light-600 dark:text-light-400">{label}</p>
    </motion.div>
  )
}

export default StatCard
