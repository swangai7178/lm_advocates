import { Metadata } from 'next';
import Link from 'next/link';
import { practiceAreas } from '@/data/practiceAreas';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Practice Areas | LM & Company Advocates',
    description: 'Comprehensive legal advisory across corporate, real estate, dispute resolution, and regulatory compliance in Kenya.',
};

export default function PracticeAreasPage() {
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
                        Legal Expertise & Disciplines
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1a2332] uppercase leading-tight">
                        COMPREHENSIVE LEGAL <br />
                        <span className="italic font-light text-stone-500">SOLUTIONS</span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                        Coordinated legal support tailored to businesses, institutions, investors, and private clients across Kenya and East Africa.
                    </p>
                </div>
            </section>

            {/* ------------------ PRACTICE AREAS GRID ------------------ */}
            <section className="py-20 lg:py-28 bg-[#fcfbf8] border-b border-[#e8e3d9]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {practiceAreas.map((area) => (
                            <div
                                key={area.id}
                                className="group relative flex flex-col justify-between border border-[#e8e3d9] border-t-2 border-t-[#c59b27] bg-[#f8f6f1] p-8 transition-all hover:shadow-md"
                            >
                                <div>
                                    {/* Icon Box */}
                                    <div className="p-3 w-fit border border-[#e8e3d9] bg-[#fcfbf8] text-[#c59b27] mb-6 group-hover:border-[#c59b27] transition-colors">
                                        <ShieldCheck className="h-6 w-6 text-[#c59b27]" />
                                    </div>

                                    {/* Title & Description */}
                                    <h2 className="font-serif text-xl font-medium text-[#1a2332] uppercase tracking-wide">
                                        {area.title}
                                    </h2>
                                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light tracking-wide">
                                        {area.description}
                                    </p>

                                    {/* Sub-services List */}
                                    {area.services && area.services.length > 0 && (
                                        <ul className="mt-6 space-y-2.5 border-t border-[#e8e3d9] pt-5 text-xs text-stone-600 font-light tracking-wide">
                                            {area.services.map((service, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#c59b27] shrink-0" />
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Footer Link */}
                                <Link
                                    href={`/practice-areas/${area.id}`}
                                    className="mt-8 inline-flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#c59b27] hover:text-[#a07c1e] transition-colors pt-4 border-t border-[#e8e3d9]"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="h-4 w-4 text-[#c59b27] transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------ BOTTOM CONSULTATION CTA ------------------ */}
            <section className="py-20 bg-[#f7f5f0]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <div className="border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#fcfbf8] p-10 sm:p-16 max-w-4xl mx-auto shadow-sm">
                        <div className="h-0.5 w-12 bg-[#c59b27] mx-auto mb-4" />
                        <h3 className="font-serif text-2xl sm:text-4xl text-[#1a2332] font-normal uppercase tracking-wide">
                            REQUIRE TAILORED LEGAL COUNSEL?
                        </h3>
                        <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
                            Schedule a preliminary consultation with our legal team to discuss your legal requirements and strategic goals.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center bg-[#1a2332] hover:bg-[#28354a] text-white px-8 py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all shadow-sm"
                            >
                                Book A Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}