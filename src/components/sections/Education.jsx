import { motion } from 'framer-motion'
import SectionHeading from '@components/ui/SectionHeading'
import { education } from '@data/education'

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <SectionHeading subtitle="Learning & Growth" title="Education & Certifications" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card-hover p-6"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-base font-bold text-dark-700 dark:text-light-100 mb-2">
                {item.institution}
              </h3>
              <p className="text-sm font-medium text-stacks dark:text-accent mb-2">
                {item.credential}
              </p>
              {item.location && (
                <p className="text-xs text-light-600 dark:text-light-500">
                  {item.location}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
