import { ThemeProvider } from '@context/ThemeContext'
import Nav from '@components/layout/Nav'
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
import Skills from '@components/sections/Skills'
import WorkExperience from '@components/sections/WorkExperience'
import Portfolio from '@components/sections/Portfolio'
import Ecosystem from '@components/sections/Ecosystem'
import Services from '@components/sections/Services'
import Impact from '@components/sections/Impact'
import Education from '@components/sections/Education'
import Testimonials from '@components/sections/Testimonials'
import Content from '@components/sections/Content'
import Contact from '@components/sections/Contact'
import Footer from '@components/layout/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-100 dark:bg-dark-900 text-dark-700 dark:text-light-100 transition-colors duration-300">
        <Hero />
        <Nav />
        <About />
        <Skills />
        <WorkExperience />
        <Portfolio />
        <Ecosystem />
        <Services />
        <Impact />
        <Education />
        <Testimonials />
        <Content />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
