'use client'

import { motion } from 'framer-motion'
import { BsPatchCheckFill } from 'react-icons/bs'

const levelColors = {
  'Advanced': 'text-btc dark:text-btc-light',
  'Experienced': 'text-stacks dark:text-stacks-light',
  'Intermediate': 'text-accent dark:text-accent',
  'Learning': 'text-light-600 dark:text-light-500',
  'Hackathon': 'text-emerald-500 dark:text-emerald-400',
  'Basic': 'text-light-500 dark:text-light-500',
}

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card-hover p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        {Icon && <Icon className="text-stacks dark:text-accent" size={22} />}
        <h3 className="text-lg font-bold text-dark-700 dark:text-light-100">{title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-start gap-2">
            <BsPatchCheckFill className="text-stacks dark:text-accent mt-0.5 flex-shrink-0" size={14} />
            <div>
              <p className="text-sm font-medium text-dark-700 dark:text-light-100">
                {skill.name}
              </p>
              <p className={`text-xs ${levelColors[skill.level] || 'text-light-500'}`}>
                {skill.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCategory
