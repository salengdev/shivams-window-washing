import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body?.name ?? "";
    const email = body?.email ?? "";
    const message = body?.message ?? "";

    await resend.emails.send({
      from: "Shivam's Window Washing <onboarding@resend.dev>",
      to: "salkdee@gmail.com",
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // CRITICAL: always return clean response BEFORE anything else
    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (err) {
    console.error("API ERROR:", err);

    return new Response(
      JSON.stringify({ ok: false }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}