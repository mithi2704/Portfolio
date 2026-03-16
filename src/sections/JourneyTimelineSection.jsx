import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { usePortfolio } from '../hooks/usePortfolio'

export default function JourneyTimelineSection() {
  const { timeline } = usePortfolio()

  return (
    <section id="journey" className="section-shell">
      <SectionHeading
        eyebrow="IEEE Journey"
        title="Leadership Timeline"
        description="Progression across ambassador programs, chapter leadership, conference volunteering, and technical outreach initiatives."
      />

      <div className="max-w-5xl">
        <Timeline timeline={timeline} />
      </div>
    </section>
  )
}
