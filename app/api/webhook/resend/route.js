// app/api/webhook/resend/route.js

import { Resend } from "resend"

export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {

        const webhookSecret = process.env.RESEND_WEBHOOK_SECRET

        console.log("ENV CHECK:", {
            hasApiKey: !!process.env.RESEND_API_KEY,
            hasWebhookSecret: !!process.env.RESEND_WEBHOOK_SECRET,
            secretPrefix: webhookSecret?.substring(0, 8),
        })

        if (!webhookSecret) {
            console.error("RESEND_WEBHOOK_SECRET is not set!")
            return Response.json(
                { error: "Webhook secret not configured" },
                { status: 500 }
            )
        }

        const signature = req.headers.get("resend-signature")
        const body = await req.text()

        if (!signature) {
            return Response.json(
                { error: "Missing signature header" },
                { status: 400 }
            )
        }


        const isValid = await resend.webhooks.verify({
            body,
            signature,
            secret: webhookSecret,
        })

        if (!isValid) {
            return Response.json({ error: "Invalid signature" }, { status: 401 })
        }

        const event = JSON.parse(body)
        console.log("WEBHOOK EVENT:", event.type, event.data?.email_id)


        switch (event.type) {
            case "email.sent":
                await handleEmailSent(event.data)
                break
            case "email.delivered":
                await handleEmailDelivered(event.data)
                break
            case "email.bounced":
                await handleEmailBounced(event.data)
                break
            case "email.complained":
                await handleEmailComplained(event.data)
                break
            default:
                console.log("Unhandled event type:", event.type)
        }

        return Response.json({ success: true })


    } catch (error) {
        console.error("WEBHOOK ERROR:", error.message)
        return Response.json({ error: error.message }, { status: 500 })
    }
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