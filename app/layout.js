import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getLayoutData } from "@/sanity/lib/fetchData";
import { cache } from "react";
import clinicData from "@/config/clinicData";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const getData = cache(getLayoutData);

// Fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Minimal SEO (page handles real SEO)
export const metadata = {
  title: clinicData.seo.title,
  description: clinicData.seo.description,
  keywords: clinicData.seo.keywords,
  openGraph: {
    title: clinicData.seo.title,
    description: clinicData.seo.description,
    type: "website",
  },
};


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "SmileCare Dental Clinic",
  "url": "https://yourdomain.com",
  "telephone": "+91-98765-43210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "42, Sector 18",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "openingHours": ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00", "Su 10:00-14:00"],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1200" }
}

export default async function RootLayout({ children }) {
  let clinicInfo = null;
  let navigation = null;

  try {
    const data = await getData();
    clinicInfo = data?.clinicInfo;
    navigation = data?.navigation;
  } catch (error) {
    console.error("Layout Data Error:", error);
  }

  console.log("Navigation Data:", navigation);

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col antialiased">

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />


        <LayoutWrapper clinicInfo={clinicInfo} navigation={navigation}>
          {children}
        </LayoutWrapper>

      </body>
    </html>
  );
}