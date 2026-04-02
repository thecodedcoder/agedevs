import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import SectionHeading from '@components/ui/SectionHeading'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    emailjs
      .sendForm('service_y9fbcvl', 'template_8jjkzdl', form.current, 'Vs7k7QR0zkm_tWTRE')
      .then(() => {
        setStatus('success')
        e.target.reset()
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <section id="contact" className="section-padding">
      <SectionHeading subtitle="Get In Touch" title="Contact Me" />

      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-light-600 dark:text-light-400 mb-10 max-w-lg mx-auto"
        >
          Open to DevRel opportunities, hackathon collaborations, speaking engagements, and blockchain consulting.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href="mailto:geakande@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-5 block text-center group"
            >
              <MdOutlineEmail className="mx-auto mb-2 text-stacks dark:text-accent group-hover:text-btc transition-colors" size={28} />
              <h4 className="text-sm font-bold text-dark-700 dark:text-light-100 mb-1">Email</h4>
              <p className="text-xs text-light-600 dark:text-light-500">geakande@gmail.com</p>
              <span className="text-xs text-stacks dark:text-accent mt-2 inline-block">Send a message</span>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=+2348068711642"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-5 block text-center group"
            >
              <BsWhatsapp className="mx-auto mb-2 text-stacks dark:text-accent group-hover:text-emerald-500 transition-colors" size={28} />
              <h4 className="text-sm font-bold text-dark-700 dark:text-light-100 mb-1">WhatsApp</h4>
              <p className="text-xs text-light-600 dark:text-light-500">+234 8068 711 642</p>
              <span className="text-xs text-stacks dark:text-accent mt-2 inline-block">Send a message</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-light-200 dark:bg-dark-700 border border-light-300 dark:border-white/10 text-dark-700 dark:text-light-100 placeholder-light-500 dark:placeholder-light-500/50 focus:border-stacks dark:focus:border-accent focus:outline-none transition-colors text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-light-200 dark:bg-dark-700 border border-light-300 dark:border-white/10 text-dark-700 dark:text-light-100 placeholder-light-500 dark:placeholder-light-500/50 focus:border-stacks dark:focus:border-accent focus:outline-none transition-colors text-sm"
            />
            <textarea
              name="msgArea"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-light-200 dark:bg-dark-700 border border-light-300 dark:border-white/10 text-dark-700 dark:text-light-100 placeholder-light-500 dark:placeholder-light-500/50 focus:border-stacks dark:focus:border-accent focus:outline-none transition-colors text-sm resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-stacks to-accent text-white font-medium hover:shadow-lg hover:shadow-stacks/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-500 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center">Failed to send. Please try again or email directly.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
