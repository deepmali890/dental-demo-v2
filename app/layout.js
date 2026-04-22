import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { getLayoutData } from "@/sanity/lib/fetchData";
import { cache } from "react";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import PWARegister from "@/components/PWARegister";

const getData = cache(getLayoutData);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    default: "Smile Care Dental Clinic",
    template: "%s | Smile Care Dental Clinic",
  },
  description:
    "Comprehensive dental care in Noida. Expert dentists, modern technology, and personalized treatments for your perfect smile.",
  keywords:
    "dentist in Noida, dental clinic Noida, best dentist Noida, dental care Noida, cosmetic dentistry Noida, dental implants Noida, teeth whitening Noida",
  manifest: "/manifest.json",
  openGraph: {
    title: "Smile Care Dental Clinic",
    description:
      "Comprehensive dental care in Noida. Expert dentists, modern technology, and personalized treatments for your perfect smile.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a2f6b",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "SmileCare Dental Clinic",
  url: "https://yourdomain.com",
  telephone: "+91-98765-43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, Sector 18",
    addressLocality: "Noida",
    addressRegion: "UP",
    postalCode: "201301",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00", "Su 10:00-14:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
  },
};

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

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <PWARegister />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <LayoutWrapper clinicInfo={clinicInfo} navigation={navigation}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}