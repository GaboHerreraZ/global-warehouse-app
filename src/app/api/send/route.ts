// import { Email, createContactEmail } from "@/domain/model/email";
import { Email, EmailTemplate } from "@/components/contact/emailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email: Email = {
      from: "Global Warehouse Center <info-no-reply@globalwarehousecenter.com>",
      to: ["gaboghz654@gmail.com"],
      subject: "Información de contact",
      html: EmailTemplate(body),
    };

    const response = await resend.emails.send(email);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
