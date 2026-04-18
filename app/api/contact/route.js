import { logger } from "@/lib/logger";
import { sendEmail } from "@/lib/mailer";

import {
  buildDoctorEmailTemplate,
  buildPatientConfirmationTemplate
} from "@/lib/mailer/templates";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { contactFormSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestId = generateRequestId();

  try {
    // Step 1: Rate Limiting
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      logger.warn("CONTACT_API", "Rate limit exceeded", {
        requestId,
        ip: clientIp,
        resetTime: rateLimit.resetTime,
      });

      return NextResponse.json(
        {
          success: false,
          code: "RATE_LIMIT_EXCEEDED",
          message: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Reset": rateLimit.resetTime?.toISOString() ?? "",
            "Retry-After": "3600",
          },
        }
      );
    }

    // Step 2: Request Body Parse
    let rawBody;
    try {
      rawBody = await request.json();
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          code: "INVALID_JSON",
          message: "Invalid request body."
        },
        { status: 400 }
      );
    }

    // Step 3: Zod Validation + Sanitization
    const parseResult = contactFormSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;

      logger.warn("CONTACT_API", "Validation failed", {
        requestId,
        errors: fieldErrors,
      });

      return NextResponse.json(
        {
          success: false,
          code: "VALIDATION_ERROR",
          message: "Please check your form inputs.",
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const formData = parseResult.data;

    logger.info("CONTACT_API", "Processing new appointment request", {
      requestId,
      patientEmail: formData.email,
      service: formData.service,
    });

    // Step 4: Doctor Notification Email
    const doctorTemplate = buildDoctorEmailTemplate(formData);

    const doctorEmailResult = await sendEmail(
      {
        to: process.env.DOCTOR_EMAIL,
        subject: doctorTemplate.subject,
        html: doctorTemplate.html,
      },
      "DOCTOR_EMAIL"
    );

    // ❌ Doctor email fail → abort immediately
    if (!doctorEmailResult.success) {
      logger.error("CONTACT_API", "Doctor email delivery failed — aborting", {
        requestId,
        patientEmail: formData.email,
        error: doctorEmailResult.error,
      });

      return NextResponse.json(
        {
          success: false,
          code: "EMAIL_DELIVERY_FAILED",
          message:
            "We encountered an issue processing your request. Please call us directly or try again.",
        },
        { status: 503 }
      );
    }

    // Step 5: Patient Confirmation Email
    const patientEmail = formData.email?.trim();
    let confirmationSent = false;

    if (patientEmail) {
      const patientTemplate = buildPatientConfirmationTemplate(formData);

      const patientEmailResult = await sendEmail(
        {
          to: patientEmail,
          subject: patientTemplate.subject,
          html: patientTemplate.html,
        },
        "PATIENT_CONFIRMATION"
      );

      confirmationSent = patientEmailResult.success;

      if (!patientEmailResult.success) {
        logger.warn("CONTACT_API", "Patient confirmation failed (non-critical)", {
          requestId,
          patientEmail,
          doctorMessageId: doctorEmailResult.messageId,
          error: patientEmailResult.error,
        });
      }
    } else {
      logger.info("CONTACT_API", "No patient email — skipping confirmation", {
        requestId,
      });
    }

    // Step 6: Final Response
    logger.info("CONTACT_API", "Request processed successfully", {
      requestId,
      doctorMessageId: doctorEmailResult.messageId,
      confirmationSent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your appointment request has been received! We will contact you shortly.",
        confirmationSent,
      },
      { status: 200 }
    );

  } catch (error) {
    logger.error("CONTACT_API", "Unexpected error in contact route", {
      requestId,
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        success: false,
        code: "INTERNAL_ERROR",
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function generateRequestId() {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API is running." },
    { status: 200 }
  );
}