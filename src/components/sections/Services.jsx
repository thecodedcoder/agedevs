'use client'

import { motion } from 'framer-motion'
import { BiCheck } from 'react-icons/bi'
import SectionHeading from '@components/ui/SectionHeading'
import { services } from '@data/services'

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <SectionHeading subtitle="What I Offer" title="Services" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover overflow-hidden"
              >
                <div className="p-4 bg-gradient-to-r from-stacks/10 to-accent/10 dark:from-stacks/20 dark:to-accent/20 border-b border-light-300 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <Icon className="text-stacks dark:text-accent" size={24} />
                    <h3 className="text-lg font-bold text-dark-700 dark:text-light-100">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <ul className="p-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BiCheck className="text-stacks dark:text-accent mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-light-600 dark:text-light-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
