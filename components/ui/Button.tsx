"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"

type BaseProps = {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

const variants = {
  primary:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  secondary:
    "bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus:ring-yellow-400",
  outline:
    "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
  ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
}

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
