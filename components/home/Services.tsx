import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"
import { SERVICE_ICONS } from "@/components/ui/Icons"

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 dark:bg-navy-950 py-24 relative overflow-hidden transition-colors duration-300" id="services">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3 bg-brand-100 dark:bg-brand-500/10 px-4 py-1.5 rounded-full">
            What We Print
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Our Printing Services</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            From pre-press to post-press, offset to digital — everything under one roof at our Rajula facility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[service.slug]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="reveal group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500/50 transition-all duration-300 card-hover shadow-sm dark:shadow-none"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="img-zoom relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-slate-900 via-slate-900/30 to-transparent" />
                  {Icon && (
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-slate-900" strokeWidth={1.8} />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center gap-1 text-brand-600 dark:text-brand-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore Service
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-brand-500/25" />
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-brand-500 dark:border-brand-500/50 text-brand-600 dark:text-brand-400 font-semibold px-8 py-4 rounded-xl hover:bg-brand-500 hover:text-slate-900 transition-all duration-200"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
