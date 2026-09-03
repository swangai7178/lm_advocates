import { Metadata } from 'next';
import Link from 'next/link';
import { practiceAreas } from '@/data/practiceAreas';
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Award,
  Briefcase,
  Lock,
  Clock,
  Building2,
  ArrowUpRight, MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LM & Company Advocates | Practical Legal Counsel & Strategic Solutions',
  description: 'A modern Kenyan law practice offering practical, commercially conscious legal services in Nairobi.',
};

export default function HomePage() {
  return (
      <div className="flex flex-col min-h-screen bg-[#fcfbf8] text-slate-800 font-sans selection:bg-[#c59b27] selection:text-white">

        {/* ------------------ HERO SECTION ------------------ */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#e8e3d9] bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ed] to-[#fcfbf8] overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d6cebe_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Main Content Grid: Text on Left, Image Frame on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Column - Headline & CTAs */}
              <div className="lg:col-span-7">
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-2 border border-[#dcd5c9] bg-[#f5f1e8] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c59b27] mb-6">
                  <span className="h-1.5 w-1.5 bg-[#c59b27] rounded-full" />
                  Advocates &bull; Legal Consultants &bull; Commissioners for Oaths
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1a2332] leading-[1.08] uppercase">
                  PRACTICAL LEGAL <br />
                  <span className="italic font-light text-stone-500">COUNSEL.</span>
                </h1>

                {/* Sub-headline bar */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-0.5 w-12 sm:w-16 bg-[#c59b27] shrink-0" />
                  <p className="font-serif text-base sm:text-xl tracking-[0.15em] text-[#1a2332] uppercase">
                    Strategic Solutions for Complex Realities
                  </p>
                </div>

                <p className="mt-6 text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed tracking-wide font-light">
                  A modern Kenyan law practice delivering commercially conscious, client-focused legal services to corporate entities, investors, institutions, and high-net-worth families in Nairobi.
                </p>

                {/* CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                      href="/consultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#1a2332] hover:bg-[#28354a] text-white px-8 py-4 text-xs uppercase font-semibold tracking-[0.15em] transition-all shadow-sm"
                  >
                    Schedule A Call <ArrowUpRight className="h-4 w-4 text-[#c59b27]" />
                  </Link>
                  <Link
                      href="/practice-areas"
                      className="inline-flex items-center justify-center gap-2 border border-[#1a2332] bg-transparent hover:bg-[#1a2332] hover:text-white text-[#1a2332] px-8 py-4 text-xs uppercase font-semibold tracking-[0.15em] transition-all"
                  >
                    Explore Practice Areas
                  </Link>
                </div>
              </div>

              {/* Right Column - Framing Legal Photography */}
              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                {/* Decorative Gold Backing Accent */}
                <div className="absolute -inset-2 border border-[#c59b27]/40 translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />

                <div className="relative border border-[#e8e3d9] bg-[#f7f5f0] p-3 shadow-md">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
                    <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
                        alt="LM & Company Advocates Law Chambers"
                        className="h-full w-full object-cover grayscale opacity-90 contrast-125 transition-transform duration-700 hover:scale-105"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 via-transparent to-transparent" />

                    {/* Floating Bottom Badge inside Image */}
                    <div className="absolute bottom-4 left-4 right-4 border border-white/20 bg-[#1a2332]/90 backdrop-blur-md p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="border border-[#c59b27] bg-[#c59b27]/20 p-2 text-[#c59b27]">
                          <Scale className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-serif text-xs uppercase tracking-widest text-[#c59b27] font-semibold">
                            Nairobi Chambers
                          </p>
                          <p className="text-[11px] text-stone-300 tracking-wide font-light flex items-center gap-1 mt-0.5">
                            <MapPin className="h-3 w-3 text-stone-400" />
                            View Park Towers, 15th Floor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Top Badge */}
                  <div className="absolute -top-4 -left-4 border border-[#e8e3d9] bg-[#fcfbf8] px-4 py-2 shadow-sm hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#1a2332] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#c59b27]" />
                    High Court Practice
                  </div>
                </div>
              </div>

            </div>

            {/* Key Metrics Row */}
            <div className="mt-16 sm:mt-24 grid grid-cols-2 gap-8 border-t border-[#e8e3d9] pt-10 sm:grid-cols-4">
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1a2332] font-medium">6+ Years</p>
                <p className="mt-2 text-[11px] font-medium text-stone-500 uppercase tracking-[0.18em]">
                  Practice Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1a2332] font-medium">LL.M.</p>
                <p className="mt-2 text-[11px] font-medium text-stone-500 uppercase tracking-[0.18em]">
                  Master of Laws Leadership
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1a2332] font-medium">15th Floor</p>
                <p className="mt-2 text-[11px] font-medium text-stone-500 uppercase tracking-[0.18em]">
                  View Park Towers, Nairobi
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1a2332] font-medium">Full Spectrum</p>
                <p className="mt-2 text-[11px] font-medium text-stone-500 uppercase tracking-[0.18em]">
                  Corporate & Private Advisory
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ------------------ FIRM OVERVIEW SECTION ------------------ */}
        <section className="py-24 bg-[#fcfbf8] border-b border-[#e8e3d9]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left Column Heading */}
              <div className="lg:col-span-5">
                <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                About the Firm
              </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase leading-tight tracking-wide">
                  THE MOST TRUSTED <br />
                  <span className="text-stone-500">LAW FIRM</span>
                </h2>
              </div>

              {/* Right Column Body */}
              <div className="lg:col-span-7 space-y-6 text-stone-600 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                <p>
                  LM & Company Advocates is a premier Kenyan law practice offering practical, commercially conscious, and client-focused legal solutions across Nairobi and East Africa.
                </p>
                <p>
                  We serve as a trusted partner for clients requiring dependable counsel in high-stakes legal matters—spanning corporate structuring, regulatory compliance, commercial dispute resolution, conveyancing, employment law, and succession planning.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ------------------ OPERATING PRINCIPLES GRID ------------------ */}
        <section className="py-24 bg-[#f7f5f0] border-b border-[#e8e3d9]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
              Our Approach
            </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#1a2332] font-normal uppercase tracking-wider">
                How We Work With Clients
              </h2>
              <p className="mt-4 text-sm text-stone-600 font-light leading-relaxed">
                Our approach to client service is built around six operating principles that shape the way every matter is handled, from first instruction to final resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Client-Centred Advice",
                  desc: "Every matter begins with a clear understanding of the client's objectives, circumstances, risk profile and desired outcome."
                },
                {
                  icon: Scale,
                  title: "Practical Solutions",
                  desc: "Advice does not merely identify legal problems; it is directed towards workable, implementable solutions."
                },
                {
                  icon: Briefcase,
                  title: "Commercial Awareness",
                  desc: "Legal advice takes account of the client's business, financial considerations, timelines and commercial objectives."
                },
                {
                  icon: Award,
                  title: "Prevention & Risk Management",
                  desc: "We assist clients to identify and address legal risks before they mature into disputes or financial liabilities."
                },
                {
                  icon: Clock,
                  title: "Responsiveness",
                  desc: "Timely communication, accessibility and keeping clients informed throughout the life of a matter."
                },
                {
                  icon: Lock,
                  title: "Confidentiality & Professionalism",
                  desc: "Strict professional standards, confidentiality, integrity and discretion govern every engagement."
                }
              ].map((principle, index) => (
                  <div
                      key={index}
                      className="group relative border border-[#e8e3d9] border-t-2 border-t-[#c59b27] bg-[#fcfbf8] p-8 transition-all shadow-sm hover:shadow-md"
                  >
                    <principle.icon className="h-7 w-7 text-[#c59b27] mb-5" />
                    <h3 className="font-serif text-lg font-medium text-[#1a2332] tracking-wide uppercase">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed tracking-wide font-light">
                      {principle.desc}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>


        {/* ------------------ CORE PRACTICE AREAS ------------------ */}
        <section className="py-24 bg-[#fcfbf8] border-b border-[#e8e3d9]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                Legal Expertise
              </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase tracking-wide">
                  PRACTICE AREAS
                </h2>
              </div>
              <Link
                  href="/practice-areas"
                  className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a2332] hover:text-[#c59b27] transition-colors"
              >
                View All Disciplines <ArrowRight className="h-4 w-4 text-[#c59b27]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {practiceAreas.slice(0, 3).map((area) => (
                  <div
                      key={area.id}
                      className="flex flex-col justify-between border border-[#e8e3d9] border-t-2 border-t-[#c59b27] bg-[#f8f6f1] p-8 transition-all hover:shadow-md"
                  >
                    <div>
                      <div className="p-3 w-fit border border-[#e8e3d9] bg-[#fcfbf8] text-[#c59b27] mb-6">
                        <Building2 className="h-6 w-6" />
                      </div>

                      <h3 className="font-serif text-xl font-medium text-[#1a2332] tracking-wide uppercase">
                        {area.title}
                      </h3>
                      <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed tracking-wide font-light">
                        {area.description}
                      </p>
                    </div>

                    <Link
                        href={`/practice-areas/${area.id}`}
                        className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c59b27] hover:text-[#a07c1e] transition-colors"
                    >
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
              ))}
            </div>
          </div>
        </section>


        {/* ------------------ MANAGING PARTNER SPOTLIGHT ------------------ */}
        <section className="py-24 bg-[#f7f5f0] border-b border-[#e8e3d9]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#fcfbf8] p-8 sm:p-14 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Profile Header / Badges */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="h-0.5 w-12 bg-[#c59b27] mb-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c59b27]">
                    Firm Leadership
                  </span>
                    <h3 className="mt-3 font-serif text-3xl sm:text-5xl text-[#1a2332] font-normal uppercase tracking-tight">
                      LUCIA MWIKALI <br />
                      <span className="text-stone-500">MUSYOKA</span>
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#c59b27] font-medium">
                      Managing Partner &bull; Advocate of the High Court
                    </p>
                  </div>

                  {/* Tags / Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                  <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    Advocate
                  </span>
                    <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    Partner
                  </span>
                    <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    LL.M. (London)
                  </span>
                    <span className="border border-[#dcd5c9] bg-[#f5f1e8] px-3 py-1 text-[11px] uppercase tracking-wider text-[#1a2332]">
                    LL.B. (Nairobi)
                  </span>
                  </div>
                </div>

                {/* Right Profile Details Grid */}
                <div className="lg:col-span-7 space-y-8">
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed tracking-wide font-light">
                    Lucia Mwikali Musyoka brings over six years of practice experience in corporate advisory, commercial transactions, and courtroom advocacy. She manages complex legal mandates from initial transaction structuring through to drafting, negotiation, and judicial resolution.
                  </p>

                  {/* Sub-cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#e8e3d9]">
                    <div>
                      <div className="h-0.5 w-8 bg-[#c59b27] mb-3" />
                      <h4 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                        Education
                      </h4>
                      <p className="mt-2 text-[11px] text-stone-600 leading-relaxed">
                        LL.M., University of East London<br />
                        LL.B., University of Nairobi
                      </p>
                    </div>

                    <div>
                      <div className="h-0.5 w-8 bg-[#c59b27] mb-3" />
                      <h4 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                        Standing
                      </h4>
                      <p className="mt-2 text-[11px] text-stone-600 leading-relaxed">
                        Advocate of the High Court of Kenya<br />
                        6+ Years Legal Practice
                      </p>
                    </div>

                    <div>
                      <div className="h-0.5 w-8 bg-[#c59b27] mb-3" />
                      <h4 className="font-serif text-xs uppercase tracking-[0.18em] text-[#1a2332] font-semibold">
                        Focus
                      </h4>
                      <p className="mt-2 text-[11px] text-stone-600 leading-relaxed">
                        Corporate Law, Real Estate,<br />
                        Dispute Resolution & Litigation
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ------------------ RETAINERS & CALL TO ACTION ------------------ */}
        <section className="py-24 bg-[#fcfbf8]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border border-[#1a2332] bg-[#1a2332] text-white p-10 sm:p-20 text-center max-w-5xl mx-auto relative shadow-xl">
              <div className="h-0.5 w-16 bg-[#c59b27] mx-auto mb-6" />
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase tracking-wider">
                ONE FIRM. COMPREHENSIVE LEGAL SOLUTIONS.
              </h2>
              <p className="mt-6 text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                Clients often encounter legal issues that are interconnected. We are structured to provide coordinated advice across related practice areas — giving clients the convenience and continuity of a single trusted legal partner.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <Link
                    href="/consultation"
                    className="bg-[#c59b27] hover:bg-[#b08920] text-white px-8 py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all"
                >
                  Book A Consultation
                </Link>
                <Link
                    href="/contact"
                    className="border border-stone-400 hover:border-white hover:bg-white hover:text-[#1a2332] text-white px-8 py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all"
                >
                  Contact Our Offices
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
  );
}