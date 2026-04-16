// app/api/webhook/resend/route.js
import crypto from "crypto";

export async function POST(req) {
    try {
        const body = await req.text();
        const signature = req.headers.get("resend-signature");

        // Verify signature
        const expected = crypto
            .createHmac("sha256", process.env.RESEND_WEBHOOK_SECRET)
            .update(body)
            .digest("hex");

        if (signature !== expected) {
            console.error("❌ Invalid webhook signature");
            return Response.json({ error: "Invalid signature" }, { status: 401 });
        }

        const parsed = JSON.parse(body);

        console.log("📩 WEBHOOK EVENT:", parsed);


        const { type, data } = parsed;

        if (type === 'email.sent') {
            console.log("📤 SENT:", data.id);
        }

        if (type === "email.delivered") {
            console.log("✅ DELIVERED:", data.id);
        }

        if (type === "email.bounced") {
            console.log("❌ BOUNCED:", data.id);
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