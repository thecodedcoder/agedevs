'use client'

import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import { BiCodeBlock, BiGlobe, BiGroup, BiBrain, BiBarChartAlt2 } from 'react-icons/bi'
import SectionHeading from '@components/ui/SectionHeading'
import StatCard from '@components/ui/StatCard'
import Image from 'next/image'
import ME from '@assets/images/profile/proF3.jpeg'

const stats = [
  { number: '5', suffix: '+', label: 'Years Development', icon: FaAward },
  { number: '12', suffix: '+', label: 'Blockchain DApps', icon: BiCodeBlock },
  { number: '7', suffix: '+', label: 'Ecosystems', icon: BiGlobe },
  { number: '10', suffix: '+', label: 'Devs Onboarded', icon: BiGroup },
  { number: '3', suffix: '', label: 'AI Automation Projects', icon: BiBrain },
  { number: '5', suffix: '', label: 'Data Analysis Projects', icon: BiBarChartAlt2 },
]

const About = () => {
  return (
    <section id="about" className="section-padding">
      <SectionHeading subtitle="Get To Know" title="About Me" />

      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-stacks to-accent opacity-20 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-light-300 dark:border-white/10 hover:border-stacks/40 dark:hover:border-accent/40 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-stacks/10 to-accent/10" />
                <Image
                  src={ME}
                  alt="Akande Gbolahan"
                  className="relative w-full aspect-square object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <StatCard key={i} {...stat} delay={i * 0.1} />
              ))}
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-sm md:text-base text-light-600 dark:text-light-400 leading-relaxed">
                I'm Akande Gbolahan, a data analyst, AI automation specialist, and blockchain engineer based in Nigeria. I hold a Statistics background from the Federal University of Agriculture, Abeokuta (FUNAAB), which grounds my analytical thinking. Over 5+ years I've built customer segmentation pipelines, AI-powered chatbots, automated Python workflows, and decentralised applications, delivering end-to-end solutions across data, AI, and Web3.
              </p>
              <p className="text-sm md:text-base text-light-600 dark:text-light-400 leading-relaxed">
                My entry into blockchain was through the Stacks ecosystem (Bitcoin's programmable Layer 2), where I learned Clarity smart contract development and quickly became involved in developer onboarding. Through Web3Bridge Nigeria, I introduced Web2 developers transitioning into Web3 to Clarity and Stacks. Ken Rogers, Stacks' Head of DevRel, personally acknowledged the volume of referrals I generated and recognized my natural fit for Developer Relations.
              </p>
              <p className="text-sm md:text-base text-light-600 dark:text-light-400 leading-relaxed">
                Today, I serve as a Technical Instructor at LAB (Let Africa Build), teaching blockchain development and AI-powered tools to emerging developers. Every project I build carries a thread of purpose: transparency, education, community impact, or accessibility. I incorporate cultural identity into my technical work, from "Sabix" (Nigerian Pidgin for knowledge) to "Ura" (slang meaning "we are together"), because I believe the best technology reflects the people who build it.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-stacks to-accent text-white font-medium hover:shadow-lg hover:shadow-stacks/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
