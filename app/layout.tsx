import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("http://shivoffset.com"),
  title: {
    default: "Shiv Offset – Printing Press in Rajula, Gujarat",
    template: "%s | Shiv Offset Rajula",
  },
  description:
    "Shiv Offset is Rajula's trusted printing press — offset printing, digital printing, brochures, banners, business cards, catalogues, packaging and customised print solutions in Amreli, Gujarat.",
  keywords: [
    "offset printing Rajula",
    "digital printing Rajula",
    "printing press Rajula Gujarat",
    "brochure printing Amreli",
    "banner printing Rajula",
    "business card printing Rajula",
    "catalogue printing Gujarat",
    "Shiv Offset Rajula",
    "printing shop Rajula",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shiv Offset",
    title: "Shiv Offset – Printing Press in Rajula, Gujarat",
    description:
      "Full-service printing press in Rajula, Amreli — offset, digital, brochures, banners, business cards, and custom print solutions.",
    images: [{ url: "/images/hero/hero-1.jpg" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shiv Offset",
  description: "Full-service offset and digital printing press in Rajula, Amreli, Gujarat.",
  url: "http://shivoffset.com",
  telephone: "+918140332132",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Esar Petrol Pump",
    addressLocality: "Rajula",
    addressRegion: "Gujarat",
    postalCode: "365560",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 20.7334, longitude: 71.4387 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  foundingDate: "2014",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-navy-950 transition-colors duration-300 font-body">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
