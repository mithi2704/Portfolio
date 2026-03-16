import { motion } from 'framer-motion'
import { pageTransition } from '../animations/motionVariants'
import { useSEO } from '../hooks/useSEO'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import JourneyTimelineSection from '../sections/JourneyTimelineSection'
import AchievementsSection from '../sections/AchievementsSection'
import ProjectsSection from '../sections/ProjectsSection'
import ImpactDashboardSection from '../sections/ImpactDashboardSection'
import SkillsSection from '../sections/SkillsSection'
import CertificatesSection from '../sections/CertificatesSection'

export default function HomePage() {
  useSEO({
    title: 'Dhinesh VN | IEEE Student Leader Portfolio',
    description:
      'Portfolio of Dhinesh VN, a global student technologist and IEEE student leader focused on AI, cybersecurity, web development, and smart cities.',
    url: 'https://dhineshvn-portfolio.vercel.app/',
  })

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeroSection />
      <AboutSection />
      <JourneyTimelineSection />
      <AchievementsSection />
      <ProjectsSection />
      <ImpactDashboardSection />
      <SkillsSection />
      <CertificatesSection />
    </motion.div>
  )
}
