// app/api/contact/route.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, service, doctor, date, time, message } = body;

    if (!name || !phone || !service) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }


    const adminEmailResponse = await resend.emails.send({
      from: "Dental Preview <info@dentalpreview.online>",
      to: ["appointments@dentalpreview.online"],
      reply_to: email || "no-reply@dentalpreview.online",
      subject: `New Appointment: ${name} — ${service}`,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f3f4f6; padding:20px;">

    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e7eb;">

      <!-- Header -->
      <div style="background:#2563eb; color:#fff; padding:16px 20px;">
        <h2 style="margin:0; font-size:18px;">🦷 New Appointment Request</h2>
      </div>

      <!-- Body -->
      <div style="padding:20px;">

        <p style="margin:0 0 16px; color:#374151;">
          A new appointment has been submitted through your website.
        </p>

        <table style="width:100%; border-collapse:collapse; font-size:14px;">

          <tr>
            <td style="padding:10px; font-weight:600; color:#6b7280;">Patient Name</td>
            <td style="padding:10px; color:#111827;">${name}</td>
          </tr>

          <tr style="background:#f9fafb;">
            <td style="padding:10px; font-weight:600; color:#6b7280;">Phone</td>
            <td style="padding:10px;">${phone}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:600; color:#6b7280;">Email</td>
            <td style="padding:10px;">${email || "Not provided"}</td>
          </tr>

          <tr style="background:#f9fafb;">
            <td style="padding:10px; font-weight:600; color:#6b7280;">Service</td>
            <td style="padding:10px;">${service}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:600; color:#6b7280;">Doctor</td>
            <td style="padding:10px;">${doctor || "No preference"}</td>
          </tr>

          <tr style="background:#f9fafb;">
            <td style="padding:10px; font-weight:600; color:#6b7280;">Preferred Slot</td>
            <td style="padding:10px;">${date || "N/A"} at ${time || "N/A"}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:600; color:#6b7280;">Notes</td>
            <td style="padding:10px;">${message || "-"}</td>
          </tr>

        </table>

        <div style="margin-top:20px; padding:12px; background:#eff6ff; border-radius:6px; font-size:13px; color:#1e3a8a;">
          Tip: Reply directly to this email to contact the patient.
        </div>

      </div>

      <!-- Footer -->
      <div style="padding:12px 20px; font-size:12px; color:#9ca3af; border-top:1px solid #e5e7eb;">
        Dental Preview • Website Inquiry System
      </div>

    </div>
  </div>
`
    });

    console.log("✅ Admin email sent:", adminEmailResponse?.data?.id);

    let userEmailResponse = null;

    if (email) {
      userEmailResponse = await resend.emails.send({
        from: "Dental Preview <appointments@dentalpreview.online>",
        to: [email],
        subject: "Appointment Request Received — Dental Preview",
        html: `
  <div style="font-family: Arial, sans-serif; background:#f3f4f6; padding:20px;">

    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e7eb;">

      <!-- Header -->
      <div style="background:#16a34a; color:#fff; padding:16px 20px;">
        <h2 style="margin:0; font-size:18px;">✅ Appointment Request Received</h2>
      </div>

      <!-- Body -->
      <div style="padding:20px; color:#374151;">

        <p style="margin:0 0 16px;">
          Hi <b>${name}</b>,
        </p>

        <p style="margin:0 0 16px;">
          Thank you for reaching out. We’ve received your appointment request and our team will contact you shortly to confirm the details.
        </p>

        <div style="border:1px solid #e5e7eb; border-radius:8px; padding:14px; margin:20px 0;">

          <p style="margin:0 0 8px;"><b>Service:</b> ${service}</p>
          <p style="margin:0 0 8px;"><b>Doctor:</b> ${doctor || "No preference"}</p>
          <p style="margin:0;"><b>Preferred Time:</b> ${date || "N/A"} at ${time || "N/A"}</p>

        </div>

        <p style="margin:0 0 12px;">
          📞 We will call you on <b>${phone}</b> to confirm your appointment.
        </p>

        <p style="font-size:14px; color:#6b7280;">
          If you have any urgent questions, feel free to reply to this email.
        </p>

      </div>

      <!-- Footer -->
      <div style="padding:12px 20px; font-size:12px; color:#9ca3af; border-top:1px solid #e5e7eb;">
        Dental Preview Clinic
      </div>

    </div>
  </div>
`
      });

      console.log("✅ User confirmation email sent:", userEmailResponse?.data?.id);
    }

    return Response.json({
      success: true,
      message: "Emails processed successfully",
      data: {
        adminEmailId: adminEmailResponse?.data?.id || null,
        userEmailId: userEmailResponse?.data?.id || null,
      },
    });

  } catch (error) {
    console.error("❌ CONTACT ERROR:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 }
    );
  }
}