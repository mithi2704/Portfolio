import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm({ email }) {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <h3 className="font-display text-2xl text-white">Start a Conversation</h3>
      <div className="mt-5 space-y-4">
        <label className="block text-sm text-slate-300">
          Your Name
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-cyan-400/30 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/50 transition focus:ring"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Message
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="mt-2 w-full rounded-xl border border-cyan-400/30 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/50 transition focus:ring"
          />
        </label>
      </div>
      <button type="submit" className="btn-primary mt-5">Send Message</button>
    </motion.form>
  )
}
