import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | LM & Company Advocates',
    description: 'Get in touch with LM & Company Advocates located at View Park Towers, 15th Floor, Monrovia Street, Nairobi, Kenya.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fcfbf8] text-slate-800 font-sans selection:bg-[#c59b27] selection:text-white">

            {/* ------------------ HERO / HEADER SECTION ------------------ */}
            <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[#e8e3d9] bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ed] to-[#fcfbf8] overflow-hidden">
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#d6cebe_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    {/* Top Gold Accent Line */}
                    <div className="h-0.5 w-16 bg-[#c59b27] mx-auto mb-6" />

                    <div className="inline-flex items-center gap-2 border border-[#dcd5c9] bg-[#f5f1e8] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c59b27] mb-6">
                        <span className="h-1.5 w-1.5 bg-[#c59b27] rounded-full" />
                        Nairobi Head Office
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1a2332] uppercase leading-tight">
                        GET IN <br />
                        <span className="italic font-light text-stone-500">TOUCH</span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                        For legal advice, representation, or a confidential consultation, please contact our chambers.
                    </p>
                </div>
            </section>


            {/* ------------------ MAIN CONTACT SECTION ------------------ */}
            <section className="py-20 lg:py-28 bg-[#fcfbf8]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                        {/* Contact Information Card */}
                        <div className="relative border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 sm:p-12 shadow-sm">
                            <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                Contact Details
              </span>

                            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1a2332] font-normal uppercase tracking-wide">
                                LM & COMPANY ADVOCATES
                            </h2>
                            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-[#c59b27]">
                                Advocates &bull; Legal Consultants &bull; Commissioners for Oaths
                            </p>

                            <div className="mt-8 space-y-8 pt-8 border-t border-[#e8e3d9]">

                                {/* Office Address */}
                                <div className="flex items-start gap-4">
                                    <div className="border border-[#e8e3d9] bg-[#fcfbf8] p-3 text-[#c59b27] shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                                            Office Address
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
                                            View Park Towers, 15th Floor, Monrovia Street<br />
                                            P.O. Box 18698-00100, Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>

                                {/* Telephone */}
                                <div className="flex items-start gap-4">
                                    <div className="border border-[#e8e3d9] bg-[#fcfbf8] p-3 text-[#c59b27] shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                                            Telephone
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-stone-600 font-light tracking-wide">
                                            <a href="tel:+254710917401" className="hover:text-[#1a2332] transition-colors">
                                                +254 710 917 401
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="flex items-start gap-4">
                                    <div className="border border-[#e8e3d9] bg-[#fcfbf8] p-3 text-[#c59b27] shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                                            Email Address
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-stone-600 font-light tracking-wide">
                                            <a href="mailto:lmandcompanyadvocates@gmail.com" className="hover:text-[#1a2332] transition-colors">
                                                lmandcompanyadvocates@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="border border-[#e8e3d9] bg-[#fcfbf8] p-3 text-[#c59b27] shrink-0">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                                            Office Hours
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
                                            Monday – Friday: 8:00 AM – 5:00 PM<br />
                                            Saturday & Sunday: Closed
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Visit Our Offices & Location Overview */}
                        <div className="relative flex flex-col justify-between border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 sm:p-12 shadow-sm">
                            <div>
                                <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                  Location Overview
                </span>
                                <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1a2332] font-normal uppercase tracking-wide">
                                    VISIT OUR OFFICES
                                </h2>
                                <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
                                    Situated in the heart of Nairobi CBD on Monrovia Street, View Park Towers offers convenient access for both corporate clients and private individuals.
                                </p>
                            </div>

                            {/* Map Placeholder Container */}
                            <div className="my-8 flex h-64 w-full items-center justify-center border border-[#e8e3d9] bg-[#fcfbf8] text-stone-600">
                                <div className="text-center p-6">
                                    <MapPin className="mx-auto h-8 w-8 text-[#c59b27] mb-3 animate-bounce" />
                                    <p className="font-serif text-sm uppercase tracking-wider text-[#1a2332]">View Park Towers, 15th Floor</p>
                                    <p className="text-xs text-stone-500 mt-1 font-light tracking-wide">Monrovia Street, Nairobi</p>
                                </div>
                            </div>

                            {/* Appointment Note */}
                            <div className="border border-[#dcd5c9] bg-[#f5f1e8] p-4">
                                <p className="text-[11px] text-stone-600 leading-relaxed font-light tracking-wide">
                                    * Confidential consultations can be arranged in person at our offices or via secure virtual channels upon prior appointment.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}