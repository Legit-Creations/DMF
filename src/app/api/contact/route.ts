import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const intent = body.intent?.trim();
    const message = body.message?.trim();

    if (!name || !email || !intent || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "operations@legitcreations.com.ng",
      replyTo: email,
      subject: `${intent} — Executive Contact`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.6; max-width: 700px; margin: 0 auto;">

          <h2 style="margin-bottom: 24px;">
            New Executive Contact Inquiry
          </h2>

          <p>
            <strong>Name</strong><br />
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email</strong><br />
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Strategic Intent</strong><br />
            ${escapeHtml(intent)}
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 28px 0;" />

          <p>
            <strong>Message</strong>
          </p>

          <p style="white-space: pre-wrap;">
            ${escapeHtml(message)}
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 28px 0;" />

          <p style="font-size: 12px; color: #777;">
            Submitted through the Contra Atlantis Group contact form.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending your message.",
      },
      { status: 500 }
    );
  }
}

/**
 * Prevent submitted text from being interpreted as HTML.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}