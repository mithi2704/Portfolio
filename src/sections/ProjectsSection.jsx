import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { usePortfolio } from '../hooks/usePortfolio'

export default function ProjectsSection() {
  const { projects } = usePortfolio()

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects and Initiatives"
        title="Builder Mindset in Action"
        description="Portfolio initiatives built around IEEE roles, innovation challenges, and community-scale execution."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
