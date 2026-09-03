import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Scale, MapPin, Phone, Mail } from "lucide-react";
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

export const metadata: Metadata = {
  title: "LM & Company Advocates | Practical Legal Counsel",
  description: "A modern Kenyan law practice delivering high-caliber, commercially conscious legal solutions in Nairobi.",
};

function Header() {
  return (
      <header className="sticky top-0 z-50 w-full bg-[#fcfbf8] border-b border-[#e8e3d9] text-[#1a2332]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center border border-[#dcd5c9] bg-[#f5f1e8] text-[#c59b27] group-hover:border-[#c59b27] transition-colors">
              <Scale className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.18em] text-[#1a2332] font-semibold uppercase leading-none">
              LM & COMPANY
            </span>
              <span className="text-[9px] font-medium tracking-[0.25em] text-[#c59b27] uppercase mt-1">
              Advocates &bull; Nairobi
            </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-medium text-stone-700">
            <Link href="/" className="hover:text-[#c59b27] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#c59b27] transition-colors">
              About Us
            </Link>
            <Link href="/practice-areas" className="hover:text-[#c59b27] transition-colors">
              Practice Areas
            </Link>
            <Link href="/attorneys" className="hover:text-[#c59b27] transition-colors">
              Our Attorneys
            </Link>
            <Link href="/contact" className="hover:text-[#c59b27] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Action Button */}
          <Link
              href="/consultation"
              className="bg-[#1a2332] hover:bg-[#28354a] text-white px-5 py-2.5 text-xs uppercase font-semibold tracking-[0.12em] transition-colors rounded-none shadow-sm"
          >
            Schedule A Call
          </Link>
        </div>
      </header>
  );
}

function Footer() {
  return (
      <footer className="bg-[#1a2332] text-stone-300 border-t border-[#c59b27]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Column 1: Brand Info */}
            <div>
              <div className="h-0.5 w-12 bg-[#c59b27] mb-6" />
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-5 w-5 text-[#c59b27]" />
                <span className="font-serif text-base tracking-[0.15em] text-white font-semibold uppercase">
                LM & COMPANY
              </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed tracking-wide font-light">
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
                <li>
                  <Link href="/" className="hover:text-[#c59b27] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#c59b27] transition-colors">
                    About Our Firm
                  </Link>
                </li>
                <li>
                  <Link href="/practice-areas" className="hover:text-[#c59b27] transition-colors">
                    Practice Areas
                  </Link>
                </li>
                <li>
                  <Link href="/attorneys" className="hover:text-[#c59b27] transition-colors">
                    Our Attorneys
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#c59b27] transition-colors">
                    Contact Us
                  </Link>
                </li>
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
                Contact
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

          <div className="mt-16 pt-8 border-t border-slate-700/60 flex flex-col md:flex-row items-center justify-between text-[11px] tracking-wider text-stone-400 font-light gap-4">
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

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-[#fcfbf8] text-slate-800 font-sans">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      </body>
      </html>
  );
}