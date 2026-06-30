"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, LayoutGroup, motion } from "motion/react"

const galleryItems = [
  { src: "/images/gallery/g-offset-1.jpg",    label: "Offset Printing Press",       cat: "Offset" },
  { src: "/images/gallery/g-offset-2.jpg",    label: "Multi-Colour Offset Run",     cat: "Offset" },
  { src: "/images/gallery/g-digital-1.jpg",   label: "Digital Print Production",    cat: "Digital" },
  { src: "/images/gallery/g-digital-2.jpg",   label: "Wide-Format Digital Print",   cat: "Digital" },
  { src: "/images/gallery/g-prepress-1.jpg",  label: "Pre-Press Design Studio",     cat: "Pre-Press" },
  { src: "/images/gallery/g-prepress-2.jpg",  label: "Artwork & Plate Making",      cat: "Pre-Press" },
  { src: "/images/gallery/g-postpress-1.jpg", label: "Lamination & Finishing",      cat: "Post-Press" },
  { src: "/images/gallery/g-postpress-2.jpg", label: "Die-Cut & Binding",           cat: "Post-Press" },
  { src: "/images/gallery/g-cards-1.jpg",     label: "Premium Visiting Cards",      cat: "Cards" },
  { src: "/images/gallery/g-cards-2.jpg",     label: "Business Card Samples",       cat: "Cards" },
  { src: "/images/gallery/g-brochure-1.jpg",  label: "Brochure Collection",         cat: "Brochures" },
  { src: "/images/gallery/g-brochure-2.jpg",  label: "Flyer & Leaflet Printing",    cat: "Brochures" },
  { src: "/images/gallery/g-catalog-1.jpg",   label: "Product Catalogue",           cat: "Catalogues" },
  { src: "/images/gallery/g-catalog-2.jpg",   label: "Seasonal Catalogue",          cat: "Catalogues" },
  { src: "/images/gallery/g-books-1.jpg",     label: "Book Printing — Short Run",   cat: "Books" },
  { src: "/images/gallery/g-books-2.jpg",     label: "Coffee Table Books",          cat: "Books" },
  { src: "/images/gallery/g-packaging-1.jpg", label: "Product Packaging Boxes",     cat: "Packaging" },
  { src: "/images/gallery/g-packaging-2.jpg", label: "Mono Carton Die-Cut",         cat: "Packaging" },
  { src: "/images/gallery/g-banner-1.jpg",    label: "Banner & Large Format",       cat: "Banners" },
  { src: "/images/gallery/g-stationery-1.jpg",label: "Corporate Stationery Set",    cat: "Stationery" },
  { src: "/images/about/facility.jpg",        label: "Press Room Overview",         cat: "Facility" },
]

const cats = ["All", ...Array.from(new Set(galleryItems.map((i) => i.cat)))]

export default function GalleryGrid() {
  const [active, setActive] = useState("All")

  const visible = active === "All" ? galleryItems : galleryItems.filter((i) => i.cat === active)

  return (
    <LayoutGroup>
      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {cats.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            layout
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === cat
                ? "bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/25 scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 hover:shadow-sm"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-slate-400 dark:text-slate-500 text-sm mb-8">
        Showing <span className="font-semibold text-brand-500">{visible.length}</span> items
        {active !== "All" && <> in <span className="font-semibold text-white dark:text-white">{active}</span></>}
      </p>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.div
              key={item.src + item.cat}
              layout
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.34, ease: "easeOut", delay: Math.min(i * 0.025, 0.18) }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 shadow-sm hover:shadow-2xl transition-shadow duration-300 break-inside-avoid cursor-pointer"
            >
              <div className="img-zoom relative w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={500}
                  height={380}
                  className="w-full h-auto object-cover"
                  sizes="(max-width:640px)50vw,(max-width:1024px)33vw,25vw"
                  loading={i < 8 ? "eager" : "lazy"}
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 text-center"
                initial={false}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400 mb-1.5 bg-brand-500/15 px-3 py-0.5 rounded-full">
                  {item.cat}
                </span>
                <p className="font-bold text-white text-sm leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  )
}
