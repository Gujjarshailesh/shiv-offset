import Link from "next/link"
import { services } from "@/data/services"
import { IconMapPin, IconPhone, IconMail, IconClock, IconWhatsApp } from "@/components/ui/Icons"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
]

const contactRows = [
  {
    Icon: IconMapPin,
    lines: [
      "Near Esar Petrol Pump",
      "Rajula, Gujarat, 365560",
      "India",
    ],
    href: undefined as string | undefined,
  },
  {
    Icon: IconPhone,
    lines: ["081403 32132", "+91 81403 32132"],
    href: "tel:08140332132",
  },
  {
    Icon: IconMail,
    lines: ["contact@shivoffset.com", "info@shivoffset.com"],
    href: "mailto:contact@shivoffset.com",
  },
  {
    Icon: IconClock,
    lines: ["Monday – Saturday", "9:00 AM – 6:30 PM IST"],
    href: undefined,
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 flex-shrink-0">
                <img src="/logo.png" alt="Shiv Offset Logo" width={44} height={44} />
              </div>
              <div>
                <span className="font-black text-xl text-white leading-none block">Shiv Offset</span>
                <span className="text-[10px] text-brand-400/70 tracking-widest uppercase">Printing Press</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Rajula&apos;s trusted full-service printing press — offset, digital, packaging, publications, and premium stationery.
            </p>
            {/* WhatsApp row */}
            <a
              href="https://wa.me/918140332132"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              <IconWhatsApp className="w-4 h-4" />
              +91 81403 32132
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-600/40 group-hover:bg-brand-500 transition-colors flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-slate-500 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-600/40 group-hover:bg-brand-500 transition-colors flex-shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4">
              {contactRows.map(({ Icon, lines, href }) => (
                <li key={lines[0]} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-brand-400" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {lines.map((line, i) =>
                      href && i === 0 ? (
                        <a key={i} href={href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors leading-snug">
                          {line}
                        </a>
                      ) : (
                        <span key={i} className="text-sm text-slate-500 leading-snug">{line}</span>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Shiv Offset, Rajula. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-700">
            <Link href="/sitemap.xml" className="hover:text-slate-500 transition-colors">Sitemap</Link>
            <span>|</span>
            <span>Offset &amp; Digital Printing Press · Rajula · Gujarat · India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
