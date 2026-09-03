import { notFound } from 'next/navigation';
import { practiceAreas } from '@/data/practiceAreas';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function SinglePracticePage({ params }: PageProps) {
    const { slug } = await params;
    const practice = practiceAreas.find((item) => item.id === slug);

    if (!practice) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#fcfbf8] text-slate-800 font-sans selection:bg-[#c59b27] selection:text-white">

            {/* ------------------ HERO / HEADER SECTION ------------------ */}
            <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-[#e8e3d9] bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ed] to-[#fcfbf8] overflow-hidden">
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#d6cebe_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

                <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

                    {/* Back Navigation Link */}
                    <Link
                        href="/practice-areas"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 hover:text-[#1a2332] transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4 text-[#c59b27]" /> Back to Practice Areas
                    </Link>

                    {/* Top Gold Accent Bar */}
                    <div className="h-0.5 w-16 bg-[#c59b27] mb-6" />

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-[#dcd5c9] bg-[#f5f1e8] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c59b27] mb-6">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#c59b27]" />
                        Practice Discipline
                    </div>

                    {/* Practice Title */}
                    <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1a2332] uppercase leading-tight">
                        {practice.title}
                    </h1>

                    {/* Practice Description */}
                    <p className="mt-6 text-sm sm:text-base text-stone-600 leading-relaxed tracking-wide font-light max-w-3xl">
                        {practice.description}
                    </p>
                </div>
            </section>


            {/* ------------------ SERVICES OFFERED SECTION ------------------ */}
            <section className="py-16 lg:py-24 bg-[#fcfbf8] border-b border-[#e8e3d9]">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">

                    <div className="border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 sm:p-12 relative shadow-sm">
                        <div className="mb-8">
                            <div className="h-0.5 w-12 bg-[#c59b27] mb-3" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                Scope of Legal Services
              </span>
                            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1a2332] font-normal uppercase tracking-wide">
                                Key Services Offered
                            </h2>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {practice.services.map((service, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3.5 border border-[#e8e3d9] bg-[#fcfbf8] p-5 transition-all hover:shadow-sm"
                                >
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#c59b27] mt-0.5" />
                                    <span className="text-xs sm:text-sm font-light text-stone-700 tracking-wide leading-relaxed">
                    {service}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ------------------ CALL TO ACTION ------------------ */}
            <section className="py-20 bg-[#f7f5f0]">
                <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
                    <div className="border border-[#1a2332] bg-[#1a2332] text-white p-10 sm:p-16 shadow-xl">
                        <div className="h-0.5 w-12 bg-[#c59b27] mx-auto mb-4" />
                        <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal uppercase tracking-wide">
                            NEED LEGAL COUNSEL FOR {practice.title}?
                        </h3>
                        <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
                            Schedule a confidential consultation with our legal team to evaluate your matter and outline strategic options.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/consultation"
                                className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#b08920] text-white px-8 py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all"
                            >
                                Book Consultation <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}