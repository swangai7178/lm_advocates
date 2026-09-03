'use client';

import { useState } from 'react';
import { CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export default function ConsultationPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        practiceArea: 'Corporate & Commercial Law',
        summary: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Firm WhatsApp phone number (format without + or spaces)
        const whatsappNumber = '254710917401';

        // Construct formatted message
        const message =
            `*NEW CONSULTATION REQUEST*\n` +
            `----------------------------------------\n` +
            `*Full Name:* ${formData.fullName}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Email:* ${formData.email}\n` +
            `*Practice Area:* ${formData.practiceArea}\n\n` +
            `*Matter Summary:*\n${formData.summary}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#fcfbf8] text-slate-800 font-sans selection:bg-[#c59b27] selection:text-white">

            {/* ------------------ HERO / HEADER SECTION ------------------ */}
            <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-[#e8e3d9] bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ed] to-[#fcfbf8] overflow-hidden">
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#d6cebe_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

                <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    {/* Top Gold Accent Line */}
                    <div className="h-0.5 w-16 bg-[#c59b27] mx-auto mb-6" />

                    <div className="inline-flex items-center gap-2 border border-[#dcd5c9] bg-[#f5f1e8] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#c59b27] mb-6">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#c59b27]" />
                        Confidential Legal Inquiry
                    </div>

                    <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1a2332] uppercase leading-tight">
                        BOOK A CONFIDENTIAL <br />
                        <span className="italic font-light text-stone-500">CONSULTATION</span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed tracking-wide font-light">
                        Share your legal requirements below. Your inquiry will be forwarded directly to our legal team via secure WhatsApp dispatch.
                    </p>
                </div>
            </section>

            {/* ------------------ FORM SECTION ------------------ */}
            <section className="py-16 lg:py-24 bg-[#fcfbf8]">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">

                    {submitted ? (
                        <div className="relative border border-emerald-200 bg-emerald-50/80 p-10 text-center shadow-sm">
                            <div className="h-1 w-full bg-emerald-600 absolute top-0 left-0" />
                            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
                            <h2 className="font-serif text-2xl font-normal text-emerald-950 uppercase tracking-wide">
                                Inquiry Dispatched
                            </h2>
                            <p className="mt-3 text-xs sm:text-sm text-emerald-800 font-light tracking-wide leading-relaxed max-w-md mx-auto">
                                Thank you for reaching out to LM & Company Advocates. If WhatsApp did not open automatically, your request details have been prepared for dispatch.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 hover:text-emerald-900 transition-colors"
                            >
                                Submit Another Request
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="relative border border-[#e8e3d9] border-t-4 border-t-[#c59b27] bg-[#f7f5f0] p-8 sm:p-12 space-y-6 shadow-sm"
                        >
                            <div className="mb-2">
                                <div className="h-0.5 w-12 bg-[#c59b27] mb-3" />
                                <h2 className="font-serif text-xl sm:text-2xl text-[#1a2332] font-normal uppercase tracking-wide">
                                    Consultation Details
                                </h2>
                            </div>

                            {/* Name & Phone */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#1a2332] mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="e.g. Jane Doe"
                                        className="w-full bg-[#fcfbf8] border border-[#dcd5c9] px-4 py-3 text-xs sm:text-sm text-[#1a2332] placeholder-stone-400 focus:border-[#c59b27] focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#1a2332] mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+254 700 000 000"
                                        className="w-full bg-[#fcfbf8] border border-[#dcd5c9] px-4 py-3 text-xs sm:text-sm text-[#1a2332] placeholder-stone-400 focus:border-[#c59b27] focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#1a2332] mb-2">
                                    Email Address *
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="client@example.com"
                                    className="w-full bg-[#fcfbf8] border border-[#dcd5c9] px-4 py-3 text-xs sm:text-sm text-[#1a2332] placeholder-stone-400 focus:border-[#c59b27] focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Practice Area Select */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#1a2332] mb-2">
                                    Practice Area
                                </label>
                                <select
                                    name="practiceArea"
                                    value={formData.practiceArea}
                                    onChange={handleChange}
                                    className="w-full bg-[#fcfbf8] border border-[#dcd5c9] px-4 py-3 text-xs sm:text-sm text-[#1a2332] focus:border-[#c59b27] focus:outline-none transition-colors cursor-pointer"
                                >
                                    <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
                                    <option value="Real Estate & Conveyancing">Real Estate & Conveyancing</option>
                                    <option value="Dispute Resolution & Litigation">Dispute Resolution & Litigation</option>
                                    <option value="Immigration & Global Mobility">Immigration & Global Mobility</option>
                                    <option value="Succession & Estate Planning">Succession & Estate Planning</option>
                                    <option value="Other Legal Service">Other Legal Service</option>
                                </select>
                            </div>

                            {/* Matter Summary */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#1a2332] mb-2">
                                    Matter Summary *
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    name="summary"
                                    value={formData.summary}
                                    onChange={handleChange}
                                    placeholder="Briefly describe your legal matter or questions..."
                                    className="w-full bg-[#fcfbf8] border border-[#dcd5c9] px-4 py-3 text-xs sm:text-sm text-[#1a2332] placeholder-stone-400 focus:border-[#c59b27] focus:outline-none transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs uppercase tracking-[0.18em] py-4 transition-all shadow-md hover:shadow-lg"
                            >
                                <MessageSquare className="h-4 w-4" />
                                Send Request via WhatsApp
                            </button>

                            <p className="text-[11px] text-stone-500 text-center font-light tracking-wide pt-2">
                                Submitting this form opens WhatsApp with a pre-formatted message directed to our client reception desk (+254 710 917 401).
                            </p>
                        </form>
                    )}

                </div>
            </section>

        </div>
    );
}