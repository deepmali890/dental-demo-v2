// app/api/contact/route.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    try {


        const body = await req.json();

        const {
            name,
            phone,
            email,
            service,
            doctor,
            date,
            time,
            message,
        } = body;

        if (!name || !phone || !service) {
            return Response.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }


        await resend.emails.send({
            from: "appointments@yourdomain.com",
            to: "your-email@gmail.com",
            subject: `New Appointment: ${name} — ${service}`,
            html: `
        <h2>New Appointment Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "N/A"}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Doctor:</b> ${doctor || "No preference"}</p>
        <p><b>Date:</b> ${date || "N/A"} at ${time || "N/A"}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `,
        });

        // Patient ko bhi confirmation bhejo
        if (email) {
            await resend.emails.send({
                from: "appointments@yourdomain.com",
                to: email,
                subject: "Appointment Request Received",
                html: `
          <h2>Thank you, ${name}!</h2>
          <p>Your appointment request for <b>${service}</b> is received.</p>
          <p>We will call you shortly to confirm.</p>
        `,
            });
        }
        return Response.json({ success: true })
    } catch (error) {
        console.error("CONTACT ERROR:", error);
        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );

    }
}