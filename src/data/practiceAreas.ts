import { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
    {
        id: "corporate-commercial",
        title: "Corporate & Commercial Law",
        description: "Assisting businesses from formation through transactions, governance, and restructuring.",
        services: [
            "Incorporation & Registration",
            "Corporate Structuring & Shareholding",
            "Shareholders' Agreements",
            "Due Diligence & Mergers"
        ],
        icon: "Building2"
    },
    {
        id: "real-estate-conveyancing",
        title: "Real Estate, Land & Conveyancing",
        description: "Guiding clients through property acquisitions, land searches, leases, and title registration.",
        services: [
            "Sale & Purchase of Property",
            "Leases & Rent-to-Own",
            "Land Searches & Due Diligence",
            "Charges, Mortgages & Discharges"
        ],
        icon: "Landmark"
    },
    {
        id: "dispute-resolution",
        title: "Dispute Resolution & Litigation",
        description: "Commercial litigation and alternative dispute resolution focused on swift, practical legal outcomes.",
        services: [
            "Civil & Commercial Disputes",
            "Debt Recovery & Credit Management",
            "Employment & Labour Disputes",
            "Mediation & Arbitration (ADR)"
        ],
        icon: "Scale"
    }
];