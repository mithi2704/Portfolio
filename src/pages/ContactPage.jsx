import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { pageTransition } from '../animations/motionVariants'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import { usePortfolio } from '../hooks/usePortfolio'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  const { contact } = usePortfolio()

  useSEO({
    title: 'Contact | Dhinesh VN',
    description:
      'Connect with Dhinesh VN for IEEE collaborations, frontend development opportunities, and innovation programs.',
    url: 'https://dhineshvn-portfolio.vercel.app/contact',
  })

  return (
    <motion.section
      className="section-shell"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.45 }}
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let Us Build Something Global"
        description="Open to IEEE collaborations, scholarship opportunities, technical communities, and frontend engineering work."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
          <h3 className="font-display text-2xl text-white">Professional Channels</h3>
          <div className="mt-6 space-y-4">
            <a href={`mailto:${contact.email}`} className="contact-link inline-flex items-center gap-3">
              <Mail size={18} />
              {contact.email}
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="contact-link inline-flex items-center gap-3">
              <Github size={18} />
              GitHub Profile
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link inline-flex items-center gap-3">
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </article>

        <ContactForm email={contact.email} />
      </div>
    </motion.section>
  )
}
