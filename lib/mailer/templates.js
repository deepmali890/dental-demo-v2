export function buildDoctorEmailTemplate(formData) {
    const {
        name,
        email,
        phone,
        service,
        doctor,
        date,
        time,
        message,
    } = formData;

    const submissionTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
    });

    return {
        subject: `🦷 New Appointment Request — ${name}`,

        html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background-color:#f4f7fb;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fb;padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:600px;width:100%;">

<!-- Header -->
<tr>
<td style="background:linear-gradient(135deg,#1a73e8,#0d47a1);padding:32px 40px;text-align:center;">
<h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">
🦷 New Appointment Request
</h1>
<p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:14px;">
Submitted on ${submissionTime} (IST)
</p>
</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:36px 40px;">

<!-- Alert -->
<div style="background:#e8f0fe;border-left:4px solid #1a73e8;padding:16px 20px;margin-bottom:28px;">
<p style="margin:0;color:#1a237e;font-size:14px;font-weight:600;">
New patient appointment request received.
</p>
</div>

<!-- Patient Info -->
<h2 style="font-size:16px;margin-bottom:20px;border-bottom:2px solid #e8eaed;padding-bottom:10px;">
Patient Information
</h2>

<table width="100%" cellpadding="0" cellspacing="0">
${buildDetailRow("👤 Name", name)}
${buildDetailRow("📧 Email", email || "Not provided")}
${buildDetailRow("📞 Phone", phone)}
${buildDetailRow("🏥 Service", service)}
${buildDetailRow("👨‍⚕️ Doctor", doctor || "No preference")}
${buildDetailRow("📅 Date", date || "Not selected")}
${buildDetailRow("⏰ Time", time || "Not selected")}
</table>

<!-- Message -->
<div style="margin-top:28px;">
<h2 style="font-size:16px;margin-bottom:12px;border-bottom:2px solid #e8eaed;padding-bottom:10px;">
Patient Message
</h2>
<div style="background:#f8f9fa;padding:20px;border-radius:8px;">
${escapeHtml(message || "No message")}
</div>
</div>

<!-- CTA -->
<div style="margin-top:32px;text-align:center;">
<a href="mailto:${email}?subject=Re: Appointment Request"
style="background:#1a73e8;color:#fff;padding:14px 30px;border-radius:8px;text-decoration:none;">
Reply to Patient
</a>
</div>

</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#f8f9fa;padding:20px;text-align:center;">
<p style="font-size:12px;color:#999;">
Auto-generated email from appointment system
</p>
</td>
</tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`,
    };
}

export function buildPatientConfirmationTemplate(formData) {
    const { name, service, doctor, date, time } = formData;

    return {
        subject: `✅ Appointment Request Received — Dental Preview Clinic`,

        html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background-color:#f4f7fb;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fb;padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:600px;width:100%;">

<!-- Header -->
<tr>
<td style="background:linear-gradient(135deg,#00897b,#004d40);padding:36px 40px;text-align:center;">
<div style="font-size:48px;margin-bottom:12px;">🦷</div>
<h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;">
Dental Preview Clinic
</h1>
<p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">
Your Appointment Request is Received!
</p>
</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:36px 40px;">

<p style="color:#202124;font-size:16px;line-height:1.7;margin:0 0 20px;">
Dear <strong>${escapeHtml(name)}</strong>,
</p>

<p style="color:#3c4043;font-size:15px;line-height:1.8;margin:0 0 24px;">
Thank you for contacting <strong>Dental Preview Clinic</strong>.  
We have received your appointment request. Our team will contact you shortly to confirm your booking.
</p>

<!-- Summary Box -->
${service || date || time || doctor ? `
<div style="background:#e0f2f1;border-radius:10px;padding:24px 28px;margin-bottom:28px;">
<h3 style="color:#004d40;font-size:14px;font-weight:700;margin:0 0 16px;text-transform:uppercase;">
Your Request Summary
</h3>

<table width="100%" cellpadding="0" cellspacing="0">
${service ? buildSummaryRow("Service", service) : ""}
${doctor ? buildSummaryRow("Doctor", doctor) : ""}
${date ? buildSummaryRow("Date", date) : ""}
${time ? buildSummaryRow("Time", time) : ""}
${buildSummaryRow("Status", "⏳ Pending Confirmation")}
</table>
</div>
` : ""}

<!-- Steps -->
<h3 style="color:#202124;font-size:15px;font-weight:700;margin:0 0 16px;">
What happens next?
</h3>

<table width="100%" cellpadding="0" cellspacing="0">
${buildStepRow("1", "We review your request", "Within few hours")}
${buildStepRow("2", "We contact you", "Via call or email")}
${buildStepRow("3", "Appointment confirmed", "Visit clinic 😊")}
</table>

<!-- Contact -->
<div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-top:28px;text-align:center;">
<p style="font-size:13px;margin-bottom:8px;">Need help?</p>
<a href="tel:+911234567890" style="color:#1a73e8;font-weight:600;text-decoration:none;">
📞 Call Us
</a>
</div>

</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#f8f9fa;padding:20px;text-align:center;">
<p style="font-size:12px;color:#999;">
© ${new Date().getFullYear()} Dental Preview Clinic
</p>
</td>
</tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`,
    };
}

function buildDetailRow(label, value) {
    return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f1f3f4;vertical-align:top;width:40%;">
        <span style="color:#5f6368;font-size:13px;font-weight:600;">${label}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #f1f3f4;vertical-align:top;">
        <span style="color:#202124;font-size:14px;">${escapeHtml(String(value))}</span>
      </td>
    </tr>`;
}

function buildSummaryRow(label, value) {
    return `
    <tr>
      <td style="padding:6px 0;color:#00695c;font-size:13px;font-weight:600;width:40%;">${label}</td>
      <td style="padding:6px 0;color:#004d40;font-size:13px;">${escapeHtml(String(value))}</td>
    </tr>`;
}

function buildStepRow(number, title, subtitle) {
    return `
    <tr>
      <td style="padding:8px 0;vertical-align:top;width:36px;">
        <div style="background:#1a73e8;color:#fff;width:24px;height:24px;border-radius:50%;font-size:12px;font-weight:700;text-align:center;line-height:24px;">${number}</div>
      </td>
      <td style="padding:8px 0 8px 12px;">
        <p style="margin:0;color:#202124;font-size:14px;font-weight:600;">${title}</p>
        <p style="margin:2px 0 0;color:#80868b;font-size:12px;">${subtitle}</p>
      </td>
    </tr>`;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

