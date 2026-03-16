import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, fadeInUp } from '../animations/motionVariants'
import AnimatedCounter from './AnimatedCounter'

export default function Hero({ profile, heroStats, profileImg }) {
  return (
    <>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl lg:self-center">
          <motion.p variants={fadeInUp} className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Global Student Technologist
          </motion.p>

          <motion.h1 variants={fadeInUp} className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-5 text-xl text-cyan-200">
            {profile.title}
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#journey" className="btn-primary inline-flex items-center gap-2">
              View IEEE Journey
              <ArrowRight size={16} />
            </a>

            <a href="#projects" className="btn-secondary">Explore Projects</a>

            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Me
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative mx-auto mt-2 w-full max-w-[280px] sm:max-w-[320px] lg:ml-auto lg:mt-0 lg:max-w-[350px]"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-600/20 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/35 bg-slate-950/80 p-3 shadow-2xl shadow-cyan-500/10">

            {/* PROFILE IMAGE */}
            <img
              src={profileImg}
              alt="Dhinesh VN"
              loading="eager"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-cyan-300/30 bg-black/60 px-4 py-3 backdrop-blur-md">
              <p className="font-display text-base text-white">Dhinesh VN</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cyan-200">
                IEEE Student Leader
              </p>
            </div>

          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {heroStats.map((item) => (
          <AnimatedCounter key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </>
  )
}