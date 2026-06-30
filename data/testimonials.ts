export interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    title: "Procurement Manager",
    company: "Sunrise Pharmaceuticals, Ahmedabad",
    quote:
      "Shiv Offset has been our packaging partner for over six years. Their mono carton quality is consistently excellent, and they never miss a delivery deadline — even during peak production cycles. Truly a reliable partner.",
    rating: 5,
  },
  {
    id: 2,
    name: "Meera Desai",
    title: "Brand Manager",
    company: "Kalash FMCG, Surat",
    quote:
      "We revamped our entire product line packaging through Shiv Offset. The colour accuracy was spot-on with our brand guidelines, and the team's attention to detail on the finishing is remarkable. Our retail presence improved significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vivek Shah",
    title: "Director",
    company: "Greenleaf Exports, Ahmedabad",
    quote:
      "For our export-quality catalogue, we needed printing that would impress international buyers. Shiv Offset delivered a stunning result — sharp images, perfect binding, and premium lamination. We've had consistent praise from our overseas clients.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Nair",
    title: "Marketing Head",
    company: "The Grand Heritage Hotels, Ahmedabad",
    quote:
      "Our restaurant menus and in-room collateral needed to match our property's luxury feel. Shiv Offset suggested the perfect paper and finishing combination. The soft-touch laminated menus look and feel absolutely premium.",
    rating: 5,
  },
]
