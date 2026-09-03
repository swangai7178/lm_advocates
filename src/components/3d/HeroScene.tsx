'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the 3D Hero Scene with SSR disabled safely inside a Client Component
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false });

export default function HeroSectionClient() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 text-white">
            <HeroScene />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />

            <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 border border-amber-500/20 mb-6">
                    Advocates Legal Consultants Commissioners for Oaths
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
                    Practical Legal Counsel. <span className="text-amber-500">Strategic Solutions.</span> Trusted Representation.
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    A modern Kenyan law practice offering commercially conscious, client-focused legal services to businesses, investors, and families in Nairobi.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/consultation"
                        className="rounded-lg bg-amber-500 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 shadow-lg shadow-amber-500/20"
                    >
                        Book a Confidential Consultation
                    </Link>
                    <Link
                        href="/practice-areas"
                        className="rounded-lg border border-slate-700 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Explore Practice Areas
                    </Link>
                </div>
            </div>
        </section>
    );
}