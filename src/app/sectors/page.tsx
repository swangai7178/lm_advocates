import { Metadata } from 'next';
import Link from 'next/link';
import { Building, Briefcase, CheckCircle2, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Industries & Business Services | LM & Company Advocates',
    description: 'Tailored legal solutions across real estate, banking, technology, manufacturing, and external legal department retainers.',
};

const sectors = [
    "Real Estate & Property Development",
    "Construction",
    "Banking & Financial Services",
    "Insurance",
    "Healthcare",
    "Pharmaceuticals",
    "Technology",
    "Professional Services",
    "Retail & Consumer Businesses",
    "Manufacturing",
    "Logistics & Transport",
    "Hospitality",
    "Non-Governmental Organisations",
    "Start-ups & SMEs",
    "Investment Businesses",
    "Private Clients",
    "Employers & Employees",
    "Foreign Investors & Expatriates"
];

const retainerServices = [
    "Ongoing legal advisory",
    "Contract review & drafting",
    "Employment advisory",
    "Debt recovery",
    "Regulatory compliance",
    "Corporate governance",
    "Litigation management",
    "Property transactions & negotiations"
];

export default function SectorsPage() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-16">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Industries We Serve &amp; Business Solutions
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                    Tailored legal services designed for clients operating across a broad commercial spectrum in Kenya.
                </p>
            </div>

            {/* External Legal Department Section */}
            <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white sm:p-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                            <Briefcase className="h-4 w-4" /> Retainer Offering
                        </div>
                        <h2 className="mt-4 text-3xl font-bold">Services for Businesses</h2>
                        <p className="mt-4 text-slate-300 leading-relaxed">
                            LM &amp; Company Advocates can act as an external legal department for businesses that require access to comprehensive legal expertise without maintaining a large in-house legal function—particularly useful for SMEs and growing organisations[cite: 1].
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-amber-400"
                            >
                                Inquire About Retainer Packages
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {retainerServices.map((service, idx) => (
                            <div key={idx} className="flex items-center gap-3 rounded-xl bg-slate-800/80 p-4 border border-slate-700/60">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                                <span className="text-sm font-medium text-slate-200">{service}[cite: 1]</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sectors Grid */}
            <div className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-slate-900">Sectors &amp; Industries</h2>
                    <p className="mt-2 text-slate-600">Deep familiarity with regulatory frameworks across multiple professional landscapes.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-500/50 hover:shadow-md"
                        >
                            <div className="rounded-lg bg-amber-500/10 p-3 text-amber-600">
                                <Building className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-slate-800">{sector}[cite: 1]</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Private Clients Section Teaser */}
            <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 text-center">
                <h3 className="text-2xl font-bold text-slate-900">Services for Individuals &amp; Families</h3>
                <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                    Discreet, accessible, and personalized representation across property transactions, succession, estate planning, wills, and private family matters[cite: 1].
                </p>
                <div className="mt-6">
                    <Link
                        href="/consultation"
                        className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700"
                    >
                        Speak with a Private Client Specialist &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}