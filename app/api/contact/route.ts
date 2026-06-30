import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, phone, service, message } = result.data

    // Structured log — replace with email/Sheets/CRM integration
    console.log("[Shiv Offset Contact Form]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      service,
      message,
    })

    // Future integrations (uncomment when ready):
    // await sendEmail({ to: "info@shivoffset.in", ...result.data })
    // await appendToGoogleSheet(result.data)

    return NextResponse.json({ success: true, message: "Enquiry received successfully." })
  } catch (error) {
    console.error("[Contact API Error]", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
