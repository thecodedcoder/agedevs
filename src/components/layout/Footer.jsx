import { socialLinks } from '@data/socialLinks'

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Ecosystems', href: '#ecosystem' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="py-12 border-t border-light-300 dark:border-white/10">
      <div className="section-container text-center">
        <a href="#hero" className="text-2xl font-bold gradient-text mb-6 inline-block">
          Agedevs
        </a>

        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-light-600 dark:text-light-500 hover:text-stacks dark:hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-light-600 dark:text-light-500 hover:text-stacks dark:hover:text-accent transition-colors"
              aria-label={link.name}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-light-500 dark:text-light-500/60">
          &copy; {new Date().getFullYear()} Agedevs | Blockchain Developer. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
