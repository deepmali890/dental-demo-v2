// app/privacy/page.js


import { Calendar, CircleCheckBig, Link, Mail } from "lucide-react"

export const metadata = {
    title: "Privacy Policy | SmileCare Dental Clinic",
    description:
        "Read our Privacy Policy to understand how SmileCare Dental Clinic collects, uses, and protects your personal and medical information.",
    robots: { index: true, follow: true },
}



const LAST_UPDATED = "January 1, 2025"
const CLINIC_NAME = "SmileCare Dental Clinic"
const CLINIC_EMAIL = "info@dentalpreview.online"
const CLINIC_PHONE = "+91-98765-43210"
const CLINIC_ADDRESS = "42, Sector 18, Near Noida City Centre, Noida, Uttar Pradesh — 201301"
const WEBSITE_URL = "https://www.dentalpreview.online"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white py-16 md:py-20">

                {/* Subtle Glow */}
                <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full" />

                <div className="relative container mx-auto px-4 max-w-4xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-200">
                            Legal Information
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        Privacy Policy
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                        Learn how we collect, use, and protect your personal and medical information
                        when you interact with our services.
                    </p>

                    {/* Last Updated */}
                    <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                        <span className="w-3 h-3 bg-green-400 rounded-full animate-ping" >

                        </span>
                        <span>Last updated: {LAST_UPDATED}</span>
                    </div>

                </div>
            </div>





            {/* Content */}
            <div className="container mx-auto px-4 max-w-4xl py-12">
                <div className="relative mb-12">

                    {/* Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-100/40 to-blue-50/40 blur-2xl rounded-3xl -z-10" />

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
                                {CLINIC_NAME}
                            </span>{" "}
                            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your personal and
                            medical information when you visit our website{" "}

                            <span className="font-medium text-brand-600 break-all">
                                {WEBSITE_URL}
                            </span>,

                            use our services, or interact with us.

                            <br /><br />

                            By continuing to use our services, you agree to the practices described in
                            this Privacy Policy. We encourage you to review this carefully to understand
                            how your information is handled.

                        </p>

                    </div>

                </div>

                <div className="space-y-10">
                    {/* Section 1 */}
                    <Section id="information-we-collect" number="1" title="Information We Collect">

                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                            We collect different types of information to provide and improve our dental
                            services. This includes:
                        </p>

                        {/* GRID */}
                        <div className="grid md:grid-cols-2 gap-5 mt-6">

                            {/* Card 1 */}
                            <Subsection title="1.1 Personal Information">
                                <ul className="space-y-2">
                                    {[
                                        "Full name, age, gender, and date of birth",
                                        "Phone number, email address, and postal address",
                                        "Government-issued ID (Aadhaar, PAN) when required",
                                        "Emergency contact details",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-600">
                                            <span className="mt-1 w-1.5 h-1.5 bg-brand-600 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Subsection>

                            {/* Card 2 */}
                            <Subsection title="1.2 Medical Information">
                                <ul className="space-y-2">
                                    {[
                                        "Dental & medical history, allergies, conditions",
                                        "Treatment records, X-rays, CBCT scans",
                                        "Medications currently being taken",
                                        "Insurance & pre-authorization details",
                                        "Payment and billing history",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-600">
                                            <span className="mt-1 w-1.5 h-1.5 bg-brand-600 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Highlight Note */}
                                <div className="mt-4 flex gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                                    <span className="text-yellow-600 text-lg">⚠️</span>
                                    <p className="text-xs text-yellow-800 leading-relaxed">
                                        Medical data is treated as <strong>sensitive personal information</strong>{" "}
                                        and handled with strict confidentiality under Indian law.
                                    </p>
                                </div>
                            </Subsection>

                            {/* Card 3 */}
                            <Subsection title="1.3 Website Usage">
                                <ul className="space-y-2">
                                    {[
                                        "IP address, browser type, device info",
                                        "Pages visited and session behavior",
                                        "Cookies and tracking technologies",
                                        "Appointment form submissions",
                                        "Messages via contact or WhatsApp",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-600">
                                            <span className="mt-1 w-1.5 h-1.5 bg-brand-600 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Subsection>

                            {/* Card 4 */}
                            <Subsection title="1.4 Communications">
                                <ul className="space-y-2">
                                    {[
                                        "Emails, WhatsApp chats, and calls",
                                        "Feedback and reviews",
                                        "Survey responses and communication data",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-600">
                                            <span className="mt-1 w-1.5 h-1.5 bg-brand-600 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Subsection>

                        </div>

                    </Section>

                    {/* Section 2 */}
                    <Section id="how-we-use" number="2" title="How We Use Your Information">

                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                            We use the information we collect to deliver quality care, manage operations,
                            and improve your overall experience.
                        </p>

                        <div className="mt-8 space-y-6">

                            {/* ITEM */}
                            {[
                                {
                                    title: "Providing Dental Care",
                                    icon: "🦷",
                                    points: [
                                        "Scheduling and managing appointments",
                                        "Diagnosing and treating dental conditions",
                                        "Maintaining accurate medical records",
                                        "Sharing treatment plans and follow-up care",
                                    ],
                                },
                                {
                                    title: "Administrative & Business Operations",
                                    icon: "📊",
                                    points: [
                                        "Processing payments and billing",
                                        "Coordinating with insurance providers",
                                        "Sending reminders via SMS, WhatsApp, or email",
                                        "Handling support and inquiries",
                                        "Maintaining records as per Indian law",
                                    ],
                                },
                                {
                                    title: "Improving Our Services",
                                    icon: "📈",
                                    points: [
                                        "Analyzing website usage",
                                        "Understanding patient preferences",
                                        "Training staff and improving care quality",
                                        "Internal audits and performance improvements",
                                    ],
                                },
                                {
                                    title: "Marketing & Communication (With Consent)",
                                    icon: "📢",
                                    points: [
                                        "Sending newsletters and health tips",
                                        "Sharing updates about services and doctors",
                                        "Requesting feedback and reviews",
                                    ],
                                    note:
                                        "You can opt out anytime via unsubscribe link or by contacting us.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition"
                                >

                                    {/* LEFT TIMELINE DOT */}
                                    <div className="absolute left-[-10px] top-8 hidden md:flex">
                                        <div className="w-3 h-3 bg-brand-600 rounded-full" />
                                    </div>

                                    <div className="flex items-start gap-4">

                                        {/* ICON */}
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-lg">
                                            {item.icon}
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex-1">

                                            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                                                {`2.${i + 1} ${item.title}`}
                                            </h3>

                                            <ul className="space-y-2">
                                                {item.points.map((point, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex gap-2 text-sm text-gray-600"
                                                    >
                                                        <span className="mt-1 w-1.5 h-1.5 bg-brand-600 rounded-full" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* NOTE */}
                                            {item.note && (
                                                <div className="mt-4 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg p-3">
                                                    {item.note}
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </Section>

                    {/* Section 3 */}
                    <Section id="sharing" number="3" title="How We Share Your Information">

                        {/* Highlight */}
                        <div className="flex items-start gap-3 p-5 rounded-2xl bg-green-50 border border-green-100 mb-6">
                            <span className="text-green-600 text-lg">🔒</span>
                            <p className="text-sm text-green-800 leading-relaxed">
                                We <strong>do not sell, rent, or trade</strong> your personal or medical
                                information to any third party. Your data is handled with strict
                                confidentiality.
                            </p>
                        </div>

                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We may share your information only in the following limited and necessary situations:
                        </p>

                        {/* GRID */}
                        <div className="grid md:grid-cols-2 gap-5">

                            {[
                                {
                                    title: "Referred Specialists",
                                    icon: "👨‍⚕️",
                                    desc: "We share relevant clinical information when referring you to another specialist for treatment.",
                                },
                                {
                                    title: "Insurance Providers",
                                    icon: "💳",
                                    desc: "Used for processing insurance claims and pre-authorizations on your behalf.",
                                },
                                {
                                    title: "Laboratory Services",
                                    icon: "🧪",
                                    desc: "Dental labs receive necessary data for prosthetics, aligners, and other treatments.",
                                },
                                {
                                    title: "Technology Providers",
                                    icon: "💻",
                                    desc: "Trusted services like email, hosting, and appointment systems process data under strict agreements.",
                                },
                                {
                                    title: "Legal Requirements",
                                    icon: "⚖️",
                                    desc: "Data may be shared when required by law, court orders, or government authorities.",
                                },
                                {
                                    title: "Emergency Situations",
                                    icon: "🚨",
                                    desc: "Shared only to protect your vital interests or others in medical emergencies.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group bg-white border border-gray-100 rounded-2xl p-5 transition hover:shadow-md hover:border-gray-200"
                                >

                                    <div className="flex items-start gap-3">

                                        {/* ICON */}
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-lg">
                                            {item.icon}
                                        </div>

                                        {/* CONTENT */}
                                        <div>
                                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                                {item.title}
                                            </h3>

                                            <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </Section>

                    {/* Section 4 */}
                    <Section id="data-security" number="4" title="Data Security">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We implement industry-standard technical and organizational measures to
                            protect your personal and medical information from unauthorized access,
                            misuse, or loss.
                        </p>

                        {/* Security Grid */}
                        <div className="grid sm:grid-cols-2 gap-5">

                            {[
                                {
                                    title: "Secure Storage",
                                    icon: "🗄️",
                                    desc: "All patient records are stored in secure, access-controlled systems.",
                                },
                                {
                                    title: "Encrypted Data",
                                    icon: "🔐",
                                    desc: "We use HTTPS (SSL/TLS) encryption for all data transmissions.",
                                },
                                {
                                    title: "Restricted Access",
                                    icon: "👥",
                                    desc: "Only authorized clinic staff can access patient data.",
                                },
                                {
                                    title: "Physical Protection",
                                    icon: "🏢",
                                    desc: "Physical records are stored in locked, secure facilities.",
                                },
                                {
                                    title: "Regular Audits",
                                    icon: "🔍",
                                    desc: "We regularly review and update our security practices.",
                                },
                                {
                                    title: "Staff Training",
                                    icon: "🎓",
                                    desc: "Our team is trained in confidentiality and data protection.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group bg-white border border-gray-100 rounded-2xl p-5 transition hover:shadow-md hover:border-gray-200"
                                >

                                    <div className="flex items-start gap-3">

                                        {/* Icon */}
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-lg">
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* Bottom Notice */}
                        <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                While we take every reasonable precaution, no method of transmission over
                                the internet or electronic storage is 100% secure. In the unlikely event
                                of a data breach, we will notify affected individuals as required by
                                applicable law.
                            </p>
                        </div>

                    </Section>

                    {/* Section 5 */}
                    <Section id="retention" number="5" title="Data Retention">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We retain your personal and medical information only for as long as necessary
                            to provide care and comply with legal obligations.
                        </p>

                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100">
                            <table className="w-full text-sm">

                                <thead>
                                    <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wide">
                                        <th className="text-left p-4 font-semibold">Data Type</th>
                                        <th className="text-left p-4 font-semibold">Retention Period</th>
                                        <th className="text-left p-4 font-semibold">Reason</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[
                                        ["Medical / Clinical Records", "Minimum 7 years (adults), until age 25 for minors", "Medical regulations"],
                                        ["X-Rays & Scans", "5–10 years", "Diagnostic reference"],
                                        ["Billing Records", "7 years", "GST & tax compliance"],
                                        ["Appointment History", "3 years", "Service continuity"],
                                        ["Website Logs", "12 months", "Security & analytics"],
                                        ["Marketing Preferences", "Until unsubscribed", "User consent"],
                                    ].map(([type, period, reason], i) => (
                                        <tr
                                            key={i}
                                            className="border-t border-gray-100 hover:bg-gray-50 transition"
                                        >
                                            <td className="p-4 font-medium text-gray-900">{type}</td>
                                            <td className="p-4 text-gray-600">{period}</td>
                                            <td className="p-4 text-gray-500">{reason}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-4">

                            {[
                                ["Medical / Clinical Records", "Minimum 7 years (adults), until age 25 for minors", "Medical regulations"],
                                ["X-Rays & Scans", "5–10 years", "Diagnostic reference"],
                                ["Billing Records", "7 years", "GST & tax compliance"],
                                ["Appointment History", "3 years", "Service continuity"],
                                ["Website Logs", "12 months", "Security & analytics"],
                                ["Marketing Preferences", "Until unsubscribed", "User consent"],
                            ].map(([type, period, reason], i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
                                >

                                    <p className="text-sm font-semibold text-gray-900 mb-2">
                                        {type}
                                    </p>

                                    <div className="text-xs text-gray-500 space-y-1">
                                        <p><span className="font-medium text-gray-700">Retention:</span> {period}</p>
                                        <p><span className="font-medium text-gray-700">Reason:</span> {reason}</p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </Section>

                    {/* Section 6 */}
                    <Section id="your-rights" number="6" title="Your Rights">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            As a patient and user of our services, you have the following rights regarding your personal information:
                        </p>

                        {/* Cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            {[
                                {
                                    icon: "👁️",
                                    title: "Access Your Data",
                                    desc: "Request a copy of the personal data we hold about you.",
                                },
                                {
                                    icon: "✏️",
                                    title: "Correct Information",
                                    desc: "Fix inaccurate or incomplete personal details.",
                                },
                                {
                                    icon: "🗑️",
                                    title: "Request Deletion",
                                    desc: "Ask us to delete your data (subject to legal requirements).",
                                },
                                {
                                    icon: "🚫",
                                    title: "Opt-Out",
                                    desc: "Withdraw consent for marketing communications anytime.",
                                },
                                {
                                    icon: "📦",
                                    title: "Data Portability",
                                    desc: "Receive your data in a structured, machine-readable format.",
                                },
                                {
                                    icon: "⛔",
                                    title: "Object to Processing",
                                    desc: "Object to how your data is being used in certain cases.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-gray-100 rounded-2xl p-5 transition hover:shadow-md hover:border-gray-200"
                                >

                                    {/* Icon */}
                                    <button className="w-10 h-10 flex justify-center items-center mx-auto rounded-xl bg-brand-50 text-lg mb-4">
                                        {item.icon}
                                    </button>

                                    {/* Title */}
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                        {item.title}
                                    </h3>

                                    {/* Desc */}
                                    <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-600 transition-all group-hover:w-full" />

                                </div>
                            ))}

                        </div>

                        {/* CTA Box */}
                        <div className="mt-10 p-6 rounded-2xl bg-brand-50 border border-brand-100 text-center">

                            <p className="text-sm text-gray-700 mb-3">
                                To exercise any of these rights, contact us at:
                            </p>

                            <a
                                href={`mailto:${CLINIC_EMAIL}`}
                                className="text-brand-600 font-semibold hover:underline break-all"
                            >
                                {CLINIC_EMAIL}
                            </a>

                            <p className="text-xs text-gray-500 mt-3">
                                We will respond within <strong>30 days</strong>. Some requests may be limited
                                due to legal obligations (e.g., medical record retention).
                            </p>

                        </div>

                    </Section>

                    {/* Section 7 */}
                    <Section id="cookies" number="7" title="Cookies and Tracking Technologies">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We use cookies and similar technologies to improve your experience and ensure
                            smooth website functionality.
                        </p>

                        {/* Usage Cards */}
                        <div className="grid sm:grid-cols-2 gap-5 mb-8">

                            {[
                                { icon: "⚙️", text: "Remember your preferences and settings" },
                                { icon: "📊", text: "Analyze traffic using Google Analytics" },
                                { icon: "🔐", text: "Enable essential website functionality" },
                                { icon: "🎯", text: "Deliver relevant content and reminders" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-lg">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm text-gray-600">{item.text}</p>
                                </div>
                            ))}

                        </div>

                        {/* Cookie Types */}
                        <Subsection title="Types of Cookies We Use">

                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100">
                                <table className="w-full text-sm">

                                    <thead>
                                        <tr className="bg-gray-50 text-xs uppercase tracking-wide text-gray-700">
                                            <th className="text-left p-4 font-semibold">Type</th>
                                            <th className="text-left p-4 font-semibold">Purpose</th>
                                            <th className="text-left p-4 font-semibold">Control</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {[
                                            ["Essential", "Website functionality & security", false],
                                            ["Analytics", "Google Analytics — visitor insights", true],
                                            ["Preference", "Language and saved settings", true],
                                            ["Marketing", "Remarketing and promotions", true],
                                        ].map(([type, purpose, canOpt], i) => (
                                            <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                                                <td className="p-4 font-medium text-gray-900">{type}</td>
                                                <td className="p-4 text-gray-600">{purpose}</td>
                                                <td className="p-4">
                                                    <span
                                                        className={`text-xs font-medium px-2 py-1 rounded-full ${canOpt
                                                            ? "bg-green-50 text-green-700"
                                                            : "bg-gray-100 text-gray-500"
                                                            }`}
                                                    >
                                                        {canOpt ? "Optional" : "Required"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-4 mt-4">

                                {[
                                    ["Essential", "Website functionality & security", false],
                                    ["Analytics", "Google Analytics — visitor insights", true],
                                    ["Preference", "Language and saved settings", true],
                                    ["Marketing", "Remarketing and promotions", true],
                                ].map(([type, purpose, canOpt], i) => (
                                    <div
                                        key={i}
                                        className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
                                    >

                                        <p className="text-sm font-semibold text-gray-900 mb-1">{type}</p>

                                        <p className="text-xs text-gray-500 mb-2">{purpose}</p>

                                        <span
                                            className={`text-[11px] font-medium px-2 py-1 rounded-full ${canOpt
                                                ? "bg-green-50 text-green-700"
                                                : "bg-gray-100 text-gray-500"
                                                }`}
                                        >
                                            {canOpt ? "Optional" : "Required"}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </Subsection>

                        {/* Bottom Note */}
                        <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                You can control or disable cookies through your browser settings. Please note
                                that disabling essential cookies may affect certain features of the website.
                            </p>
                        </div>

                    </Section>

                    {/* Section 8 */}
                    <Section id="third-party" number="8" title="Third-Party Services">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We use trusted third-party services to enhance functionality, communication,
                            and performance. Each provider has its own privacy policy.
                        </p>

                        {/* Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            {[
                                {
                                    name: "Google Analytics",
                                    icon: "📊",
                                    purpose: "Website traffic analysis",
                                    link: "https://policies.google.com/privacy",
                                },
                                {
                                    name: "Google Maps",
                                    icon: "📍",
                                    purpose: "Clinic location display",
                                    link: "https://policies.google.com/privacy",
                                },
                                {
                                    name: "Resend",
                                    icon: "✉️",
                                    purpose: "Email delivery service",
                                    link: "https://resend.com/privacy",
                                },
                                {
                                    name: "Razorpay",
                                    icon: "💳",
                                    purpose: "Payment processing",
                                    link: "https://razorpay.com/privacy/",
                                },
                                {
                                    name: "WhatsApp Business",
                                    icon: "💬",
                                    purpose: "Patient communication",
                                    link: "https://www.whatsapp.com/legal/privacy-policy",
                                },
                                {
                                    name: "Vercel",
                                    icon: "⚡",
                                    purpose: "Website hosting",
                                    link: "https://vercel.com/legal/privacy-policy",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-gray-100 rounded-2xl p-5 transition hover:shadow-md hover:border-gray-200"
                                >

                                    {/* Icon */}
                                    <button className="w-10 h-10 flex items-center mx-auto justify-center rounded-xl bg-brand-50 text-lg mb-4">
                                        {item.icon}
                                    </button>

                                    {/* Name */}
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                        {item.name}
                                    </h3>

                                    {/* Purpose */}
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                                        {item.purpose}
                                    </p>

                                    {/* Link */}
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 mt-4 hover:gap-2 transition"
                                    >
                                        View Policy →
                                    </a>

                                    {/* Hover underline */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-600 transition-all group-hover:w-full" />

                                </div>
                            ))}

                        </div>

                    </Section>

                    {/* Section 9 */}
                    <Section id="children" number="9" title="Children's Privacy">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We provide dental services to patients of all ages, including children.
                            Additional care and safeguards are applied for patients under 18 years of age.
                        </p>

                        {/* Highlight Box */}
                        <div className="flex items-start gap-3 p-5 rounded-2xl bg-yellow-50 border border-yellow-200 mb-6">
                            <span className="text-yellow-600 text-lg">🛡️</span>
                            <p className="text-sm text-yellow-800 leading-relaxed">
                                Children’s data is treated with extra protection and is handled only with
                                proper parental or guardian consent.
                            </p>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-4">

                            {[
                                "A parent or legal guardian must provide consent before treatment or data collection",
                                "Medical records of minors are accessible only to authorized guardians and treating doctors",
                                "We do not knowingly collect personal data from children without verified parental consent",
                                "If any data is collected unintentionally, it will be removed upon request",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
                                >
                                    {/* Icon */}
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-50 text-brand-600 text-sm font-bold">
                                        <CircleCheckBig />
                                    </div>

                                    {/* Text */}
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>

                        {/* Bottom Note */}
                        <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                If you believe that a child has provided personal information without proper
                                consent, please contact us immediately so we can take appropriate action.
                            </p>
                        </div>

                    </Section>

                    {/* Section 10 */}
                    <Section id="changes" number="10" title="Changes to This Privacy Policy">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            We may update this Privacy Policy to reflect changes in our practices,
                            technology, or legal requirements.
                        </p>

                        {/* Timeline Steps */}
                        <div className="space-y-5">

                            {[
                                {
                                    title: "Policy Updates",
                                    desc: "We revise this policy whenever necessary to stay compliant and transparent.",
                                },
                                {
                                    title: "Last Updated Date",
                                    desc: "The latest update date will always be shown at the top of this page.",
                                },
                                {
                                    title: "User Notification",
                                    desc: "For major changes, we notify you via email or website notice.",
                                },
                                {
                                    title: "Your Acceptance",
                                    desc: "Continued use of our services means you accept the updated policy.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">

                                    {/* Timeline Indicator */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
                                            {i + 1}
                                        </div>

                                        {/* Line */}
                                        {i !== 3 && (
                                            <div className="w-[2px] h-full bg-gray-200 mt-1" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex-1">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {item.title}
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* Bottom Notice */}
                        <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                            <p className="text-sm text-blue-900 leading-relaxed">
                                We encourage you to review this page periodically to stay informed about how
                                we protect your information.
                            </p>
                        </div>

                    </Section>

                    {/* Section 11 */}
                    <Section id="grievance" number="11" title="Grievance Officer (India)">

                        {/* Intro */}
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                            As per the Information Technology Act, 2000 and applicable rules, the details
                            of our designated Grievance Officer are provided below.
                        </p>

                        {/* Card */}
                        <div className="relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">

                            {/* Top Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 mb-5">
                                <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-pulse" />
                                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-600">
                                    Official Contact
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start gap-6">

                                {/* Avatar */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-100 text-brand-700 text-lg font-bold">
                                    RK
                                </div>

                                {/* Info */}
                                <div className="flex-1">

                                    {/* Name */}
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Dr. Rajesh Kumar Sharma
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Grievance Officer • {CLINIC_NAME}
                                    </p>

                                    {/* Contact Grid */}
                                    <div className="grid sm:grid-cols-2 gap-4 mt-5 text-sm">

                                        <div>
                                            <p className="text-gray-400 text-xs uppercase mb-1">Address</p>
                                            <p className="text-gray-700">{CLINIC_ADDRESS}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-400 text-xs uppercase mb-1">Contact</p>
                                            <a
                                                href={`mailto:${CLINIC_EMAIL}`}
                                                className="block text-brand-600 hover:underline"
                                            >
                                                {CLINIC_EMAIL}
                                            </a>
                                            <p className="text-gray-700">{CLINIC_PHONE}</p>
                                        </div>

                                    </div>

                                    {/* Response Notice */}
                                    <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                            All grievances will be acknowledged and addressed within{" "}
                                            <strong>30 days</strong> of receipt, in accordance with applicable laws.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </Section>

                    {/* Contact */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 text-white p-8 md:p-10 text-center">

                        {/* Glow Background */}
                        <div className="absolute top-[-30%] right-[-10%] w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-30%] left-[-10%] w-[250px] h-[250px] bg-cyan-300/20 blur-[100px] rounded-full" />

                        <div className="relative">

                            {/* Label */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                                    Need Help?
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                                Questions About Your Privacy?
                            </h2>

                            {/* Description */}
                            <p className="text-white/80 text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                                If you have any questions, concerns, or requests regarding this Privacy Policy
                                or your personal data, our team is here to help you.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4">

                                {/* Email */}
                                <a
                                    href={`mailto:${CLINIC_EMAIL}`}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition shadow-sm"
                                >
                                    <Mail size={16} />
                                    Email Us
                                </a>

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
        <section id={id} className="scroll-mt-28">

            <div className="flex items-start gap-4 mb-6">

                {/* Number Badge */}
                <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-brand-600 text-white text-sm font-semibold shadow-sm">
                        {number}
                    </div>

                    {/* subtle glow */}
                    <div className="absolute inset-0 rounded-xl bg-brand-600/20 blur-md -z-10" />
                </div>

                {/* Title */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                        {title}
                    </h2>

                    {/* divider */}
                    <div className="mt-2 h-[2px] w-10 bg-brand-600/40 rounded-full" />
                </div>

            </div>

            {/* Content */}
            <div className="ml-0 md:ml-12 text-gray-600 text-sm md:text-[15px] leading-relaxed space-y-5">
                {children}
            </div>

        </section>
    )
}

function Subsection({ title, children }) {
    return (
        <div className="relative mt-6">

            {/* Left border accent */}
            <div className="absolute left-0 top-1 w-[3px] h-full bg-brand-600/60 rounded-full" />

            <div className="pl-5">

                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                    {title}
                </h3>

                <div className="text-gray-600 text-sm md:text-[15px] leading-relaxed space-y-3">
                    {children}
                </div>

            </div>

        </div>
    )
}