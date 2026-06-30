export interface Service {
  slug: string
  title: string
  shortDesc: string
  description: string
  features: string[]
  applications: string[]
  image: string
  images?: string[]
}

export const services: Service[] = [
  {
    slug: "pre-press",
    title: "Pre Press",
    image: "/images/services/pre-press.jpg",
    images: [
      "/images/services/pre-press.jpg",
      "/images/services/digital-printing.jpg",
      "/images/services/offset-printing.jpg",
    ],
    shortDesc:
      "Precision pre-press services — colour proofing, CTP plate-making, and digital workflows that set the foundation for flawless print output.",
    description:
      "Our pre-press department is equipped with Power Macs, the latest Windows workstations, and colour-calibrated monitors that are regularly verified for accuracy. We accept artwork via FTP or email in EPS, PS, and high-resolution PDF formats. Our specialists review every file for quality issues before output. We were the first in Gujarat to introduce Thermal CTP (2007) and the first in India to install the fully automatic high-speed Violet CTP by FFEI (2009).",
    features: [
      "Gujarat's first Thermal CTP installed in 2007",
      "India's first fully automatic Violet CTP by FFEI (2009)",
      "Colour-calibrated monitors, regularly verified",
      "Accepts EPS, PS, and high-resolution PDF artwork",
      "In-house plate and print calibration devices",
      "Advanced colour management and workflow software",
      "Specialist file-check and error-correction before output",
    ],
    applications: ["All offset print jobs", "Packaging artwork", "Publishing pre-flight", "Large-format preparation", "Colour-critical brand work"],
  },
  {
    slug: "offset-printing",
    title: "Offset Printing",
    image: "/images/services/offset-printing.jpg",
    images: [
      "/images/services/offset-printing.jpg",
      "/images/services/post-press.jpg",
    ],
    shortDesc:
      "High-volume CMYK multi-colour offset printing on our 4-colour Komori press — sharp, vibrant, and consistent across every sheet.",
    description:
      "Offset printing accounts for nearly 40% of global printing production and remains the gold standard for quality, consistency, and cost-effectiveness at volume. Our 4-colour Komori offset press from Japan, commissioned in 2014, delivers exceptional CMYK colour reproduction with low maintenance downtime and outstanding sheet-to-sheet consistency. We handle both large commercial runs and shorter customised quantities.",
    features: [
      "4-colour Komori offset press — Japan-made, 2014",
      "Full CMYK colour process printing",
      "Consistent colour across the entire print run",
      "Cost-effective for medium to high volumes",
      "Handles coated, uncoated, and specialty stocks",
      "Pre-press colour proofing before full run",
      "Low waste, high-efficiency production process",
    ],
    applications: ["Magazines", "Brochures", "Catalogues", "Packaging cartons", "Books", "Annual reports", "Posters"],
  },
  {
    slug: "digital-printing",
    title: "Digital Printing",
    image: "/images/services/digital-printing.jpg",
    images: [
      "/images/services/digital-printing.jpg",
      "/images/services/pre-press.jpg",
    ],
    shortDesc:
      "Short-run digital printing from a single copy — featuring Asia's first MGI digital print enhancement for hot foil and spot UV without blocks.",
    description:
      "Our digital printing division operates multiple digital presses from Xerox, Canon, and Konica Minolta, enabling short runs starting from a single copy with no minimum order constraints. We also operate Asia's first digital print enhancement system from MGI, which applies hot foil stamping and spot UV effects with variable heights on individual sheets — no printing blocks, no large minimums. Ideal for personalised, premium, and short-run jobs.",
    features: [
      "Asia's first MGI digital print enhancement system",
      "Hot foil and spot UV without blocks — from 1 copy",
      "Variable data printing for personalisation",
      "Xerox, Canon, and Konica Minolta digital presses",
      "Short runs from 1 copy — no minimum quantity",
      "Foam sheet printing for banners",
      "Glossy and colour-matched finishing options",
    ],
    applications: ["Visiting cards", "Wedding invitations", "Corporate brochures", "Personalised gifts", "Promotional banners", "Short-run books"],
  },
  {
    slug: "post-press",
    title: "Post Press",
    image: "/images/services/post-press.jpg",
    images: ["/images/services/post-press.jpg"],
    shortDesc:
      "Complete post-press finishing — lamination, UV varnishing, die-cutting, embossing, and all binding styles under one roof.",
    description:
      "Post-press finishing transforms a printed sheet into the finished product your brand deserves. Our in-house bindery and finishing lines handle everything from thermal lamination and UV varnishing to precision die-cutting, embossing, and all binding styles. Our three-cut trimmers deliver enhanced cutting quality with reduced cycle time. We position ourselves as a complete bindery that complements every press — so your job never needs to leave our facility.",
    features: [
      "Perfect binding with premium wrinkle finishes",
      "Saddle-stitching and section sewing",
      "Hard case binding for books and reports",
      "Thermal lamination — gloss, matte, soft-touch",
      "Aqueous and UV spot varnishing",
      "Precision die-cutting and embossing",
      "High-speed three-cut trimming",
    ],
    applications: ["Catalogues", "Books", "Packaging cartons", "Brochures", "Premium stationery", "Gift boxes"],
  },
  {
    slug: "card-printing",
    title: "Card Printing",
    image: "/images/services/card-printing.jpg",
    images: [
      "/images/services/card-printing.jpg",
      "/images/services/brochure-printing.jpg",
      "/images/services/catalog-printing.jpg",
    ],
    shortDesc:
      "Premium visiting cards, wedding cards, flyers, calendars, and diaries — material options include wooden, metallic, UV-coated, and transparent.",
    description:
      "First impressions count. Our card printing service covers the full spectrum — from standard business visiting cards to ultra-premium options in wood, fabric, metal, linen texture, and transparent substrates. We also produce wedding invitations, event flyers, and branded stationery. Our professional design team ensures every piece is pixel-perfect, and on-time delivery is guaranteed.",
    features: [
      "Visiting cards in wooden, fabric, metal, UV-coated, and transparent substrates",
      "Wedding and event invitation card printing",
      "Flyer and promotional leaflet printing",
      "Corporate stationery: letterheads, envelopes, receipt books",
      "Wall, table, and pocket calendar printing",
      "Diary printing in A4 and A5 sizes",
      "Professional in-house design team",
    ],
    applications: ["Business networking", "Wedding invitations", "Corporate gifting", "Promotional events", "Branded stationery", "Retail calendars"],
  },
  {
    slug: "brochure-printing",
    title: "Brochure Printing",
    image: "/images/services/brochure-printing.jpg",
    images: [
      "/images/services/brochure-printing.jpg",
      "/images/services/catalog-printing.jpg",
    ],
    shortDesc:
      "CMYK four-colour offset brochures — corporate, product, sales, and service brochures with UV coating and lamination finishing options.",
    description:
      "A well-crafted brochure is one of the most versatile marketing tools available. We produce corporate, product, sales, institutional, and service brochures using four-colour CMYK offset printing with a full range of post-press finishes including UV coating and lamination. Multiple paper quality options are available for covers and internal pages. Time-bound delivery within Rajula and across Gujarat.",
    features: [
      "4-colour CMYK offset process printing",
      "Corporate, product, sales, and institutional styles",
      "UV spot coating and aqueous lamination finishing",
      "Multiple paper stocks for cover and interior pages",
      "Experienced team for specialised print briefs",
      "On-time delivery within Gujarat and pan-India",
      "Competitive pricing vs. other press houses",
    ],
    applications: ["Product launches", "Trade show collateral", "Real estate marketing", "Hospitality menus", "Investor packs", "Company profiles"],
  },
  {
    slug: "catalog-printing",
    title: "Catalog Printing",
    image: "/images/services/catalog-printing.jpg",
    images: ["/images/services/catalog-printing.jpg"],
    shortDesc:
      "Commercial and dress-material catalogue printing — cost-effective, brand-building print that drives customer visits and sales.",
    description:
      "In today's digital-first world, printed catalogues remain a uniquely powerful marketing tool — tangible, trusted, and persistent. We are one of Rajula's most experienced commercial catalogue printers, specialising in product catalogues and dress-material catalogues for retail outlets. Our catalogues build brands, advertise products, and measurably increase sales and market reach.",
    features: [
      "Commercial product catalogue printing",
      "Dress-material and textile catalogue specialists",
      "Saddle-stitch and perfect-bound multi-page options",
      "Full-colour CMYK with optional spot colours",
      "Gloss and matte laminated cover options",
      "Fast turnaround for seasonal collections",
      "Cost-effective pricing with brand-quality output",
    ],
    applications: ["Retail product ranges", "Textile and fashion", "Industrial parts", "FMCG product lines", "Pharma product lists", "Service directories"],
  },
  {
    slug: "book-printing",
    title: "Book Printing",
    image: "/images/services/book-printing.jpg",
    images: [
      "/images/services/book-printing.jpg",
      "/images/services/catalog-printing.jpg",
      "/images/services/digital-printing.jpg",
    ],
    shortDesc:
      "Corporate books, children's books, short-run digital books, and coffee-table books — printed with quality, flexibility, and reliable turnaround.",
    description:
      "From short-run digital books to high-quality offset-printed coffee-table volumes, our book printing service covers the full range. We produce corporate books, children's books with vibrant CMYK colour and solid binding, digital short-run books, and premium coffee-table books. With decades of experience, we offer flexible run lengths, competitive pricing, and reliable deadlines.",
    features: [
      "Corporate and trade book printing",
      "Children's books — vibrant colour, durable binding",
      "Coffee-table books with premium laminated covers",
      "Digital short-run books from 50 copies",
      "Perfect binding, case binding, and saddle stitch",
      "Multiple paper options: art paper, maplitho, bond",
      "ISBN barcode printing support",
    ],
    applications: ["Publishers", "Self-publishing authors", "Educational institutions", "Corporate communications", "NGOs", "Training organisations"],
  },
  {
    slug: "box-printing",
    title: "Box Printing",
    image: "/images/services/offset-printing.jpg",
    images: [
      "/images/services/offset-printing.jpg",
      "/images/services/post-press.jpg",
    ],
    shortDesc:
      "Pharma and consumer product box printing — precision die-cut mono cartons with Braille embossing and serialisation support.",
    description:
      "Pharmaceutical and medicine packaging demands the highest levels of precision, regulatory compliance, and consistent quality. Our box printing service covers mono carton manufacturing for pharma companies, FMCG brands, and consumer product manufacturers. We produce die-cut printed boxes meeting industry standards for colour accuracy, structural integrity, Braille embossing, and serialisation.",
    features: [
      "Pharma-grade mono carton manufacturing",
      "Braille embossing for pharmaceutical compliance",
      "Serialisation and barcode printing",
      "SBS and FBB board 250 to 400 GSM",
      "Inline varnish, UV coating, and lamination",
      "Hot-foil stamping and embossing options",
      "High-speed automated die-cutting",
    ],
    applications: ["Pharmaceutical companies", "OTC medicine brands", "FMCG packaging", "Cosmetics and skincare", "Food and snack boxes", "Nutraceuticals"],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
