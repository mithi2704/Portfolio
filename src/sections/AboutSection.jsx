import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { usePortfolio } from '../hooks/usePortfolio'

export default function AboutSection() {
  const { about, organizationHighlights, profile } = usePortfolio()

  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Engineering Growth Through Leadership and Technology"
        description={about.story}
      />
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-slate-900/80 to-slate-950/75 p-6 shadow-[0_10px_35px_rgba(8,47,73,0.25)]"
        >
          <h3 className="font-display text-2xl text-white">Professional Snapshot</h3>
          <p className="mt-4 text-slate-300">{profile.degree}</p>
          <p className="text-slate-300">{profile.university}</p>
          <p className="text-slate-300">Graduation Year: {profile.graduationYear}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {about.focusAreas.map((item) => (
              <span key={item} className="rounded-full border border-cyan-400/30 px-3 py-1 text-sm text-slate-100">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-slate-900/80 to-slate-950/75 p-6 shadow-[0_10px_35px_rgba(8,47,73,0.25)]"
        >
          <h3 className="font-display text-2xl text-white">Community Ecosystem</h3>
          <p className="mt-2 text-sm text-slate-300">Active roles and engagement across technical and professional communities.</p>
          <ul className="mt-5 space-y-3 text-slate-300">
            {organizationHighlights.map((org) => (
              <li key={org} className="rounded-xl border border-cyan-500/20 bg-slate-950/70 px-3 py-3">
                {org}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
