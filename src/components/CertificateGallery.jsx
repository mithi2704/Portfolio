import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Expand, X } from 'lucide-react'

export default function CertificateGallery({ certificates }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((certificate, idx) => (
          <motion.button
            key={certificate.title}
            type="button"
            onClick={() => setActive(certificate)}
            className="group flex h-full flex-col rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5 text-left"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{certificate.issuer}</p>
            <h3 className="mt-2 font-display text-2xl text-white">{certificate.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{certificate.note}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300 md:mt-auto md:pt-5">
              <Expand size={14} />
              Open Preview
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-cyan-300/30 bg-slate-950 p-6 md:p-8"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full border border-cyan-300/40 p-2 text-cyan-200"
                onClick={() => setActive(null)}
              >
                <X size={16} />
              </button>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{active.issuer}</p>
              <h4 className="mt-3 font-display text-3xl text-white">{active.title}</h4>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{active.note}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
