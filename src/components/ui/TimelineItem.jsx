import { motion } from 'framer-motion'

const TimelineItem = ({ org, role, period, description, impact, isLast = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-10 group"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-light-300 dark:bg-dark-500" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-[3px] border-stacks dark:border-accent bg-light-100 dark:bg-dark-900 group-hover:border-btc transition-colors duration-300" />

      <div className="glass-card-hover p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-base font-bold text-dark-700 dark:text-light-100">
            {org}
          </h3>
          <span className="text-xs font-mono text-stacks dark:text-accent whitespace-nowrap">
            {period}
          </span>
        </div>

        <p className="text-sm font-medium text-stacks dark:text-stacks-light mb-2">
          {role}
        </p>

        <p className="text-sm text-light-600 dark:text-light-400 leading-relaxed">
          {description}
        </p>

        {impact && (
          <p className="text-xs text-btc dark:text-btc-light mt-3 font-medium">
            {impact}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default TimelineItem
