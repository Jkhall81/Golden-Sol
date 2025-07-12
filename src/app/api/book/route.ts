import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/lib/firebase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, date, time } = await req.json();

  try {
    // Check if time slot is already taken
    const snapshot = await db
      .collection("appointments")
      .where("date", "==", date)
      .where("time", "==", time)
      .get();

    if (!snapshot.empty) {
      return NextResponse.json(
        { message: "Time slot already booked." },
        { status: 409 }
      );
    }

    // Save appointment
    await db.collection("appointments").add({
      name,
      email,
      phone,
      date,
      time,
      createdAt: new Date().toISOString(),
    });

    // Send notification email
    await resend.emails.send({
      from: "Golden Sol <notifications@golden-sol-tanning.com>",
      to: "goldensolaz@gmail.com",
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

    return NextResponse.json({ message: "Appointment booked!" });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ message: "Failed to book" }, { status: 500 });
  }
}
