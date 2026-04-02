'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@components/ui/SectionHeading'
import { ecosystems } from '@data/ecosystems'

const colorClasses = {
  stacks: 'border-stacks/30 hover:border-stacks/60',
  btc: 'border-btc/30 hover:border-btc/60',
  ethereum: 'border-blue-500/30 hover:border-blue-500/60',
  accent: 'border-accent/30 hover:border-accent/60',
}

const dotColors = {
  stacks: 'bg-stacks',
  btc: 'bg-btc',
  ethereum: 'bg-blue-500',
  accent: 'bg-accent',
}

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="section-padding mesh-bg">
      <SectionHeading subtitle="Where I Build" title="Blockchain Ecosystems" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystems.map((eco, i) => (
            <motion.div
              key={eco.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass-card p-6 border-l-4 ${colorClasses[eco.color] || colorClasses.accent} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-3 h-3 rounded-full ${dotColors[eco.color] || dotColors.accent}`} />
                <h3 className="text-base font-bold text-dark-700 dark:text-light-100">
                  {eco.name}
                </h3>
              </div>

              <p className="text-sm text-light-600 dark:text-light-400 mb-4">
                {eco.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {eco.projects.map((project) => (
                  <span
                    key={project}
                    className="text-xs px-2 py-0.5 rounded-md bg-light-200 dark:bg-dark-600 text-light-600 dark:text-light-400 font-mono"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
