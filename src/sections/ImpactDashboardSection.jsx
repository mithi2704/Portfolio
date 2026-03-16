import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { usePortfolio } from '../hooks/usePortfolio'

export default function ImpactDashboardSection() {
  const { impactMetrics } = usePortfolio()

  return (
    <section id="impact" className="section-shell">
      <SectionHeading
        eyebrow="Impact Dashboard"
        title="Contribution Footprint"
        description="A quick view of participation volume, leadership responsibilities, volunteer execution, and global program involvement."
      />
      <div className="mt-10 space-y-5 rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 md:p-8">
        {impactMetrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
              <span>{metric.label}</span>
              <span className="font-mono text-cyan-300">{metric.value}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-800">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.percent}%` }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
