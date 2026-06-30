"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/validations"
import { services } from "@/data/services"

function ErrMsg({ msg }: { msg?: string }) {
  return msg ? <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>&#9888;</span>{msg}</p> : null
}

export default function ContactForm() {
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
        className="w-full bg-brand-500 hover:bg-brand-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-brand-500/15 hover:shadow-brand-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
