import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import SectionHeading from '@components/ui/SectionHeading'
import ProjectCard from '@components/ui/ProjectCard'
import { projects } from '@data/projects'

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <SectionHeading subtitle="What I've Built" title="Portfolio" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.08}
            />
          ))}

          {/* More Upcoming Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.08 }}
            className="glass-card-hover overflow-hidden group flex flex-col items-center justify-center min-h-[280px] cursor-default"
          >
            <div className="h-2 bg-gradient-to-r from-stacks/30 via-accent/30 to-btc/30 absolute top-0 left-0 right-0" />
            <div className="flex flex-col items-center gap-4 p-6 text-center">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-stacks/40 dark:border-accent/40 flex items-center justify-center group-hover:border-stacks dark:group-hover:border-accent transition-colors">
                <FiPlus className="text-stacks/60 dark:text-accent/60 group-hover:text-stacks dark:group-hover:text-accent transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark-700 dark:text-light-100">
                More Coming Soon
              </h3>
              <p className="text-sm text-light-600 dark:text-light-400 max-w-xs">
                New projects are always in the works, building across ecosystems, one commit at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
