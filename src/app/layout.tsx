import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Scale, MapPin, Phone, Mail } from "lucide-react";
import { Header } from "../components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const SITE_URL = "https://www.lmkenyaadvocates.duckdns.org";

const footerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Our Attorneys" },
  { href: "/contact", label: "Contact Us" },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LM & Company Advocates | Practical Legal Counsel in Nairobi, Kenya",
    template: "%s | LM & Company Advocates Nairobi",
  },
  description:
      "Leading Advocates & Legal Counsel in Nairobi, Kenya. High-caliber legal services in Real Estate Conveyancing, Corporate & Commercial Law, Dispute Resolution, and Labour Law at View Park Towers.",
  keywords: [
    "LM & Company Advocates",
    "Advocates in Nairobi",
    "Lawyers in Nairobi Kenya",
    "Conveyancing Advocates Nairobi",
    "Real Estate Lawyers Kenya",
    "Commercial Lawyers Nairobi",
    "Law firms in View Park Towers",
    "Dispute Resolution Advocates Kenya",
    "Legal services Monrovia Street Nairobi",
  ],
  authors: [{ name: "LM & Company Advocates" }],
  creator: "LM & Company Advocates",
  publisher: "LM & Company Advocates",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "LM & Company Advocates | Practical Legal Counsel in Nairobi, Kenya",
    description:
        "Strategic, commercially conscious legal counsel and representation across Kenya and East Africa.",
    url: SITE_URL,
    siteName: "LM & Company Advocates",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LM & Company Advocates Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LM & Company Advocates | Legal Counsel Nairobi",
    description: "Commercially sound legal solutions in Kenya.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "LM & Company Advocates",
  "alternateName": "LM Advocates Kenya",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": `${SITE_URL}/og-image.jpg`,
  "telephone": "+254710917401",
  "email": "lmandcompanyadvocates@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15th Floor, View Park Towers, Monrovia Street",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "postalCode": "00100",
    "addressCountry": "KE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2825,
    "longitude": 36.8186,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00",
    },
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Nairobi",
    },
    {
      "@type": "Country",
      "name": "Kenya",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Practice Disciplines",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate & Commercial Law",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate & Conveyancing Law",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dispute Resolution & Litigation",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Employment & Labour Law",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Banking & Financial Advisory",
        },
      },
    ],
  },
};

function Footer() {
  return (
      <footer className="bg-[#1a2332] text-stone-300 border-t border-[#c59b27] mb-14 md:mb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1: Brand Info */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="h-0.5 w-12 bg-[#c59b27] mb-6" />
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-5 w-5 text-[#c59b27]" />
                <span className="font-serif text-base tracking-[0.15em] text-white font-semibold uppercase">
                LM & COMPANY
              </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed tracking-wide font-light max-w-sm">
                Providing strategic legal counsel, rigorous representation, and commercially sound solutions across Kenya and East Africa.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <div className="h-0.5 w-12 bg-[#c59b27] mb-6" />
              <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs tracking-wider font-light">
                {footerNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-[#c59b27] transition-colors">
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Focus Disciplines */}
            <div>
              <div className="h-0.5 w-12 bg-[#c59b27] mb-6" />
              <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-white mb-4">
                Practice Areas
              </h4>
              <ul className="space-y-2.5 text-xs tracking-wider text-stone-300 font-light">
                <li>Corporate & Commercial</li>
                <li>Real Estate & Conveyancing</li>
                <li>Dispute Resolution & Litigation</li>
                <li>Employment & Labour Law</li>
                <li>Banking & Financial Advisory</li>
              </ul>
            </div>

            {/* Column 4: Location & Contact */}
            <div>
              <div className="h-0.5 w-12 bg-[#c59b27] mb-6" />
              <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-white mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3 text-xs tracking-wider font-light">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>15th Floor, View Park Towers, Monrovia Street, Nairobi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#c59b27] shrink-0" />
                  <a href="tel:+254710917401" className="hover:text-white transition-colors">
                    +254 710 917 401
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#c59b27] shrink-0" />
                  <a href="mailto:lmandcompanyadvocates@gmail.com" className="hover:text-white transition-colors">
                    lmandcompanyadvocates@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between text-[11px] tracking-wider text-stone-400 font-light gap-4 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} LM & Company Advocates. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Engagement
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}

function MobileStickyBar() {
  return (
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1a2332] border-t border-[#c59b27] flex md:hidden items-center divide-x divide-slate-700">
        <a
            href="tel:+254710917401"
            className="flex-1 py-3 flex items-center justify-center gap-2 text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#28354a] transition-colors"
        >
          <Phone className="h-3.5 w-3.5 text-[#c59b27]" />
          Call Us
        </a>
        <Link
            href="/consultation"
            className="flex-1 py-3 flex items-center justify-center gap-2 bg-[#c59b27] text-[#1a2332] text-xs font-semibold tracking-wider uppercase hover:bg-[#d8ab2e] transition-colors"
        >
          Book Call
        </Link>
      </div>
  );
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
          suppressHydrationWarning
      >
      <body className="min-h-full flex flex-col bg-[#fcfbf8] text-slate-800 font-sans">
      <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyBar />
      </body>
      </html>
  );
}