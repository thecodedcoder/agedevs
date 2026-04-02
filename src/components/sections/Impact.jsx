import { motion } from 'framer-motion'
import StatCard from '@components/ui/StatCard'
import { BiCodeBlock, BiGlobe, BiTrophy, BiCode, BiPen, BiTime } from 'react-icons/bi'

const impactStats = [
  { number: '12', suffix: '+', label: 'Blockchain Projects', icon: BiCodeBlock },
  { number: '7', suffix: '+', label: 'Ecosystems', icon: BiGlobe },
  { number: '4', suffix: '', label: 'Hackathons', icon: BiTrophy },
  { number: '5', suffix: '', label: 'Smart Contract Languages', icon: BiCode },
  { number: '30', suffix: '-day', label: 'Technical Writing Series', icon: BiPen },
  { number: '10', suffix: '', label: 'Bitcoin Crypto Chapters', icon: BiTime },
]

const Impact = () => {
  return (
    <section className="section-padding mesh-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-light-600 dark:text-light-500 mb-2">
            The Journey So Far
          </p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {impactStats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
