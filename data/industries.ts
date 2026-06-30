export interface Industry {
  slug: string
  title: string
  description: string
  printingNeeds: string[]
  image: string
}

export const industries: Industry[] = [
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical",
    image: "/images/industries/pharmaceutical.jpg",
    description:
      "Precision-printed packaging and labelling for pharma companies — fully compliant with regulatory requirements including Braille embossing, serialisation, and tamper-evident features.",
    printingNeeds: ["Mono cartons", "Leaflets & inserts", "Braille embossing", "Labels & stickers", "Prescription pads"],
  },
  {
    slug: "fmcg",
    title: "FMCG & Consumer Goods",
    image: "/images/industries/fmcg.jpg",
    description:
      "High-impact packaging and promotional material for fast-moving consumer goods — from vibrant retail boxes to POP displays that drive impulse purchases.",
    printingNeeds: ["Retail packaging", "Promotional leaflets", "Shelf wobblers", "Brochures", "Paper bags"],
  },
  {
    slug: "textile-apparel",
    title: "Textile & Apparel",
    image: "/images/industries/textile.jpg",
    description:
      "Sophisticated print solutions for fashion brands and textile manufacturers — swing tags, labels, look-books, and premium retail packaging that reflect your brand's aesthetic.",
    printingNeeds: ["Swing tags", "Woven & printed labels", "Look-books", "Luxury packaging", "Hang-cards"],
  },
  {
    slug: "ceramics-building",
    title: "Ceramics & Building Materials",
    image: "/images/industries/ceramics.jpg",
    description:
      "Durable catalogues, technical brochures, and product packaging for ceramics, tiles, sanitaryware, and building material brands.",
    printingNeeds: ["Product catalogues", "Specification sheets", "Packaging inserts", "Brochures", "Dealer kits"],
  },
  {
    slug: "corporate",
    title: "Corporate & Finance",
    image: "/images/industries/corporate.jpg",
    description:
      "Professional stationery, annual reports, and corporate communication material that upholds your brand's credibility with precision typography and premium finishing.",
    printingNeeds: ["Annual reports", "Corporate stationery", "Presentations", "Business cards", "Capability statements"],
  },
  {
    slug: "hospitality",
    title: "Hospitality & Food Service",
    image: "/images/industries/hospitality.jpg",
    description:
      "Restaurant menus, hotel collateral, and event materials that delight guests — printed on premium stocks with finishes suited to the hospitality environment.",
    printingNeeds: ["Restaurant menus", "Hotel stationery", "Event programmes", "Loyalty cards", "Brochures"],
  },
  {
    slug: "education",
    title: "Education & Publishing",
    image: "/images/industries/education.jpg",
    description:
      "Cost-effective, high-quality book printing, workbooks, and educational materials for schools, universities, coaching institutes, and publishers across India.",
    printingNeeds: ["Textbooks", "Workbooks", "Timetables", "Question papers", "Prospectuses"],
  },
  {
    slug: "ecommerce-retail",
    title: "E-Commerce & Retail",
    image: "/images/industries/ecommerce.jpg",
    description:
      "Custom packaging, inserts, thank-you cards, and branded bags for online sellers and retail stores — making unboxing a memorable brand experience.",
    printingNeeds: ["Shipping boxes", "Insert cards", "Paper bags", "Stickers", "Gift packaging"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness",
    image: "/images/industries/healthcare.jpg",
    description:
      "Trusted printing for hospitals, clinics, diagnostic centres, and wellness brands — from patient communication materials to product packaging for nutraceuticals.",
    printingNeeds: ["Prescription pads", "Appointment cards", "Brochures", "Packaging", "Labels"],
  },
  {
    slug: "events-promotions",
    title: "Events & Promotions",
    image: "/images/industries/events.jpg",
    description:
      "Everything you need to make your event memorable — invitations, programmes, promotional merchandise, and giveaway packaging.",
    printingNeeds: ["Invitations", "Event programmes", "Standees", "Promotional kits", "Gift boxes"],
  },
]
