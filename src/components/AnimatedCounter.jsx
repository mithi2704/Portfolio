import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) {
      return
    }

    let current = 0
    const duration = 1000
    const frame = 16
    const step = Math.max(1, Math.floor((value / duration) * frame))

    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
        return
      }
      setCount(current)
    }, frame)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="group rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 shadow-[0_12px_28px_rgba(8,47,73,0.24)]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <p className="font-mono text-4xl font-semibold text-cyan-300">{count}+</p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </motion.div>
  )
}
