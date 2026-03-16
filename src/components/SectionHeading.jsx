import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/motionVariants'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-3xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text font-display text-3xl text-transparent md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">{description}</p>}
    </motion.div>
  )
}
