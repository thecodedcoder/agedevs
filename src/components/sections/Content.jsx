'use client'

import { motion } from 'framer-motion'
import { FaYoutube, FaBlog, FaMedium } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'
import { FiExternalLink, FiPlus, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '@components/ui/SectionHeading'
import { contentItems, allArticles, blogLinks } from '@data/content'

const platformIcons = {
  youtube: FaYoutube,
  blog: FaBlog,
  thread: FaBlog,
}

const platformColors = {
  youtube: 'text-red-500',
  blog: 'text-stacks dark:text-accent',
  thread: 'text-btc',
}

const Content = () => {
  return (
    <section className="section-padding">
      <SectionHeading subtitle="Sharing Knowledge" title="Writing & Content" />

      <div className="section-container">
        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contentItems.map((item, i) => {
            const Icon = platformIcons[item.platform] || FaBlog

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={platformColors[item.platform] || 'text-stacks'} size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider text-light-500">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-dark-700 dark:text-light-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-light-600 dark:text-light-400 mb-4">
                  {item.description}
                </p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-stacks dark:text-accent hover:text-btc transition-colors font-medium"
                  >
                    {item.platform === 'youtube' ? 'Watch' : 'Read More'} <FiExternalLink size={14} />
                  </a>
                )}
              </motion.article>
            )
          })}
        </div>

        {/* All Articles List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-8 mb-8"
        >
          <h3 className="text-lg font-bold text-dark-700 dark:text-light-100 mb-6">
            All Published Articles ({allArticles.length})
          </h3>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {allArticles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 py-2 group border-b border-light-200 dark:border-white/5 last:border-0"
              >
                <FiArrowRight
                  size={14}
                  className="mt-1 flex-shrink-0 text-light-500 group-hover:text-stacks dark:group-hover:text-accent transition-colors"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-dark-700 dark:text-light-200 group-hover:text-stacks dark:group-hover:text-accent transition-colors line-clamp-1">
                    {article.title}
                  </span>
                  <span className="text-xs text-light-500 ml-2">
                    {article.platform}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Blog Links + More Coming Soon */}
        <div className="grid sm:grid-cols-3 gap-4">
          {blogLinks.map((blog) => (
            <motion.a
              key={blog.name}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card-hover p-5 text-center group"
            >
              <div className="text-2xl mb-2">
                {blog.name === 'Hashnode' ? (
                  <SiHashnode className="mx-auto text-blue-500" />
                ) : (
                  <FaMedium className="mx-auto text-dark-700 dark:text-light-100" />
                )}
              </div>
              <h4 className="text-sm font-bold text-dark-700 dark:text-light-100 mb-1">
                {blog.name}
              </h4>
              <p className="text-xs text-light-500 mb-2">{blog.count} articles</p>
              <span className="text-xs text-stacks dark:text-accent group-hover:text-btc transition-colors font-medium inline-flex items-center gap-1">
                Visit Blog <FiExternalLink size={12} />
              </span>
            </motion.a>
          ))}

          {/* More Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-hover p-5 flex flex-col items-center justify-center text-center group cursor-default"
          >
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-stacks/40 dark:border-accent/40 flex items-center justify-center mb-2 group-hover:border-stacks dark:group-hover:border-accent transition-colors">
              <FiPlus className="text-stacks/60 dark:text-accent/60 group-hover:text-stacks dark:group-hover:text-accent transition-colors" size={18} />
            </div>
            <h4 className="text-sm font-bold text-dark-700 dark:text-light-100 mb-1">
              More Coming Soon
            </h4>
            <p className="text-xs text-light-500">
              New articles and tutorials in the works.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Content
