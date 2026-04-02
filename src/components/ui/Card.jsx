'use client'

import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass-card p-6 ${hover ? 'glass-card-hover' : 'glass-card'} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
