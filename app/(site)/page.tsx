import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Hero from "@/components/home/Hero"
import ServicesSection from "@/components/home/Services"

const WhyUs = dynamic(() => import("@/components/home/WhyUs"), { ssr: true })
const Stats = dynamic(() => import("@/components/home/Stats"), { ssr: true })
const IndustriesSection = dynamic(() => import("@/components/home/Industries"), { ssr: true })
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: true })
const CTA = dynamic(() => import("@/components/home/CTA"), { ssr: true })

const BASE_URL = "https://www.shivoffset.in"

export const metadata: Metadata = {
  title: "Shiv Offset – Offset & Digital Printing Press in Rajula",
  description:
    "Shiv Offset is Rajula's trusted printing press — offset printing, digital printing, brochures, banners, business cards, catalogues, packaging, and custom print solutions in Amreli, Gujarat.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
    title: "Shiv Offset – Offset & Digital Printing Press in Rajula, Gujarat",
    description:
      "Rajula's trusted printing press since 2014 — offset, digital, brochures, packaging, catalogues and more. 500+ happy clients across India.",
    images: [
      {
        url: `${BASE_URL}/images/hero/hero-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Shiv Offset Printing Press – Rajula, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Offset – Printing Press in Rajula, Gujarat",
    description: "Rajula's trusted printing press — offset, digital, brochures, packaging, catalogues and more.",
    images: [`${BASE_URL}/images/hero/hero-1.jpg`],
  },
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
