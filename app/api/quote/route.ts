import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await resend.emails.send({
      from: "Shivam's Window Washing <onboarding@resend.dev>",
      to: "salkdee@gmail.com",
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    // 🔥 IMPORTANT DEBUG LOG
    console.log("RESEND RESULT:", result);

    return NextResponse.json(
      { success: true, result },
      { status: 200 }
    );

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}