'use client'

import { motion } from 'framer-motion'

const SectionHeading = ({ subtitle, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <p className="text-sm uppercase tracking-widest text-light-600 dark:text-light-500 mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-stacks dark:text-accent">
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionHeading
