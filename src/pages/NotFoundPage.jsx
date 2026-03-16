import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-6 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">404</p>
        <h1 className="mt-3 font-display text-5xl text-white">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you requested is not available.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">Return Home</Link>
      </div>
    </section>
  )
}
