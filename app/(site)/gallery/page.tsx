import type { Metadata } from "next"
import Image from "next/image"
import CTA from "@/components/home/CTA"
import GalleryGrid from "@/components/gallery/GalleryGrid"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Shiv Offset's print gallery — offset printing, digital printing, packaging, brochures, catalogues, books, and cards from our Rajula press room.",
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/g-offset-1.jpg"
            alt="Shiv Offset print gallery"
            fill className="object-cover opacity-40 animate-kenBurns" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/20" />
          <div className="absolute inset-0 line-grid opacity-40 pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full animate-fadeInUp">Our Work</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fadeInUp delay-100">Print Gallery</h1>
          <p className="text-slate-300 text-xl max-w-2xl animate-fadeInUp delay-200">
            From our press room to your hands — a glimpse of the quality we deliver every day.
          </p>
        </div>
      </section>

      {/* Gallery with interactive filter */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* Feature banner */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="/images/services/offset-printing.jpg"
          alt="Offset printing press at Shiv Offset, Rajula"
          fill className="object-cover" sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-black text-white mb-2">Our Press Room</h3>
            <p className="text-slate-300 max-w-md">
              State-of-the-art offset and digital printing equipment in Rajula, Gujarat — delivering quality you can count on.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
