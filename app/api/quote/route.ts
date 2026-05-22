import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  console.log("➡️ API HIT");

  try {
    const body = await req.json();
    console.log("BODY:", body);

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

    console.log("RESEND RESULT:", result);

    return Response.json({ ok: true });

  } catch (err) {
    console.error("API FAILED:", err);

    return Response.json(
      { ok: false },
      { status: 500 }
    );
  }
}