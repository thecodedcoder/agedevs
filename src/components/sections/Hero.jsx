import { motion } from 'framer-motion'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { socialLinks } from '@data/socialLinks'
import ME from '@assets/images/profile/proF1.png'

const ecosystemBadges = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Pandas', color: '#150458' },
  { name: 'SQL', color: '#336791' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Groq API', color: '#F55036' },
  { name: 'Stacks / Bitcoin L2', color: '#5546FF' },
  { name: 'Solidity', color: '#627EEA' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Hero = () => {
  return (
    <header id="hero" className="relative min-h-screen flex items-center mesh-bg">
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              variants={itemVariants}
              className="text-sm font-mono text-stacks dark:text-accent mb-3 tracking-wider"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-700 dark:text-light-100 mb-4 leading-tight"
            >
              Akande Gbolahan{' '}
              <span className="gradient-text">Emmanuel</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold text-stacks dark:text-stacks-light mb-4"
            >
              Data Analyst · AI Automation Specialist · Blockchain Engineer | Technical Instructor
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-light-600 dark:text-light-400 mb-6 max-w-lg leading-relaxed"
            >
              I turn raw data into decisions, build AI-powered automation tools, and architect blockchain systems — with 5+ years of hands-on delivery across data analysis, chatbot development, and multi-chain DApps.
            </motion.p>

            {/* Ecosystem badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              {ecosystemBadges.map((eco) => (
                <span
                  key={eco.name}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-light-300 dark:border-white/10 bg-light-100/80 dark:bg-dark-700/50 text-dark-700 dark:text-light-300"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: eco.color }}
                  />
                  {eco.name}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-stacks to-accent text-white font-medium hover:shadow-lg hover:shadow-stacks/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <BiMessageSquareDetail size={18} />
                Let's Connect
              </a>
              <a
                href="https://linkedin.com/in/gbolahan-akande-079ba814b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stacks/30 dark:border-accent/30 text-stacks dark:text-accent font-medium hover:bg-stacks/5 dark:hover:bg-accent/5 transition-all duration-300"
              >
                <FiDownload size={18} />
                View CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-light-300 dark:border-white/10 text-light-600 dark:text-light-400 hover:text-stacks dark:hover:text-accent hover:border-stacks/30 dark:hover:border-accent/30 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-btc via-stacks to-accent blur-2xl opacity-20 animate-pulse-glow" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br from-btc via-stacks to-accent">
                <div className="w-full h-full rounded-full overflow-hidden bg-light-200 dark:bg-dark-800">
                  <img
                    src={ME}
                    alt="Akande Gbolahan Emmanuel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-light-500 dark:text-light-500 hover:text-stacks dark:hover:text-accent transition-colors">
            <span className="text-xs font-mono">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
