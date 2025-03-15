import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Configure Transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send Email
    const mailOptions = {
      from: `"Blacklight Studios" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New lead from ${body.firstName} ${body.lastName}`,
      text: `Name:${body.firstName} ${body.lastName}}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `<p><strong>Name:</strong> ${body.firstName} ${body.lastName}}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Message:</strong> ${body.message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
