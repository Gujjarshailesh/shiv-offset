"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { IconWhatsApp, IconPhone, IconMail, IconClock } from "@/components/ui/Icons"

export default function CTA() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: reduceMotion ? 0 : 0.7 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,.1) 30px, rgba(255,255,255,.1) 31px)" }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
        animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
        animate={reduceMotion ? undefined : { x: [0, 16, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
          }}
        >
          <motion.span
            className="inline-block text-xs font-bold uppercase tracking-widest text-blue-200 mb-4 bg-white/10 px-4 py-1.5 rounded-full"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          >
            Start Your Print Project
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            Ready to Print?<br />
            <span className="text-brand-300">Let&rsquo;s Talk.</span>
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          >
            Share your brief and get a competitive quote within 24 hours. No job too small, no project too complex — customer satisfaction is our key.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-brand-500 text-white font-black px-8 py-4 rounded-xl hover:bg-brand-400 transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.4)] text-lg"
              >
                Request a Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.a
              href="https://wa.me/918140332132?text=Hi%20Shiv%20Offset%2C%20I%27d%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-200 text-lg"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconWhatsApp className="w-5 h-5 text-green-300 flex-shrink-0" />
              WhatsApp Us
            </motion.a>
          </motion.div>

          {/* Contact row */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          >
            <a href="tel:08140332132" className="flex items-center gap-2 hover:text-white transition-colors">
              <IconPhone className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              081403 32132
            </a>
            <span className="text-blue-400 hidden sm:inline">|</span>
            <a href="mailto:info@shivoffset.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <IconMail className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              info@shivoffset.com
            </a>
            <span className="text-blue-400 hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <IconClock className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              Mon–Sat 9 AM – 6:30 PM
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
