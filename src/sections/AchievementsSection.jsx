import SectionHeading from '../components/SectionHeading'
import AchievementCard from '../components/AchievementCard'
import { usePortfolio } from '../hooks/usePortfolio'

export default function AchievementsSection() {
  const { achievements } = usePortfolio()

  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognitions and Milestones"
        description="Awards and finalist outcomes reflecting leadership, innovation, and impact-driven execution."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.title} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}
