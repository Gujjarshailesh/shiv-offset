import type { Metadata } from "next"
import Image from "next/image"
import CTA from "@/components/home/CTA"
import { IconTrophy, IconQuality, IconTruck, IconTech } from "@/components/ui/Icons"

const BASE_URL = "https://www.shivoffset.in"

export const metadata: Metadata = {
  title: "About Us – Shiv Offset Rajula Since 2014",
  description:
    "Learn about Shiv Offset — Rajula's trusted full-service printing press since 2014. Our story, milestones, equipment, and commitment to quality.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    url: `${BASE_URL}/about`,
    title: "About Shiv Offset – Printing Press Rajula Since 2014",
    description:
      "Over a decade of printing excellence from Rajula — built on quality, reliability, and a relentless passion for the craft. 500+ clients, 9 services.",
    images: [
      {
        url: `${BASE_URL}/images/about/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shiv Offset facility – Rajula, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shiv Offset – Rajula Printing Press",
    description: "Over a decade of printing excellence from Rajula — built on quality and reliability.",
    images: [`${BASE_URL}/images/about/hero.jpg`],
  },
}

const milestones = [
  { year: "2014", event: "Shiv Offset established near Esar Petrol Pump, Rajula — starting with digital and offset printing for local businesses." },
  { year: "2015–16", event: "Expanded to brochures, business cards, and banners for corporate and educational clients across Saurashtra." },
  { year: "2017", event: "Added in-house lamination and post-press finishing — complete end-to-end print solutions under one roof." },
  { year: "2018–19", event: "Grew clientele to education institutions, event firms, and hospitality sector across Gujarat." },
  { year: "2020", event: "Upgraded digital printing equipment to meet rising demand for short-run, high-quality personalised prints." },
  { year: "2022", event: "Launched catalogue and book printing services — catering to textile, ceramics, and packaging markets." },
  { year: "2023", event: "Crossed 300+ satisfied clients with pan-Gujarat delivery; extended reach to FMCG and corporate brands." },
  { year: "2024", event: "Serving 500+ clients across 10+ industry sectors — offset, digital, brochure, banner, card, and packaging solutions." },
]

const equipment = [
  { name: "Multi-Colour Offset Press", origin: "In-house", year: "2016", use: "High-volume CMYK commercial & packaging printing" },
  { name: "Digital Inkjet/Laser Printers", origin: "Multi-brand", year: "2014+", use: "Short-run digital printing from a single copy" },
  { name: "Wide-Format Inkjet Plotter", origin: "In-house", year: "2017", use: "Banners, posters, signage and large-format output" },
  { name: "Thermal Lamination Lines", origin: "In-house", year: "2017", use: "Gloss, matte & soft-touch lamination" },
  { name: "Precision Die-Cutting Machines", origin: "In-house", year: "2019", use: "Packaging, box, and card die-cutting" },
  { name: "Perfect Binding Machine", origin: "In-house", year: "–", use: "Catalogue, book, and brochure binding" },
  { name: "High-Speed Three-Cut Trimmer", origin: "In-house", year: "–", use: "Precision paper cutting for all print jobs" },
  { name: "Saddle Stitching Unit", origin: "In-house", year: "–", use: "Magazine, booklet, and brochure stitching" },
  { name: "UV Coating Machine", origin: "In-house", year: "–", use: "Spot UV and full-sheet coating for premium finish" },
]

const values = [
  { Icon: IconTrophy, title: "Customer Satisfaction", desc: "Customer satisfaction is not a goal — it is our identity. Every decision we make is driven by what is best for our clients." },
  { Icon: IconQuality, title: "Uncompromising Quality", desc: "We use latest colour management software, calibrated equipment, and rigorous QC at every production stage." },
  { Icon: IconTruck, title: "On-Time, Every Time", desc: "We understand that your print deadline affects your business. We plan production to ensure delivery happens exactly as promised." },
  { Icon: IconTech, title: "Pioneering Technology", desc: "We were first in Gujarat, first in India, first in Asia to adopt key print technologies — and we intend to stay ahead." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/about/hero.jpg"
            alt="Shiv Offset facility and printed products"
            fill className="object-cover opacity-30"
            priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">About Shiv Offset</h1>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            Over a decade of printing excellence from Rajula — built on quality, reliability, and a relentless passion for the craft.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-3 bg-brand-50 px-4 py-1.5 rounded-full">Est. 2014</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                A Printing Legacy<br />
                <span className="text-gradient">Built on Trust</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Shiv Offset was established in 2014, near Esar Petrol Pump in Rajula, with a singular focus: to deliver printing of the highest quality, on time, and at competitive pricing. Starting with digital printing and customised print solutions, we built our reputation one satisfied client at a time.
                </p>
                <p>
                  Over the past decade, we have continuously invested in modern machinery — expanding from digital to multi-colour offset printing, adding in-house lamination, die-cutting, binding, and UV coating. Today we operate as a full-service printing press offering end-to-end solutions without outsourcing — ensuring consistent quality and faster turnaround for every order.
                </p>
                <p>
                  Our client base spans education, FMCG, textiles, ceramics, hospitality, healthcare, and corporate sectors across Amreli, Saurashtra, and Gujarat — all relying on Shiv Offset for quality they can count on and delivery they can plan around.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-[4/3]">
                <Image
                  src="/images/about/team.jpg"
                  alt="Shiv Offset printing facility"
                  fill className="object-cover"
                  sizes="(max-width:1024px)100vw,50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-navy-950 text-white rounded-2xl px-6 py-4 shadow-2xl border border-brand-500/15">
                <div className="text-3xl font-black text-brand-400">10+</div>
                <div className="text-sm text-slate-400">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"40px 40px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-3xl p-8 border border-white/10 hover:border-brand-500/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center mb-5">
                <IconTrophy className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver offset and digital printing of the highest quality — on time and at competitive pricing — empowering our clients&apos; brands through exceptional print craftsmanship. Customer service, quality, and on-time delivery are everything.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                <IconGlobe className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be India&apos;s most innovative and trusted commercial printing partner — known for pioneering technology, precision craftsmanship, and the integrity of our long-term client relationships.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6 border border-white/10 hover:border-brand-500/15 transition-all hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-400" strokeWidth={1.8} />
                </div>
                <h4 className="font-bold text-white mb-2">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">Milestones</span>
            <h2 className="text-4xl font-black text-slate-900">Our Growth Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-500/40 to-transparent" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-black text-xs flex items-center justify-center z-10 relative shadow-lg group-hover:scale-110 transition-transform text-center leading-tight px-1">
                      {m.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-navy-950 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-brand-600 transition-all">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-navy-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">Our Infrastructure</span>
            <h2 className="text-4xl font-black text-white mb-4">Press Room &amp; Equipment</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              State-of-the-art machinery — some of which we were the first to install in Gujarat, India, and Asia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((eq, i) => (
              <div key={i} className="glass rounded-2xl p-5 border border-white/10 hover:border-brand-500/25 transition-all group hover:-translate-y-0.5 duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">{eq.origin}</span>
                  {eq.year !== "–" && <span className="text-xs text-slate-600">{eq.year}</span>}
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{eq.name}</h3>
                <p className="text-slate-500 text-sm">{eq.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press room image */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/services/offset-printing.jpg"
          alt="Offset printing press at Shiv Offset facility, Rajula"
          fill className="object-cover" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white/70 text-sm">Our Komori 4-Colour Offset Press — the heart of Shiv Offset</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

// imported inline to avoid circular
function IconGlobe({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}
