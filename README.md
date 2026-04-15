# 🦷 Dental Clinic Demo Website — Next.js Template

A high-converting, fully responsive dental clinic website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Lucide React**.  
Designed as a reusable agency template — change one config file, deploy, done.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Config-driven** | All clinic data in `/config/clinicData.js` |
| **App Router** | Next.js 14 with `app/` directory |
| **Fully Responsive** | Mobile-first, tested on all breakpoints |
| **Sticky Header** | Transparent → solid on scroll |
| **Click-to-Call** | Direct phone link |
| **Click-to-WhatsApp** | Floating CTA + inline buttons |
| **Appointment Form** | UI-only, demo success state |
| **Before/After Slider** | Interactive drag slider per result |
| **Google Maps Embed** | Iframe from config |
| **SEO Ready** | Metadata from config |
| **Fast** | No heavy libraries, optimized fonts |

---

## 📁 Project Structure

```
dental-clinic/
├── app/
│   ├── layout.js          # Root layout — fonts + metadata
│   ├── page.js            # Main page — assembles all sections
│   └── globals.css        # Design tokens + utilities
│
├── components/
│   ├── Header.jsx         # Sticky nav with mobile menu
│   ├── Hero.jsx           # Full-screen hero with CTA
│   ├── Stats.jsx          # Key numbers strip
│   ├── AboutDoctor.jsx    # Doctor bio + credentials
│   ├── Services.jsx       # Service cards (from config)
│   ├── BeforeAfter.jsx    # Interactive before/after slider
│   ├── Reviews.jsx        # Testimonial cards (from config)
│   ├── Appointment.jsx    # Booking form (UI only)
│   ├── Location.jsx       # Map embed + contact details
│   ├── Footer.jsx         # Links + social + copyright
│   └── WhatsAppCTA.jsx    # Floating WhatsApp button
│
├── config/
│   └── clinicData.js      # ⭐ SINGLE SOURCE OF TRUTH
│
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Clone or copy this project folder
cd dental-clinic

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## ⚙️ Customize for a New Client

**Only edit `/config/clinicData.js`** — nothing else.

```js
// Example: switching to a new client

const clinicData = {
  clinicName: "PearlDent Clinic",         // ← Change this
  tagline: "Smile with Confidence",        // ← Change this
  phone: "+91-98000-11111",                // ← Change this
  whatsapp: "919800011111",               // ← Change this (no + or spaces)
  city: "Jaipur",                          // ← Change this
  doctor: {
    name: "Dr. Arjun Kapoor",             // ← Change this
    ...
  },
  services: [ ... ],                       // ← Add/remove services
  reviews: [ ... ],                        // ← Add real testimonials
  mapEmbedUrl: "https://maps.google...",  // ← Paste new embed URL
};
```

> **That's it.** Every component reads from this config. No hardcoded text anywhere.

### How to get a Google Maps embed URL
1. Go to [maps.google.com](https://maps.google.com)
2. Search the clinic address
3. Click **Share** → **Embed a map**
4. Copy the `src="..."` URL from the iframe code
5. Paste into `mapEmbedUrl` in the config

---

## 🌐 Deploy on Vercel (Recommended)

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally (once)
npm i -g vercel

# From your project folder
vercel

# Follow prompts:
# - Link to existing project? No → create new
# - Framework: Next.js (auto-detected)
# - Build command: next build (default)
# - Output dir: .next (default)

# Done! You'll get a live URL instantly.
```

### Option B — Vercel Dashboard

1. Push your project to **GitHub** (or GitLab / Bitbucket)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Live in ~60 seconds ✅

### Option C — One-click for each client

```bash
# For each new client:
cp -r dental-clinic client-pearlDent   # duplicate
cd client-pearlDent
# edit config/clinicData.js
vercel --prod                           # deploy
# → new URL for new client, done!
```

---

## 🔁 Reuse Workflow (Agency Template)

```
1. cp -r dental-clinic new-client-name
2. Open config/clinicData.js
3. Fill in: name, doctor, phone, WhatsApp, address, services, reviews, map URL
4. npm run dev  →  preview
5. vercel --prod  →  deploy
6. Share link with client
```

**Total time per new client: 10–15 minutes.**

---

## 🔌 Optional: Connect Real Form Submissions

The appointment form is UI-only by default. To make it functional, replace the `handleSubmit` function in `components/Appointment.jsx` with one of these:

### Option A — WhatsApp redirect (simplest)
```js
function handleSubmit(e) {
  e.preventDefault();
  const msg = `New Appointment Request:\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}`;
  window.open(`https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  setSubmitted(true);
}
```

### Option B — Formspree (free tier available)
```js
async function handleSubmit(e) {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSubmitted(true);
}
```

### Option C — EmailJS (client-side email, no backend)
- [emailjs.com](https://www.emailjs.com/) — free tier, easy setup

---

## 🎨 Design Customization

Design tokens are CSS variables in `app/globals.css`:

```css
:root {
  --navy: #0a1628;        /* Header, footer, dark sections */
  --teal: #0d9488;        /* Primary brand color */
  --teal-light: #14b8a6;  /* Hover states */
  --gold: #c9a84c;        /* Accent / highlights */
  --cream: #fdfaf5;       /* Soft background */
}
```

Change these 5 variables to completely rebrand the site for any colour scheme.

---

## 📱 Components Reference

| Component | Section ID | Notes |
|---|---|---|
| `Header` | — | Sticky, transparent → white on scroll |
| `Hero` | `#hero` | Dark gradient, stats card, social proof |
| `Stats` | — | Teal strip, 4 key numbers |
| `AboutDoctor` | `#about` | Photo placeholder (replace with real image) |
| `Services` | `#services` | Cards from `clinicData.services[]` |
| `BeforeAfter` | `#before-after` | Drag slider, 3 results |
| `Reviews` | `#reviews` | Cards from `clinicData.reviews[]` |
| `Appointment` | `#contact` | Form with success state |
| `Location` | `#location` | Google Maps iframe + address |
| `Footer` | — | Links, social, copyright |
| `WhatsAppCTA` | — | Fixed floating button (bottom-right) |

---

## 🖼️ Adding Real Doctor Photo

1. Place the photo at `/public/doctor.jpg`
2. In `config/clinicData.js`, set: `image: "/doctor.jpg"`
3. In `components/AboutDoctor.jsx`, replace the placeholder `<div>` with:
```jsx
import Image from "next/image";

<Image
  src={doctor.image}
  alt={doctor.name}
  fill
  className="object-cover object-top"
/>
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | Framework |
| `react` 18 | UI |
| `tailwindcss` 3 | Styling |
| `lucide-react` | Icons |
| `next/font` | Google Fonts (Cormorant Garamond + DM Sans) |

Zero unnecessary dependencies. No Redux, no heavy UI libs.

---

## 🛡️ License

This is a demo/agency template. You may use and resell this template for client projects.  
Built by **Your Agency Name**.