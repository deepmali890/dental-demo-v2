import z from "zod";

const sanitizeString = (val) => val.replace(/<[^>]*>/g, "").trim();

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long")
        .transform(sanitizeString),

    phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Enter valid mobile number")
        .transform((val) => val.trim()),

    email: z
        .string()
        .email("Invalid email address")
        .max(254)
        .transform((val) => val.toLowerCase().trim())
        .optional()
        .or(z.literal("")),

    service: z
        .string({
            required_error: "Please select a service",
        })
        .min(1)
        .transform(sanitizeString),

    doctor: z
        .string()
        .optional()
        .transform((val) => (val ? sanitizeString(val) : undefined)),

    date: z
        .string()
        .optional()
        .refine((val) => {
            if (!val) return true;
            const selected = new Date(val);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selected >= today;
        }, "Date cannot be in the past"),

    time: z
        .string()
        .optional(),

    message: z
        .string()
        .max(1000, "Message too long")
        .optional()
        .transform((val) => (val ? sanitizeString(val) : "")),

    consent: z
        .boolean()
        .refine((val) => val === true, "Consent is required"),
})