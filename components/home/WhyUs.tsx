import Image from "next/image"
import { IconTrophy, IconTech, IconFactory, IconTruck } from "@/components/ui/Icons"

const reasons = [
  {
    Icon: IconTrophy,
    title: "10+ Years of Expertise",
    desc: "Established in 2014, we have spent over a decade mastering every facet of commercial printing — from pharmaceutical packaging to luxury coffee-table books.",
  },
  {
    Icon: IconTech,
    title: "Modern Technology",
    desc: "We continuously invest in modern printing and finishing equipment — digital presses, lamination lines, die-cutting machines — to stay ahead of client demands.",
  },
  {
    Icon: IconFactory,
    title: "Full In-House Workflow",
    desc: "Pre-press, offset printing, digital printing, lamination, die-cutting, binding — all under one roof. No outsourcing means consistent quality and faster turnaround.",
  },
  {
    Icon: IconTruck,
    title: "Guaranteed On-Time Delivery",
    desc: "We have built our reputation on reliability. Our production planning and logistics ensure your order arrives exactly when promised — every single time.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white dark:bg-navy-950 relative overflow-hidden transition-colors duration-300" id="why-us">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-50 dark:bg-brand-600/5 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-50 dark:bg-blue-500/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-[4/3]">
              <Image
                src="/images/about/facility.jpg"
                alt="Shiv Offset facility — Rajula printing press"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-navy-950 text-white rounded-2xl px-6 py-4 shadow-2xl border border-brand-500/15 animate-float">
              <div className="text-3xl font-black text-brand-400">2014</div>
              <div className="text-xs text-slate-400 mt-0.5">Established · Rajula</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-brand-500 rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-black text-white">500+</div>
              <div className="text-xs font-semibold text-white/80">Happy Clients</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-500 mb-3 bg-brand-50 dark:bg-brand-500/10 px-4 py-1.5 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                The Shiv Offset<br />
                <span className="text-gradient">Difference</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                We are not just a printer — we are a long-term production partner committed to making your brand look exceptional.
              </p>
            </div>

            <div className="space-y-5">
              {reasons.map(({ Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`reveal delay-${(i + 1) * 100} flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
