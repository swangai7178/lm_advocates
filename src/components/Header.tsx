"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scale, Menu, X, ArrowRight } from "lucide-react";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/attorneys", label: "Our Attorneys" },
    { href: "/contact", label: "Contact Us" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-[#fcfbf8]/95 backdrop-blur-md border-b border-[#e8e3d9] text-[#1a2332]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border border-[#dcd5c9] bg-[#f5f1e8] text-[#c59b27] group-hover:border-[#c59b27] transition-colors shrink-0">
                            <Scale className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-[0.15em] sm:tracking-[0.18em] text-[#1a2332] font-semibold uppercase leading-none">
                LM & COMPANY
              </span>
                            <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.2em] sm:tracking-[0.25em] text-[#c59b27] uppercase mt-1">
                Advocates &bull; Nairobi
              </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-[0.15em] font-medium text-stone-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-[#c59b27] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Action Button */}
                    <div className="hidden sm:flex items-center">
                        <Link
                            href="/consultation"
                            className="bg-[#1a2332] hover:bg-[#28354a] text-white px-4 sm:px-5 py-2.5 text-xs uppercase font-semibold tracking-[0.12em] transition-colors rounded-none shadow-sm"
                        >
                            Schedule A Call
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-[#1a2332] hover:text-[#c59b27] focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#fcfbf8] px-6 py-6 transition-all duration-300">
                    <div>
                        <div className="flex items-center justify-between pb-6 border-b border-[#e8e3d9]">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5"
                            >
                                <div className="flex h-9 w-9 items-center justify-center border border-[#dcd5c9] bg-[#f5f1e8] text-[#c59b27]">
                                    <Scale className="h-4 w-4" />
                                </div>
                                <span className="font-serif text-base tracking-[0.15em] text-[#1a2332] font-semibold uppercase">
                  LM & COMPANY
                </span>
                            </Link>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-stone-700 hover:text-[#c59b27]"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="mt-8 flex flex-col space-y-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1a2332] hover:text-[#c59b27] transition-colors flex items-center justify-between py-1"
                                >
                                    <span>{link.label}</span>
                                    <ArrowRight className="h-4 w-4 text-stone-400" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="pt-6 border-t border-[#e8e3d9] space-y-4">
                        <Link
                            href="/consultation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full bg-[#1a2332] text-white text-center py-3 text-xs uppercase font-semibold tracking-[0.15em]"
                        >
                            Schedule A Call
                        </Link>
                        <div className="text-center text-[11px] text-stone-500 tracking-wider">
                            15th Floor, View Park Towers, Nairobi
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}