import SectionHeading from '@components/ui/SectionHeading'
import SkillCategory from '@components/ui/SkillCategory'
import { skillCategories } from '@data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <SectionHeading subtitle="What I Bring" title="Skills & Technologies" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCategory
              key={category.title}
              {...category}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
