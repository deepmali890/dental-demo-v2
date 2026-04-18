import { Resend } from "resend";
import { logger } from "../logger";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

export async function sendEmail(options, context = "EMAIL") {
    const { to, subject, html } = options;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            logger.info(context, `Sending email (attempt ${attempt}/${MAX_RETRIES})`, {
                to,
                subject,
            });

            const { data, error } = await resend.emails.send({
                from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
                to: [to],
                subject,
                html,
            });

            // Rsend SDK error handling
            if (error) {
                throw new Error(`Resend API Error: ${error.message}`);
            }

            logger.info(context, "Email sent successfully", {
                messageId: data.id,
                to,
                attempt,
            });

            return { success: true, messageId: data.id };

        } catch (error) {
            logger.warn(context, `Email attempt ${attempt} failed`, {
                error: error.message,
                to,
            });

            if (attempt === MAX_RETRIES) {
                logger.error(context, "All email attempts exhausted", {
                    error: error.message,
                    to,
                });
                return { success: false, error: err.message };
            }

            await new Promise((resolve) =>
                setTimeout(resolve, RETRY_DELAY_MS * attempt)
            );
        }
    }

}