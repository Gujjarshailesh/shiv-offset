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

const BASE_URL = "https://www.shivoffset.in"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    "packaging printing Gujarat",
    "book printing Rajula",
    "box printing Gujarat",
  ],
  authors: [{ name: "Shiv Offset", url: BASE_URL }],
  creator: "Shiv Offset",
  publisher: "Shiv Offset",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Shiv Offset",
    title: "Shiv Offset – Printing Press in Rajula, Gujarat",
    description:
      "Full-service printing press in Rajula, Amreli — offset, digital, brochures, banners, business cards, and custom print solutions.",
    images: [
      {
        url: `${BASE_URL}/images/hero/hero-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Shiv Offset – Printing Press in Rajula, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Offset – Printing Press in Rajula, Gujarat",
    description: "Full-service printing press in Rajula, Amreli — offset, digital, brochures, banners, and custom print solutions.",
    images: [`${BASE_URL}/images/hero/hero-1.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  verification: {},
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Shiv Offset",
  description: "Full-service offset and digital printing press in Rajula, Amreli, Gujarat. Serving 500+ clients across India since 2014.",
  url: BASE_URL,
  telephone: "+918140332132",
  email: "contact@shivoffset.com",
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/hero/hero-1.jpg`,
  foundingDate: "2014",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Esar Petrol Pump",
    addressLocality: "Rajula",
    addressRegion: "Gujarat",
    postalCode: "365560",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.7334,
    longitude: 71.4387,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  areaServed: [
    { "@type": "City", name: "Rajula" },
    { "@type": "City", name: "Amreli" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing Services",
    itemListElement: [
      "Offset Printing", "Digital Printing", "Pre Press", "Post Press",
      "Brochure Printing", "Catalog Printing", "Book Printing",
      "Card Printing", "Box Printing",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
  sameAs: [],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Shiv Offset",
  description: "Rajula's trusted printing press — offset, digital, brochures, packaging and more.",
  publisher: { "@id": `${BASE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/services?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${dmSans.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
