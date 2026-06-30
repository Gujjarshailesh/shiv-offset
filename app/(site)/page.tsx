import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Hero from "@/components/home/Hero"
import ServicesSection from "@/components/home/Services"

// Below-fold components loaded lazily — improves LCP and initial JS bundle
const WhyUs = dynamic(() => import("@/components/home/WhyUs"), { ssr: true })
const Stats = dynamic(() => import("@/components/home/Stats"), { ssr: true })
const IndustriesSection = dynamic(() => import("@/components/home/Industries"), { ssr: true })
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: true })
const CTA = dynamic(() => import("@/components/home/CTA"), { ssr: true })

export const metadata: Metadata = {
  title: "Shiv Offset – Offset & Digital Printing Press in Rajula",
  description:
    "Shiv Offset is Rajula's trusted printing press — offset printing, digital printing, brochures, banners, business cards, catalogues, packaging, and custom print solutions in Amreli, Gujarat.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Stats />
      <IndustriesSection />
      <Testimonials />
      <CTA />
    </>
  )
}
