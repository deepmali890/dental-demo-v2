// app/api/webhook/resend/route.js


export const runtime = "nodejs";
import { Webhook } from "svix";

export async function POST(req) {
    const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

    if (!webhookSecret) {
        console.error("RESEND_WEBHOOK_SECRET set nahi hai");
        return Response.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const svixId        = req.headers.get("svix-id");
    const svixTimestamp = req.headers.get("svix-timestamp");
    const svixSignature = req.headers.get("svix-signature");

    const rawBody = await req.text();

    console.log("DEBUG:", {
        "svix-id":        svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
        secretPrefix:     webhookSecret?.substring(0, 10),
        bodyLength:       rawBody.length,
    });

    if (!svixId || !svixTimestamp || !svixSignature) {
        console.error("Svix headers missing", { svixId, svixTimestamp, svixSignature });
        return Response.json({ error: "Missing required headers" }, { status: 400 });
    }

    let event;
    try {
        const wh = new Webhook(webhookSecret);
        event = wh.verify(rawBody, {
            "svix-id":        svixId,
            "svix-timestamp": svixTimestamp,
            "svix-signature": svixSignature,
        });
    } catch (err) {
        console.error("Signature verification fail:", err.message);
        return Response.json({ error: "Invalid signature" }, { status: 401 });
    }

    console.log("WEBHOOK EVENT:", event.type, event.data);

    switch (event.type) {
        case "email.sent":
            console.log("Email sent:", event.data.email_id);
            break;
        case "email.delivered":
            console.log("Email delivered:", event.data.email_id);
            break;
        case "email.bounced":
            console.error("Email bounced:", event.data.email_id, "| Reason:", event.data.bounce?.message);
            break;
        case "email.complained":
            console.error("Spam complaint:", event.data.email_id);
            break;
        default:
            console.log("Unknown event:", event.type);
    }

    return Response.json({ success: true }, { status: 200 });
}


// // Event Handlers

// async function handleEmailSent(data) {
//     console.log("Email sent to:", data.to, "| ID:", data.email_id)
//     // DB mein status update karo: "sent"
// }

// async function handleEmailDelivered(data) {
//     console.log("Email delivered to:", data.to)
//     // DB mein status update karo: "delivered"
// }

// async function handleEmailBounced(data) {
//     console.error("Email bounced:", data.to, "| Reason:", data.bounce?.message)
//     // DB mein mark karo, aur is email ko future mein block karo
// }

// async function handleEmailComplained(data) {
//     console.error("Spam complaint from:", data.to)
//     // Unsubscribe list mein add karo
// }