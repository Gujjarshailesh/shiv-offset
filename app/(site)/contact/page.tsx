"use client"

import { useState } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/validations"
import { services } from "@/data/services"
import { IconMapPin, IconPhone, IconMail, IconClock, IconLightning, IconShield, IconTruck } from "@/components/ui/Icons"

const contactInfo = [
  {
    Icon: IconMapPin,
    label: "Address",
    lines: [
      "Near Esar Petrol Pump",
      "Rajula, Gujarat, 365560",
      "India",
    ],
    href: undefined as string | undefined,
  },
  {
    Icon: IconPhone,
    label: "Phone",
    lines: ["081403 32132", "+91 81403 32132"],
    href: "tel:08140332132",
  },
  {
    Icon: IconMail,
    label: "Email",
    lines: ["contact@shivoffset.com", "info@shivoffset.com"],
    href: "mailto:contact@shivoffset.com",
  },
  {
    Icon: IconClock,
    label: "Working Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:30 PM IST"],
    href: undefined,
  },
]

const bottomStrip = [
  { Icon: IconLightning, title: "24-Hour Response", sub: "We quote within one business day" },
  { Icon: IconShield, title: "Confidential", sub: "Your details and artwork are always safe" },
  { Icon: IconTruck, title: "Pan-India Delivery", sub: "We deliver across all Indian states" },
]

function ErrMsg({ msg }: { msg?: string }) {
  return msg ? <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>&#9888;</span>{msg}</p> : null
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true); setServerError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) { setSubmitted(true); reset() }
      else { const b = await res.json(); setServerError(b.error || "Something went wrong.") }
    } catch { setServerError("Network error. Please try again or call us directly.") }
    finally { setLoading(false) }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Enquiry Received!</h3>
        <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
          Thank you for reaching out. We will respond within 24 hours. For urgent queries, WhatsApp us at{" "}
          <a href="https://wa.me/918140332132" className="text-green-600 font-semibold">+91 81403 32132</a>.
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-slate-400 underline hover:text-slate-600 transition-colors">
          Submit another enquiry
        </button>
      </div>
    )
  }

  const field = "w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white dark:bg-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-600"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Full Name *</label>
          <input {...register("name")} placeholder="Your full name" className={field} />
          <ErrMsg msg={errors.name?.message} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Email Address *</label>
          <input {...register("email")} type="email" placeholder="you@company.com" className={field} />
          <ErrMsg msg={errors.email?.message} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Mobile Number *</label>
          <input {...register("phone")} type="tel" placeholder="10-digit mobile" maxLength={10} className={field} />
          <ErrMsg msg={errors.phone?.message} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Service Required *</label>
          <select {...register("service")} className={field}>
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other">Other / Multiple Services</option>
          </select>
          <ErrMsg msg={errors.service?.message} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Your Message / Brief *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Describe your requirement — quantity, size, paper, finish, deadline…"
          className={`${field} resize-y`}
        />
        <ErrMsg msg={errors.message?.message} />
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm flex items-center gap-2">
          <span>&#9888;</span>{serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-500 hover:bg-brand-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-black py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-brand-500/15 hover:shadow-brand-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        {loading ? (
          <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
        ) : (
          <>Send Enquiry</>
        )}
      </button>
      <p className="text-xs text-slate-400 text-center">
        We respond within 24 hours on working days. Your details are kept confidential.
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/images/ui/contact-hero.jpg"
            alt="Contact Shiv Offset Printing Press Rajula"
            fill className="object-cover opacity-35" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 bg-brand-500/10 px-4 py-1.5 rounded-full">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Contact Shiv Offset</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Ready to print? Share your brief and get a quote within 24 hours. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info panel */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-navy-950 rounded-3xl p-7 border border-brand-500/10">
                <h2 className="text-xl font-black text-white mb-6">Our Details</h2>
                <div className="space-y-5">
                  {contactInfo.map(({ Icon, label, lines, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-400" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400/70 mb-1">{label}</p>
                        {lines.map((line, i) => (
                          href && i === 0
                            ? <a key={i} href={href} className="block text-sm text-slate-300 hover:text-brand-400 transition-colors">{line}</a>
                            : <p key={i} className="text-sm text-slate-400">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
<a
                   href="https://wa.me/918140332132?text=Hi%20Shiv%20Offset%2C%20I%20need%20a%20print%20quote."
                   target="_blank" rel="noopener noreferrer"
                   className="mt-7 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-green-500/20"
                 >
                   <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current flex-shrink-0">
                     <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.69 5.31 1.99 7.57L.5 31.5l8.18-2.04A15.42 15.42 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.97 22.3c-.33.93-1.93 1.78-2.67 1.9-.68.11-1.53.15-2.47-.15-.57-.18-1.3-.43-2.24-.84-3.95-1.7-6.53-5.7-6.73-5.97-.2-.26-1.63-2.16-1.63-4.12s1.03-2.92 1.4-3.32c.37-.4.8-.5 1.07-.5.27 0 .53 0 .77.01.24.01.57-.09.89.68.33.8 1.13 2.77 1.23 2.97.1.2.17.43.03.7-.13.26-.2.43-.4.66-.2.23-.42.52-.6.7-.2.2-.4.4-.17.8.23.4 1.03 1.7 2.22 2.76 1.52 1.36 2.8 1.78 3.2 1.98.4.2.63.17.87-.1.23-.27.97-1.13 1.23-1.53.27-.4.53-.33.9-.2.37.13 2.33 1.1 2.73 1.3.4.2.63.17.77.47.1.17.1 1-.23 1.93z" />
                   </svg>
                   WhatsApp: +91 81403 32132
                 </a>
              </div>

              {/* Map placeholder */}
              <div className="relative h-56 rounded-3xl overflow-hidden bg-slate-200 shadow-sm">
                <Image
                  src="/images/about/team.jpg"
                  alt="Shiv Offset — Rajula location"
                  fill className="object-cover opacity-60"
                  sizes="(max-width:1024px)100vw,40vw"
                />
<div className="absolute inset-0 bg-slate-900/40 flex flex-col items-center justify-center text-center p-4">
                 <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center mb-2">
                   <IconMapPin className="w-5 h-5 text-slate-900" strokeWidth={2} />
                 </div>
                 <p className="text-white text-sm font-bold">Near Esar Petrol Pump</p>
                 <p className="text-white/60 text-xs">Rajula – 365560</p>
                 <a
                   href="https://maps.google.com/?q=Near+Esar+Petrol+Pump,+Rajula,+Gujarat+365560"
                   target="_blank" rel="noopener noreferrer"
                   className="mt-3 text-xs bg-white text-slate-900 font-bold px-4 py-1.5 rounded-full hover:bg-brand-500 transition-colors"
                 >
                   Open in Maps
                 </a>
               </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <div className="mb-7">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-2 bg-brand-50 px-4 py-1 rounded-full">Send an Enquiry</span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Request a Quote</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Fill in the form and we&apos;ll get back with a detailed quotation within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom info strip */}
      <section className="py-12 bg-white dark:bg-navy-950 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {bottomStrip.map(({ Icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-300 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-brand-600" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
