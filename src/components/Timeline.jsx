import { motion } from 'framer-motion'

export default function Timeline({ timeline }) {
  return (
    <div className="relative mt-10 border-l border-cyan-500/30 pl-7">
      {timeline.map((item, index) => (
        <motion.article
          key={`${item.role}-${item.organization}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.06 }}
          className="relative mb-7 rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5"
        >
          <span className="absolute -left-[36px] top-6 h-4 w-4 rounded-full border-2 border-cyan-300 bg-slate-950" />
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.organization}</p>
          <h3 className="mt-2 font-display text-2xl text-white">{item.role}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.summary}</p>
        </motion.article>
      ))}
    </div>
  )
}
