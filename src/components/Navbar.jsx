import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { usePortfolioPdf } from '../hooks/usePortfolioPdf'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isExporting, downloadPdf } = usePortfolioPdf()

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/#home" className="font-display text-xl tracking-tight text-cyan-300">
          Dhinesh VN
        </a>
        <button
          type="button"
          className="rounded-lg border border-cyan-400/40 p-2 text-cyan-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="/#about" className="nav-link">About</a>
          <a href="/#journey" className="nav-link">Journey</a>
          <a href="/#achievements" className="nav-link">Achievements</a>
          <a href="/#projects" className="nav-link">Projects</a>
          <a href="/#skills" className="nav-link">Skills</a>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <button
            type="button"
            onClick={downloadPdf}
            className="btn-nav-action inline-flex items-center gap-2"
            disabled={isExporting}
          >
            <Download size={14} />
            {isExporting ? 'Exporting...' : 'Download Portfolio'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-cyan-500/20 bg-black/95 px-6 py-4 text-sm text-slate-200 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <a className="rounded-lg px-3 py-2 hover:bg-cyan-400/10" href="/#about" onClick={() => setOpen(false)}>About</a>
            <a className="rounded-lg px-3 py-2 hover:bg-cyan-400/10" href="/#journey" onClick={() => setOpen(false)}>Journey</a>
            <a className="rounded-lg px-3 py-2 hover:bg-cyan-400/10" href="/#achievements" onClick={() => setOpen(false)}>Achievements</a>
            <a className="rounded-lg px-3 py-2 hover:bg-cyan-400/10" href="/#projects" onClick={() => setOpen(false)}>Projects</a>
            <a className="rounded-lg px-3 py-2 hover:bg-cyan-400/10" href="/#skills" onClick={() => setOpen(false)}>Skills</a>
            <NavLink className="rounded-lg px-3 py-2 hover:bg-cyan-400/10" to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            <button
              type="button"
              className="mt-1 inline-flex items-center gap-2 rounded-lg border border-cyan-400/35 px-3 py-2 text-cyan-100 hover:bg-cyan-400/10"
              onClick={() => {
                setOpen(false)
                downloadPdf()
              }}
              disabled={isExporting}
            >
              <Download size={14} />
              {isExporting ? 'Exporting...' : 'Download Portfolio'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
