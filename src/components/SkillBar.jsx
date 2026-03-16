import { motion } from 'framer-motion'

export default function SkillBar({ skill }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-200">{skill.name}</span>
        <span className="font-mono text-cyan-300">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
