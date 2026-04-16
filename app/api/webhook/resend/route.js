// app/api/webhook/resend/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const signature = req.headers.get("resend-signature");

        const body = await req.text();

        // Verify signature
        const isValid = await resend.webhooks.verify({
            signature,
            body,
            secret: process.env.RESEND_WEBHOOK_SECRET,
        })

        if (!isValid) {
            console.error("❌ Invalid signature");
            return Response.json({ error: "Invalid signature" }, { status: 401 });
        }

        const data = JSON.parse(body);

        console.log("📩 VERIFIED WEBHOOK:", data);


        const { type, data: emailData } = data;

        if (type === "email.sent") {
            console.log("📤 SENT:", emailData.email_id);
        }

        if (type === "email.delivered") {
            console.log("✅ DELIVERED:", emailData.email_id);
        }

        if (type === "email.bounced") {
            console.log("❌ BOUNCED:", emailData.email_id);
        }


        return Response.json({ success: true });

    } catch (error) {
        console.error("❌ WEBHOOK ERROR:", error);

        return Response.json(
            { success: false },
            { status: 500 }
        );
    }
}