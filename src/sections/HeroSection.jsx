import { usePortfolio } from '../hooks/usePortfolio'
import Hero from '../components/Hero'

export default function HeroSection() {
  const { profile, heroStats } = usePortfolio()

  return (
    <section id="home" className="section-shell pb-12 pt-10 md:pt-12">
      <Hero profile={profile} heroStats={heroStats} />
    </section>
  )
}
