import { Github, Linkedin, Mail } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'

export default function Footer() {
  const { profile, contact } = usePortfolio()

  return (
    <footer className="border-t border-cyan-500/20 bg-black/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:px-10">
        <p>
          {profile.name} | {profile.degree} | Class of {profile.graduationYear}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contact.email}`} aria-label="Email" className="social-link"><Mail size={18} /></a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link"><Github size={18} /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
