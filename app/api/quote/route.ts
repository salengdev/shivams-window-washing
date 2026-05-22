import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Shivam's Window Washing <onboarding@resend.dev>",
      to: "salkdee@gmail.com",
      subject: "New Quote Request",
      html: `
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    // IMPORTANT: proper Next.js response
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}