"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const revealTargets = gsap.utils.toArray<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale")

    if (reduceMotion) {
      revealTargets.forEach((el) => el.classList.add("visible"))
      return undefined
    }

    const ctx = gsap.context(() => {
      revealTargets.forEach((el, index) => {
        const fromVars = {
          autoAlpha: 0,
          x: el.classList.contains("reveal-left") ? -42 : el.classList.contains("reveal-right") ? 42 : 0,
          y: el.classList.contains("reveal") ? 34 : 0,
          scale: el.classList.contains("reveal-scale") ? 0.94 : 1,
        }

        gsap.fromTo(
          el,
          fromVars,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: Math.min((index % 6) * 0.035, 0.18),
            ease: "power3.out",
            onStart: () => el.classList.add("visible"),
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        )
      })

      gsap.utils.toArray<HTMLImageElement>("main section img").forEach((img) => {
        gsap.fromTo(
          img,
          { autoAlpha: 0.82, scale: 1.045 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 92%",
              once: true,
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>(".img-zoom").forEach((wrap) => {
        const img = wrap.querySelector("img")
        if (!img) return

        gsap.to(img, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        })
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [pathname])

  return null
}
