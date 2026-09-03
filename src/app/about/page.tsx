import { Metadata } from 'next';
import { Award, Scale, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | LM & Company Advocates',
    description: 'Learn about LM & Company Advocates, a modern Kenyan law practice led by Managing Partner Lucia Mwikali Musyoka.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fcfbf8] text-slate-800 font-sans selection:bg-[#c59b27] selection:text-white">

            {/* ------------------ HERO / HEADER SECTION ------------------ */}
            <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[#e8e3d9] bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ed] to-[#fcfbf8] overflow-hidden">
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#d6cebe_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    {/* Top Gold Accent Bar */}
                    <div className="h-0.5 w-16 bg-[#c59b27] mx-auto mb-6" />

                    <div className="inline-flex items-center gap-2 border border-[#dcd5c9] bg-[#f5f1e8] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c59b27] mb-6">
                        <span className="h-1.5 w-1.5 bg-[#c59b27] rounded-full" />
                        Advocates &bull; Legal Consultants &bull; Commissioners for Oaths
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1a2332] uppercase leading-tight">
                        ABOUT LM & COMPANY <br />
                        <span className="italic font-light text-stone-500">ADVOCATES</span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                        Practical Legal Counsel. Strategic Solutions. Trusted Representation across Kenya and East Africa.
                    </p>
                </div>
            </section>


            {/* ------------------ FIRM OVERVIEW & CORE PRINCIPLES ------------------ */}
            <section className="py-20 lg:py-28 bg-[#fcfbf8] border-b border-[#e8e3d9]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

                        {/* Left Column: Firm Narrative */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                Firm Practice
              </span>
                            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase tracking-wide leading-tight">
                                A MODERN KENYAN <br />
                                <span className="text-stone-500">LAW PRACTICE</span>
                            </h2>

                            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide font-light">
                                <p>
                                    LM & Company Advocates is a Kenyan law firm offering practical, commercially conscious, and client-focused legal services to businesses, institutions, investors, families, and individuals.
                                </p>
                                <p>
                                    Built to serve as a single, trusted point of contact, our clients draw on one coordinated practice across corporate structuring, commercial transactions, litigation, conveyancing, employment, succession, and regulatory compliance.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Core Principles Card */}
                        <div className="lg:col-span-5 border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 sm:p-10 relative shadow-sm">
                            <h3 className="font-serif text-xl font-medium text-[#1a2332] uppercase tracking-wide mb-6">
                                Our Core Principles
                            </h3>

                            <ul className="space-y-6 text-xs sm:text-sm text-stone-600">
                                <li className="flex items-start gap-4">
                                    <ShieldCheck className="h-5 w-5 shrink-0 text-[#c59b27] mt-0.5" />
                                    <div>
                                        <strong className="text-[#1a2332] font-medium block uppercase tracking-wider text-xs mb-1">
                                            Client-Centred Advice
                                        </strong>
                                        <span className="font-light tracking-wide">
                      Grounded in the client&apos;s operational objectives and specific risk profile.
                    </span>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <Scale className="h-5 w-5 shrink-0 text-[#c59b27] mt-0.5" />
                                    <div>
                                        <strong className="text-[#1a2332] font-medium block uppercase tracking-wider text-xs mb-1">
                                            Commercial Awareness
                                        </strong>
                                        <span className="font-light tracking-wide">
                      Legal solutions shaped directly by financial constraints and market realities.
                    </span>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <Award className="h-5 w-5 shrink-0 text-[#c59b27] mt-0.5" />
                                    <div>
                                        <strong className="text-[#1a2332] font-medium block uppercase tracking-wider text-xs mb-1">
                                            Prevention & Risk Management
                                        </strong>
                                        <span className="font-light tracking-wide">
                      Proactively identifying vulnerabilities before disputes or liabilities mature.
                    </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            {/* ------------------ FIRM LEADERSHIP SECTION ------------------ */}
            <section className="py-20 lg:py-28 bg-[#f7f5f0] border-b border-[#e8e3d9]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-12 text-center">
                        <div className="h-0.5 w-12 bg-[#c59b27] mx-auto mb-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
              Firm Leadership
            </span>
                        <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase tracking-wide">
                            MANAGING PARTNER
                        </h2>
                    </div>

                    <div className="border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#fcfbf8] p-8 sm:p-12 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

                            {/* Profile Monogram Box */}
                            <div className="flex h-36 w-36 shrink-0 items-center justify-center border border-[#dcd5c9] bg-[#f5f1e8] font-serif font-semibold text-3xl text-[#1a2332] tracking-widest mb-8 lg:mb-0">
                                LMM
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a2332] uppercase tracking-wide">
                                        Lucia Mwikali Musyoka
                                    </h3>
                                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c59b27] font-medium">
                                        Advocate, High Court of Kenya &bull; Managing Partner
                                    </p>
                                </div>

                                {/* Badges / Credentials */}
                                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    LL.M. &mdash; University of East London
                  </span>
                                    <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    LL.B. &mdash; University of Nairobi
                  </span>
                                    <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    6+ Years Legal Practice
                  </span>
                                </div>

                                {/* Narrative */}
                                <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide font-light pt-2">
                                    Lucia brings over six years of experience managing the complete lifecycle of a legal matter—from pleadings, strategic negotiation, and transactional drafting through to trial advocacy, judgment, and enforcement. She directs the firm&apos;s strategic vision, ensuring uncompromised service quality across all practice disciplines.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}