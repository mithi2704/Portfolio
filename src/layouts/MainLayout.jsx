import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-base-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.1),transparent_35%),linear-gradient(to_bottom,#020617,#020617_40%,#000)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_60%_75%,rgba(6,182,212,0.08),transparent_35%),linear-gradient(to_bottom,transparent_70%,rgba(15,23,42,0.45))]" />
      <Navbar />
      <main className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
