"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            ob.unobserve(e.target)
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => ob.observe(el))
    return () => ob.disconnect()
  }, [])

  return null
}
