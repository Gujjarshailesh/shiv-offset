import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  bg?: "white" | "gray" | "dark" | "red"
}

const bgs = {
  white: "bg-white",
  gray: "bg-gray-50",
  dark: "bg-gray-900 text-white",
  red: "bg-red-600 text-white",
}

export default function Section({ children, className, id, bg = "white" }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", bgs[bg], className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeader({ tag, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", center && "text-center")}>
      {tag && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            center && "mx-auto",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
