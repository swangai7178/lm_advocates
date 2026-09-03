import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, GraduationCap, ShieldCheck, ArrowUpRight, Scale } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Attorneys | LM & Company Advocates',
    description: 'Meet our experienced team of advocates, legal consultants, and legal professionals at LM & Company Advocates in Nairobi, Kenya.',
};

interface LegalProfessional {
    id: string;
    name: string;
    role: string;
    qualifications: string[];
    bio: string;
    specialties: string[];
    email: string;
    phone: string;
    initials: string;
}

const attorneys: LegalProfessional[] = [
    {
        id: 'lucia-mwikali-musyoka',
        name: 'Lucia Mwikali Musyoka',
        role: 'Managing Partner | High Court Advocate',
        qualifications: [
            'LL.M. — University of East London',
            'LL.B. — University of Nairobi',
            'Postgraduate Diploma — Kenya School of Law',
            '6+ Years Legal Experience',
        ],
        bio: 'Lucia brings over six years of experience managing the complete lifecycle of complex legal matters—from strategic negotiations, pleadings, and transactional drafting through to trial advocacy, judgment, and enforcement. She leads the firm’s vision across corporate structuring, dispute resolution, and commercial law.',
        specialties: ['Corporate & Commercial', 'Dispute Resolution', 'Conveyancing & Real Estate', 'Regulatory Compliance'],
        email: 'lmandcompanyadvocates@gmail.com',
        phone: '+254 710 917 401',
        initials: 'LMM',
    },
    {
        id: 'associate-advocate',
        name: 'Associate Counsel',
        role: 'Commercial & Dispute Resolution Associate',
        qualifications: [
            'LL.B. (Hons) — High Court Advocate',
            'Postgraduate Diploma — Kenya School of Law',
            'Certified Legal Practitioner',
        ],
        bio: 'Specializing in commercial litigation, debt recovery, and employment law disputes. Focused on delivering proactive risk management and client-focused advocacy before judicial and quasi-judicial tribunals.',
        specialties: ['Commercial Litigation', 'Employment & Labor Law', 'Debt Recovery', 'Succession & Estate'],
        email: 'lmandcompanyadvocates@gmail.com',
        phone: '+254 710 917 401',
        initials: 'LMA',
    },
];

export default function AttorneysPage() {
    const managingPartner = attorneys[0];
    const otherAttorneys = attorneys.slice(1);

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
                        Advocates &bull; Consultants &bull; Counsel
                    </div>

                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1a2332] uppercase leading-tight">
                        OUR LEGAL <br />
                        <span className="italic font-light text-stone-500">PRACTITIONERS</span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                        Dedicated advocates committed to practical legal counsel, commercial awareness, and rigorous representation.
                    </p>
                </div>
            </section>


            {/* ------------------ MANAGING PARTNER FEATURE ------------------ */}
            <section className="py-20 lg:py-28 bg-[#fcfbf8] border-b border-[#e8e3d9]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-12">
                        <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
              Leadership
            </span>
                        <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase tracking-wide">
                            MANAGING PARTNER
                        </h2>
                    </div>

                    <div className="relative border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 sm:p-12 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">

                            {/* Monogram Box */}
                            <div className="flex h-40 w-40 shrink-0 items-center justify-center border border-[#dcd5c9] bg-[#f5f1e8] font-serif font-bold text-4xl text-[#1a2332] tracking-widest mb-8 lg:mb-0">
                                {managingPartner.initials}
                            </div>

                            {/* Information */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="font-serif text-3xl sm:text-4xl text-[#1a2332] uppercase tracking-wide">
                                        {managingPartner.name}
                                    </h3>
                                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#c59b27] font-medium">
                                        {managingPartner.role}
                                    </p>
                                </div>

                                {/* Qualifications */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {managingPartner.qualifications.map((qual, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1.5 border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332] font-light"
                                        >
                      <GraduationCap className="h-3.5 w-3.5 text-[#c59b27]" />
                                            {qual}
                    </span>
                                    ))}
                                </div>

                                {/* Bio */}
                                <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide font-light">
                                    {managingPartner.bio}
                                </p>

                                {/* Practice Areas Badges */}
                                <div className="pt-2">
                                    <h4 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold mb-3">
                                        Core Focus Areas
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {managingPartner.specialties.map((spec, i) => (
                                            <span
                                                key={i}
                                                className="border border-[#e8e3d9] bg-[#fcfbf8] px-3 py-1 text-xs text-stone-700 font-light tracking-wide"
                                            >
                        {spec}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Direct Action Bar */}
                                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#e8e3d9] text-xs text-stone-600">
                                    <a
                                        href={`mailto:${managingPartner.email}`}
                                        className="inline-flex items-center gap-2 hover:text-[#1a2332] transition-colors"
                                    >
                                        <Mail className="h-4 w-4 text-[#c59b27]" />
                                        <span>{managingPartner.email}</span>
                                    </a>
                                    <a
                                        href={`tel:${managingPartner.phone.replace(/\s+/g, '')}`}
                                        className="inline-flex items-center gap-2 hover:text-[#1a2332] transition-colors"
                                    >
                                        <Phone className="h-4 w-4 text-[#c59b27]" />
                                        <span>{managingPartner.phone}</span>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* ------------------ LEGAL TEAM & ASSOCIATES ------------------ */}
            <section className="py-20 lg:py-28 bg-[#fcfbf8] border-b border-[#e8e3d9]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-12">
                        <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
              Legal Chambers
            </span>
                        <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase tracking-wide">
                            ASSOCIATES & LEGAL CONSULTANTS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherAttorneys.map((attorney) => (
                            <div
                                key={attorney.id}
                                className="relative flex flex-col justify-between border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 shadow-sm"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#dcd5c9] bg-[#f5f1e8] font-serif font-bold text-xl text-[#1a2332] tracking-widest">
                                            {attorney.initials}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl font-medium text-[#1a2332] uppercase tracking-wide">
                                                {attorney.name}
                                            </h3>
                                            <p className="text-xs uppercase tracking-[0.18em] text-[#c59b27] mt-1 font-medium">
                                                {attorney.role}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed tracking-wide mb-6">
                                        {attorney.bio}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {attorney.qualifications.map((q, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-light">
                                                <ShieldCheck className="h-3.5 w-3.5 text-[#c59b27] shrink-0" />
                                                <span>{q}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-[#e8e3d9] flex flex-wrap gap-4 text-xs text-stone-600">
                                    <a
                                        href={`mailto:${attorney.email}`}
                                        className="inline-flex items-center gap-2 hover:text-[#1a2332] transition-colors"
                                    >
                                        <Mail className="h-3.5 w-3.5 text-[#c59b27]" />
                                        <span>Direct Email</span>
                                    </a>
                                    <a
                                        href={`tel:${attorney.phone.replace(/\s+/g, '')}`}
                                        className="inline-flex items-center gap-2 hover:text-[#1a2332] transition-colors"
                                    >
                                        <Phone className="h-3.5 w-3.5 text-[#c59b27]" />
                                        <span>Call Chamber</span>
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* General Practice Card */}
                        <div className="relative flex flex-col justify-between border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 shadow-sm">
                            <div>
                                <div className="p-3 w-fit border border-[#e8e3d9] bg-[#fcfbf8] text-[#c59b27] mb-6">
                                    <Scale className="h-6 w-6 text-[#c59b27]" />
                                </div>

                                <h3 className="font-serif text-xl font-medium text-[#1a2332] uppercase tracking-wide mb-2">
                                    Coordinated Legal Counsel
                                </h3>
                                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed tracking-wide">
                                    Our practice operates as a unified team. Clients benefit from cross-disciplinary insights across transactional drafting, litigation strategy, regulatory compliance, and dispute resolution.
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-[#e8e3d9]">
                                <Link
                                    href="/consultation"
                                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c59b27] hover:text-[#a07c1e] transition-colors"
                                >
                                    <span>Retain Legal Services</span>
                                    <ArrowUpRight className="h-4 w-4 text-[#c59b27]" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* ------------------ CTA SECTION ------------------ */}
            <section className="py-20 bg-[#f7f5f0]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <div className="border border-[#1a2332] bg-[#1a2332] text-white p-10 sm:p-16 max-w-4xl mx-auto shadow-xl">
                        <div className="h-0.5 w-12 bg-[#c59b27] mx-auto mb-4" />
                        <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal uppercase tracking-wide">
                            SCHEDULE A CONFIDENTIAL CONSULTATION
                        </h3>
                        <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
                            Discuss your matter directly with our legal practitioners at our Nairobi chambers or via virtual counsel.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center bg-[#c59b27] hover:bg-[#b08920] text-white px-8 py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all"
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