import SectionHeading from '../components/SectionHeading'
import SkillBar from '../components/SkillBar'
import { usePortfolio } from '../hooks/usePortfolio'

export default function SkillsSection() {
  const { skills } = usePortfolio()

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technology Stack and Tooling"
        description="Core engineering capabilities grouped across programming fundamentals, technologies, and workflow tools."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {Object.entries(skills).map(([category, values]) => (
          <article key={category} className="h-full rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
            <h3 className="font-display text-2xl text-white">{category}</h3>
            <div className="mt-6 space-y-5">
              {values.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
