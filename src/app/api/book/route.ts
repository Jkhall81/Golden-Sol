import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, date, time } = await req.json();

  try {
    await resend.emails.send({
      from: "Golden Sol <notifications@golden-sol-tanning.com>", // must match verified sender
      to: "goldensolaz@gmail.com", // owner receives booking
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment</h2>
        <table cellpadding="8" cellspacing="0" border="0" style="font-family:sans-serif;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Date:</strong></td><td>${date}</td></tr>
          <tr><td><strong>Time:</strong></td><td>${time}</td></tr>
        </table>
        <p>Reply to this email to follow up.</p>
      `,
    });

    return NextResponse.json({ message: "Email sent via Resend" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ message: "Failed to send" }, { status: 500 });
  }
}
