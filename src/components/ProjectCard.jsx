import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group flex h-full flex-col rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
    >
      <h3 className="font-display text-2xl text-white">{project.name}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300"><span className="font-semibold text-cyan-300">Problem:</span> {project.problem}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-300"><span className="font-semibold text-cyan-300">Solution:</span> {project.solution}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-slate-200">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
