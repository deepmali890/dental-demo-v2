// app/terms/page.js

import { Calendar, ShieldCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Terms & Conditions | SmileCare Dental Clinic",
    description:
        "Read the Terms and Conditions for using SmileCare Dental Clinic's website and services.",
    robots: { index: true, follow: true },
}

const LAST_UPDATED = "January 1, 2025"
const CLINIC_NAME = "SmileCare Dental Clinic"
const CLINIC_EMAIL = "info@dentalpreview.online"
const CLINIC_PHONE = "+91-98765-43210"
const CLINIC_ADDRESS = "42, Sector 18, Near Noida City Centre, Noida, Uttar Pradesh — 201301"
const WEBSITE_URL = "https://www.dentalpreview.online"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">

                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">

                    {/* Glow blobs */}
                    <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:50px_50px]" />

                </div>

                <div className="relative container mx-auto px-4 max-w-4xl py-16 md:py-20">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/80">
                            Legal Document
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.15] mb-4">
                        Terms & Conditions
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
                        Please read these terms carefully before using our website or services.
                        They outline your rights, responsibilities, and important legal information.
                    </p>

                    {/* Last Updated */}
                    <div className="mt-6 flex items-center gap-2 text-xs md:text-sm text-white/60">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                        Last updated: {LAST_UPDATED}
                    </div>

                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 max-w-4xl py-12">
                {/* Intro */}
                <div className="relative mb-12">

                    {/* Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-100/40 to-amber-50/40 blur-2xl rounded-3xl -z-10" />

                    <div className="relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">

                        {/* Top Label */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-3 h-3 bg-brand-600 rounded-full animate-pulse" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600">
                                Important Notice
                            </span>
                        </div>

                        {/* Content */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">

                            <span className="font-semibold text-gray-900">
                                Please Read Carefully:
                            </span>{" "}

                            These Terms and Conditions (&quot;Terms&quot;) govern your use of{" "}

                            <span className="font-semibold text-gray-900">
                                {CLINIC_NAME}
                            </span>{" "}

                            website{" "}

                            <span className="font-medium text-brand-600 break-all">
                                {WEBSITE_URL}
                            </span>,{" "}

                            and the dental services we provide.

                            <br /><br />

                            By accessing our website, submitting an appointment request, or receiving
                            treatment at our clinic, you confirm that you have read, understood, and
                            agree to be bound by these Terms.

                            <br /><br />

                            If you do not agree, please discontinue use of our website and services.

                        </p>

                    </div>
                </div>

                <div className="space-y-10">
                    {/* Section 1 */}
                    <Section id="acceptance" number="1" title="Acceptance of Terms">

                        {/* Intro */}
                        <p>
                            By using this website or our dental services, you represent that:
                        </p>

                        {/* Points Card */}
                        <div className="mt-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">

                            <ul className="space-y-3">

                                {[
                                    "You are at least 18 years of age, or are accessing the site under the supervision of a parent or legal guardian",
                                    "You have the legal capacity to enter into a binding agreement",
                                    "You will use our website and services only for lawful purposes",
                                    "All information you provide to us is accurate, current, and complete",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">

                                        {/* Dot */}
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />

                                        {/* Text */}
                                        <span className="leading-relaxed">
                                            {item}
                                        </span>

                                    </li>
                                ))}

                            </ul>

                        </div>

                        {/* Bottom Note */}
                        <div className="mt-5 p-4 rounded-xl bg-brand-50 border border-brand-100">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                These Terms apply to all visitors, patients, and users of our website and
                                services. We reserve the right to update these Terms at any time, and your
                                continued use constitutes acceptance of any changes.
                            </p>
                        </div>

                    </Section>

                    {/* Section 2 */}
                    <Section id="services" number="2" title="Dental Services">

                        {/* 2.1 Nature */}
                        <Subsection title="2.1 Nature of Services">
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p>
                                    <span className="font-semibold text-gray-900">{CLINIC_NAME}</span>{" "}
                                    provides professional dental care services including preventive care,
                                    restorative dentistry, cosmetic dentistry, orthodontics, oral surgery,
                                    periodontics, pediatric dentistry, and dental implants.
                                </p>
                            </div>
                        </Subsection>

                        {/* 2.2 Disclaimer */}
                        <Subsection title="2.2 Medical Disclaimer">
                            <div className="relative bg-red-50 border border-red-100 rounded-2xl p-5">

                                {/* Top Label */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-red-600">
                                        Important Disclaimer
                                    </span>
                                </div>

                                <p className="text-red-700 text-sm leading-relaxed">
                                    The information provided on this website is for general informational
                                    purposes only and does <strong>not</strong> constitute professional
                                    medical or dental advice, diagnosis, or treatment. Always seek the
                                    advice of a qualified dentist or healthcare professional for any
                                    dental or medical condition.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-red-100/60 border border-red-200 text-xs text-red-800">
                                    Do not disregard professional advice or delay seeking treatment based
                                    on information found on this website.
                                </div>

                            </div>
                        </Subsection>

                        {/* 2.3 Decisions */}
                        <Subsection title="2.3 Treatment Decisions">
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <ul className="space-y-3">
                                    {[
                                        "All treatment plans are subject to clinical examination and professional judgment of our dentists",
                                        "We reserve the right to decline treatment if it is not in the patient's best medical interest",
                                        "Treatment outcomes may vary between patients — we do not guarantee specific results",
                                        "Before-and-after photos represent individual results and are not guarantees of your personal outcome",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </Subsection>

                        {/* 2.4 Emergency */}
                        <Subsection title="2.4 Emergency Services">
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                                <p className="text-amber-900 text-sm leading-relaxed">
                                    While we strive to accommodate dental emergencies, we cannot guarantee
                                    immediate availability at all times.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-amber-100/60 border border-amber-200 text-xs text-amber-900">
                                    For life-threatening emergencies, please call <strong>112</strong> or
                                    visit the nearest hospital immediately.
                                </div>
                            </div>
                        </Subsection>

                    </Section>

                    {/* Section 3 */}
                    <Section id="appointments" number="3" title="Appointments & Booking">

                        {/* 3.1 Booking */}
                        <Subsection title="3.1 Appointment Booking">
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <ul className="space-y-3">
                                    {[
                                        "Appointments may be booked through our website, phone, or WhatsApp. Online bookings are requests — they are confirmed only after our team contacts you",
                                        "A booking confirmation from our team (via call, SMS, or WhatsApp) constitutes a confirmed appointment",
                                        "We reserve the right to decline or reschedule appointments based on doctor availability or clinical capacity",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </Subsection>

                        {/* 3.2 Cancellation */}
                        <Subsection title="3.2 Cancellation & Rescheduling Policy">

                            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">

                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">

                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="text-left p-4 font-semibold text-gray-700">
                                                    Notice Given
                                                </th>
                                                <th className="text-left p-4 font-semibold text-gray-700">
                                                    Policy
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {[
                                                ["24+ hours before appointment", "Free cancellation / reschedule — no charges"],
                                                ["Less than 24 hours notice", "Appointment slot may be forfeited; consultation fee may apply on next visit"],
                                                ["No-show (no notice given)", "Consultation fee applies; multiple no-shows may result in booking restrictions"],
                                                ["Emergency cancellation", "Assessed on a case-by-case basis with supporting documentation"],
                                            ].map(([notice, policy], i) => (
                                                <tr key={i} className="border-t border-gray-100">
                                                    <td className="p-4 font-medium text-gray-900">
                                                        {notice}
                                                    </td>
                                                    <td className="p-4 text-gray-600">
                                                        {policy}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>

                            </div>

                        </Subsection>

                        {/* 3.3 Late Arrival */}
                        <Subsection title="3.3 Late Arrival">

                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">

                                <p className="text-amber-900 text-sm leading-relaxed">
                                    If you arrive more than <strong>15 minutes late</strong> for your
                                    appointment, we may need to shorten your treatment time or reschedule
                                    your appointment to avoid inconveniencing other patients.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-amber-100/60 border border-amber-200 text-xs text-amber-900">
                                    Please notify us in advance if you are running late.
                                </div>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Section 4 */}
                    <Section id="fees" number="4" title="Fees, Payments & Refunds">

                        {/* 4.1 Consultation Fees */}
                        <Subsection title="4.1 Consultation Fees">
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <ul className="space-y-3">
                                    {[
                                        "Consultation fees are payable at the time of visit unless otherwise agreed",
                                        "Fees may vary by specialist, treatment complexity, and time required",
                                        "All applicable GST will be charged as per Indian tax law",
                                        "We will provide a written estimate before commencing any major treatment",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </Subsection>

                        {/* 4.2 Payment Methods */}
                        <Subsection title="4.2 Payment Methods">

                            <p className="mb-3 text-sm text-gray-600">
                                We accept the following payment methods:
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                                {[
                                    "Cash (INR)",
                                    "UPI (GPay, PhonePe, Paytm)",
                                    "Credit / Debit Cards",
                                    "Net Banking",
                                    "EMI Options",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="text-sm text-gray-700 bg-white border border-gray-100 rounded-xl px-4 py-3 text-center"
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </Subsection>

                        {/* 4.3 Insurance */}
                        <Subsection title="4.3 Insurance Claims">

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                                <p className="text-blue-900 text-sm leading-relaxed">
                                    We assist with insurance documentation for empanelled insurers.
                                    However, the patient is ultimately responsible for verifying coverage
                                    and ensuring claims are submitted correctly.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-blue-100/60 border border-blue-200 text-xs text-blue-900">
                                    We are not responsible for insurer decisions to approve or reject claims.
                                </div>

                            </div>

                        </Subsection>

                        {/* 4.4 Refund Policy */}
                        <Subsection title="4.4 Refund Policy">

                            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">

                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">

                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="text-left p-4 font-semibold text-gray-700">
                                                    Situation
                                                </th>
                                                <th className="text-left p-4 font-semibold text-gray-700">
                                                    Refund Policy
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {[
                                                ["Treatment not yet started", "Full refund within 7 business days"],
                                                ["Treatment partially completed", "Partial refund based on work completed"],
                                                ["Completed treatment dissatisfaction", "Corrective treatment offered; refunds at clinic discretion"],
                                                ["Payment error / duplicate charge", "Full refund within 5–7 business days"],
                                                ["Advance deposit cancellation", "Refundable per cancellation policy"],
                                            ].map(([situation, policy], i) => (
                                                <tr key={i} className="border-t border-gray-100">
                                                    <td className="p-4 font-medium text-gray-900 align-top">
                                                        {situation}
                                                    </td>
                                                    <td className="p-4 text-gray-600">
                                                        {policy}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>

                            </div>

                            {/* Note */}
                            <p className="mt-3 text-xs text-gray-500">
                                Refund requests must be submitted in writing to{" "}
                                <span className="text-brand-600">{CLINIC_EMAIL}</span>{" "}
                                within 30 days of the service date.
                            </p>

                        </Subsection>

                    </Section>

                    {/* Section 5 */}
                    <Section id="consent" number="5" title="Patient Consent">

                        {/* 5.1 Informed Consent */}
                        <Subsection title="5.1 Informed Consent">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Before any dental procedure, our dentists will explain the treatment,
                                    its benefits, risks, alternatives, and costs. Your verbal or written
                                    consent is required before treatment begins.
                                </p>

                                {/* Rights */}
                                <div className="mt-4 p-4 rounded-xl bg-white border border-gray-100">

                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                                        Your Rights
                                    </p>

                                    <ul className="space-y-3">
                                        {[
                                            "Ask questions and receive complete, honest answers",
                                            "Refuse any treatment or procedure",
                                            "Withdraw consent at any time before or during treatment",
                                            "Request a second opinion from another dentist",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                            </div>

                        </Subsection>

                        {/* 5.2 Minors */}
                        <Subsection title="5.2 Consent for Minors">

                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">

                                <p className="text-amber-900 text-sm leading-relaxed">
                                    For patients under <strong>18 years of age</strong>, a parent or legal
                                    guardian must be present and provide written consent before any treatment.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-amber-100/60 border border-amber-200 text-xs text-amber-900">
                                    The guardian must remain on clinic premises during the child’s treatment
                                    unless otherwise agreed.
                                </div>

                            </div>

                        </Subsection>

                        {/* 5.3 Photography */}
                        <Subsection title="5.3 Photography and Records">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    We may take intraoral photographs, X-rays, and clinical records as part
                                    of your treatment.
                                </p>

                                <div className="mt-3 p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-900">
                                    With your separate written consent, we may use anonymized or consented
                                    clinical photos for educational, training, or marketing purposes
                                    (such as before-and-after showcases).
                                </div>

                                <p className="mt-3 text-xs text-gray-500">
                                    You may withdraw this consent at any time.
                                </p>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Section 6 */}
                    <Section id="website-use" number="6" title="Website Use & Intellectual Property">

                        {/* 6.1 Permitted */}
                        <Subsection title="6.1 Permitted Use">

                            <p className="text-sm text-gray-600 mb-3">
                                You may use our website for the following purposes:
                            </p>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <ul className="space-y-3">
                                    {[
                                        "Learning about our dental services and team",
                                        "Booking appointment requests",
                                        "Reading our dental health blog and educational content",
                                        "Contacting us for legitimate inquiries",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </Subsection>

                        {/* 6.2 Prohibited */}
                        <Subsection title="6.2 Prohibited Uses">

                            <p className="text-sm text-gray-600 mb-3">
                                You must not:
                            </p>

                            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">

                                <ul className="space-y-3">
                                    {[
                                        "Use our website for any unlawful, fraudulent, or harmful purpose",
                                        "Copy, reproduce, or redistribute our website content without written permission",
                                        "Attempt to gain unauthorized access to any part of our website or systems",
                                        "Submit false or misleading information through our forms",
                                        "Use automated tools (bots, scrapers) to access or harvest our content",
                                        "Post or transmit any malicious code, spam, or harmful material",
                                        `Impersonate ${CLINIC_NAME} or any of our staff members`,
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-red-700">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </Subsection>

                        {/* 6.3 Intellectual Property */}
                        <Subsection title="6.3 Intellectual Property">

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                                <p className="text-blue-900 text-sm leading-relaxed">
                                    All content on this website — including text, images, logos, videos,
                                    blog articles, service descriptions, and design elements — is the
                                    exclusive property of{" "}
                                    <strong>{CLINIC_NAME}</strong> or its licensed content providers.
                                </p>

                                <div className="mt-3 text-sm text-blue-900 leading-relaxed">
                                    This content is protected under applicable Indian and international
                                    copyright and trademark laws.
                                </div>

                                <div className="mt-3 p-3 rounded-xl bg-blue-100/60 border border-blue-200 text-xs text-blue-900">
                                    You may not copy, reproduce, distribute, or create derivative works
                                    without prior written consent.
                                </div>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Section 7 */}
                    <Section id="disclaimers" number="7" title="Disclaimers & Limitation of Liability">

                        {/* 7.1 Website Accuracy */}
                        <Subsection title="7.1 Website Accuracy">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    While we strive to keep our website content accurate and up-to-date,
                                    we do not guarantee that information regarding pricing, doctor
                                    availability, services, or treatment outcomes is always complete,
                                    current, or error-free.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-gray-100 border border-gray-200 text-xs text-gray-700">
                                    Please contact us directly to confirm important details before making
                                    decisions based on website content.
                                </div>

                            </div>

                        </Subsection>

                        {/* 7.2 Treatment Outcomes */}
                        <Subsection title="7.2 Treatment Outcomes">

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Dental treatment results may vary from patient to patient based on
                                    individual factors such as oral health condition, medical history,
                                    and compliance with post-treatment care.
                                </p>

                                <div className="mt-3 p-3 rounded-xl bg-blue-100/60 border border-blue-200 text-xs text-blue-900">
                                    We do not guarantee specific clinical outcomes.
                                </div>

                            </div>

                        </Subsection>

                        {/* 7.3 Liability */}
                        <Subsection title="7.3 Limitation of Liability">

                            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">

                                <p className="text-sm text-red-800 font-medium mb-2">
                                    To the maximum extent permitted by applicable Indian law:
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        "Indirect, incidental, or consequential damages arising from website use",
                                        "Technical errors, downtime, or data loss",
                                        "Actions taken based on website content without professional consultation",
                                        "Third-party website content accessed via external links",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-red-700">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 text-sm text-red-800 leading-relaxed">
                                    Our total liability for any claim shall not exceed the amount paid
                                    by you for the specific service related to that claim.
                                </div>

                                <div className="mt-3 p-3 rounded-xl bg-red-100/60 border border-red-200 text-xs text-red-900">
                                    Nothing in these Terms limits liability for personal injury caused
                                    by negligence, fraud, or any liability that cannot be excluded by law.
                                </div>

                            </div>

                        </Subsection>

                        {/* 7.4 External Links */}
                        <Subsection title="7.4 External Links">

                            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">

                                <p className="text-sm text-yellow-900 leading-relaxed">
                                    Our website may contain links to third-party websites such as insurance
                                    providers, government health portals, or dental associations.
                                </p>

                                <div className="mt-3 text-sm text-yellow-900">
                                    These links are provided for convenience only.
                                </div>

                                <div className="mt-3 p-3 rounded-xl bg-yellow-100/60 border border-yellow-200 text-xs text-yellow-900">
                                    We do not control or take responsibility for the content or privacy
                                    practices of third-party websites.
                                </div>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Section 8 */}
                    <Section id="reviews" number="8" title="Reviews, Testimonials & User Content">

                        {/* Trust */}
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">

                            <p className="text-sm text-green-900 leading-relaxed">
                                Patient testimonials and reviews published on our website are genuine
                                and shared only with proper patient consent.
                            </p>

                            <div className="mt-3 p-3 rounded-xl bg-green-100/60 border border-green-200 text-xs text-green-900">
                                We are committed to maintaining authenticity and transparency in all
                                patient feedback displayed on our platform.
                            </div>

                        </div>

                        {/* User Content Rights */}
                        <Subsection title="8.1 Use of Your Content">

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                                <p className="text-sm text-blue-900 leading-relaxed">
                                    If you submit a review, testimonial, or feedback to us, you grant
                                    <strong> {CLINIC_NAME} </strong> a non-exclusive, royalty-free right to:
                                </p>

                                <ul className="mt-3 space-y-2">
                                    {[
                                        "Use and display your feedback on our website or marketing materials",
                                        "Reproduce and publish content for service-related communication",
                                        "Showcase anonymized testimonials for educational or promotional purposes",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-blue-900">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </Subsection>

                        {/* Restrictions */}
                        <Subsection title="8.2 Content Guidelines">

                            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">

                                <p className="text-sm text-red-800 font-medium mb-2">
                                    You must not submit content that:
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        "Is false, misleading, or inaccurate",
                                        "Is defamatory or harms the reputation of the clinic or staff",
                                        "Contains abusive, offensive, or inappropriate language",
                                        "Violates any applicable law or regulation",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-red-700">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 p-3 rounded-xl bg-red-100/60 border border-red-200 text-xs text-red-900">
                                    We reserve the right to remove any content that violates these
                                    guidelines or these Terms.
                                </div>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Section 9 */}
                    <Section id="governing-law" number="9" title="Governing Law & Dispute Resolution">

                        {/* 9.1 Governing Law */}
                        <Subsection title="9.1 Governing Law">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    These Terms shall be governed by and interpreted in accordance with
                                    the laws of India, including:
                                </p>

                                <ul className="mt-3 space-y-2">
                                    {[
                                        "Indian Contract Act, 1872",
                                        "Consumer Protection Act, 2019",
                                        "Information Technology Act, 2000",
                                        "Applicable healthcare and dental regulations",
                                    ].map((law, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                                            <span>{law}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </Subsection>

                        {/* 9.2 Dispute Resolution */}
                        <Subsection title="9.2 Dispute Resolution">

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                                <p className="text-sm text-blue-900 leading-relaxed">
                                    In case of any dispute arising from these Terms or our services:
                                </p>

                                <ul className="mt-3 space-y-3">
                                    {[
                                        "Parties will first attempt resolution through good-faith negotiation",
                                        "If unresolved within 30 days, the matter will proceed to mediation",
                                        "If still unresolved, disputes will be subject to court jurisdiction",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-blue-900">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 p-3 rounded-xl bg-blue-100/60 border border-blue-200 text-xs text-blue-900">
                                    Jurisdiction: <strong>Noida, Uttar Pradesh, India</strong>
                                </div>

                            </div>

                        </Subsection>

                        {/* 9.3 Consumer Rights */}
                        <Subsection title="9.3 Consumer Rights">

                            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">

                                <p className="text-sm text-green-900 leading-relaxed">
                                    Nothing in these Terms limits or affects your statutory rights as a
                                    consumer or patient.
                                </p>

                                <ul className="mt-3 space-y-2">
                                    {[
                                        "Rights under the Consumer Protection Act, 2019",
                                        "Rights under applicable Indian medical and dental regulations",
                                        "Guidelines issued by the Dental Council of India",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-green-900">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Section 10 */}
                    <Section id="severability" number="10" title="General Provisions">

                        {/* 10.1 Severability */}
                        <Subsection title="10.1 Severability">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    If any provision of these Terms is found to be invalid, illegal, or
                                    unenforceable by a court of competent jurisdiction, the remaining
                                    provisions shall continue in full force and effect.
                                </p>
                            </div>

                        </Subsection>

                        {/* 10.2 Entire Agreement */}
                        <Subsection title="10.2 Entire Agreement">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    These Terms, together with our Privacy Policy, constitute the entire
                                    agreement between you and <strong>{CLINIC_NAME}</strong> regarding
                                    your use of our website and services, and supersede all prior
                                    agreements or understandings.
                                </p>
                            </div>

                        </Subsection>

                        {/* 10.3 Waiver */}
                        <Subsection title="10.3 Waiver">

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Our failure to enforce any right or provision of these Terms shall
                                    not be considered a waiver of those rights.
                                </p>
                            </div>

                        </Subsection>

                        {/* 10.4 Contact */}
                        <Subsection title="10.4 Contact Information">

                            <div className="mt-2">

                                {/* Glow Background */}
                                <div className="relative">

                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-100/40 to-blue-50/40 blur-2xl rounded-3xl -z-10" />

                                    <div className="relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">

                                        {/* Label */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="w-3 h-3 bg-brand-600 rounded-full animate-pulse" />
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600">
                                                Need Help?
                                            </span>
                                        </div>

                                        {/* Heading */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Questions About These Terms?
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-5 max-w-md">
                                            If you have any questions, concerns, or need clarification regarding
                                            these Terms, feel free to contact us.
                                        </p>

                                        {/* Info */}
                                        <div className="space-y-2 text-sm text-gray-700">

                                            <p className="font-semibold text-gray-900">
                                                {CLINIC_NAME}
                                            </p>

                                            <p>{CLINIC_ADDRESS}</p>

                                            <a
                                                href={`mailto:${CLINIC_EMAIL}`}
                                                className="text-brand-600 hover:underline block"
                                            >
                                                {CLINIC_EMAIL}
                                            </a>

                                            <p>{CLINIC_PHONE}</p>

                                            <p className="text-gray-500 text-xs break-all">
                                                {WEBSITE_URL}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </Subsection>

                    </Section>

                    {/* Acknowledgment */}

                    <div className="relative mt-16">

                        {/* Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-100/40 to-blue-50/40 blur-2xl rounded-3xl -z-10" />

                        <div className="relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm text-center">

                            {/* Label */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="w-3 h-3 bg-brand-600 rounded-full animate-pulse" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600">
                                    Legal Confirmation
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                Acknowledgment
                            </h2>

                            {/* Content */}
                            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto mb-6">
                                By using our website or services, you acknowledge that you have read,
                                understood, and agreed to these Terms and Conditions in their entirety.
                                If you are accepting these Terms on behalf of a minor patient, you confirm
                                that you have the legal authority to do so.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-3">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-900 text-white text-sm font-semibold hover:bg-brand-800 transition shadow-sm"
                                >
                                    <Calendar size={16} />
                                    Book Appointment
                                </Link>

                                <Link
                                    href="/privacy"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                                >
                                    <ShieldCheck size={16} />
                                    Privacy Policy
                                </Link>

                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

// ─── Helper Components ────────────────────────────────────────────

function Section({ id, number, title, children }) {
    return (
        <section
            id={id}
            className="scroll-mt-28 relative"
        >

            {/* Divider line */}
            <div className="absolute left-4 top-10 bottom-0 w-px bg-gray-100 hidden sm:block" />

            <div className="flex items-start gap-4">

                {/* Number Badge */}
                <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                        {number}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
                        {title}
                    </h2>

                    {/* Content Box */}
                    <div className="mt-4 pl-0 sm:pl-2 text-gray-600 text-sm md:text-[15px] leading-relaxed space-y-5">
                        {children}
                    </div>

                </div>
            </div>

        </section>
    )
}

function Subsection({ title, children }) {
    return (
        <div className="relative group">

            {/* Subtle hover line */}
            <div className="absolute left-0 top-2 w-1 h-5 bg-brand-600 rounded-full opacity-0 group-hover:opacity-100 transition hidden sm:block" />

            <div className="pl-0 sm:pl-4">

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                    {title}
                </h3>

                {/* Content */}
                <div className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                    {children}
                </div>

            </div>

        </div>
    )
}