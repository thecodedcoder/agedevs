'use client'

import SectionHeading from '@components/ui/SectionHeading'
import TimelineItem from '@components/ui/TimelineItem'
import { experiences } from '@data/experience'

const WorkExperience = () => {
  return (
    <section id="experience" className="section-padding">
      <SectionHeading subtitle="My Journey" title="Work Experience" />

      <div className="section-container max-w-3xl">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={exp.org}
            {...exp}
            isLast={i === experiences.length - 1}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
