import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLock } from 'react-icons/fi'
import Badge from './Badge'

const statusColors = {
  'Built': 'success',
  'In Development': 'warning',
  'Hackathon': 'stacks',
  'Published': 'success',
  'Completed': 'success',
}

const ProjectCard = ({ project, delay = 0 }) => {
  const { title, type, description, techStack, github, demo, status, ecosystem, blockchain, privateRepo } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card-hover overflow-hidden group"
    >
      <div className="h-2 bg-gradient-to-r from-btc via-stacks to-accent" />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-dark-700 dark:text-light-100 group-hover:text-stacks dark:group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-xs text-light-600 dark:text-light-500 mt-0.5">{type}</p>
          </div>
          <Badge label={status} color={statusColors[status] || 'default'} />
        </div>

        <p className="text-sm text-light-600 dark:text-light-400 mb-4 line-clamp-3">
          {description}
        </p>

        {blockchain && (
          <p className="text-xs font-medium text-stacks dark:text-stacks-light mb-3">
            {blockchain}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-light-200 dark:bg-dark-600 text-light-600 dark:text-light-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-light-300 dark:border-white/10">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-light-600 dark:text-light-400 hover:text-stacks dark:hover:text-accent transition-colors"
            >
              <FiGithub size={16} />
              Code
            </a>
          ) : privateRepo ? (
            <span className="flex items-center gap-2 text-sm text-light-500 dark:text-light-500/70">
              <FiLock size={14} />
              Private Repo
            </span>
          ) : null}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stacks dark:text-accent hover:text-btc transition-colors font-medium"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
