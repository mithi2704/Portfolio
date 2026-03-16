import { motion } from 'framer-motion'

export default function AchievementCard({ achievement }) {
  return (
    <motion.article
      className="flex h-full flex-col rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, borderColor: 'rgba(34,211,238,0.6)' }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{achievement.organization}</p>
      <h3 className="mt-2 font-display text-2xl text-white">{achievement.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{achievement.description}</p>
      <p className="mt-5 border-l-2 border-cyan-400/80 pl-3 text-sm text-slate-100 md:mt-auto">{achievement.impact}</p>
    </motion.article>
  )
}
