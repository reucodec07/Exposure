// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FaHome,
    FaUser,
    FaCog,
    FaImages,
    FaStar,
    FaEnvelope,
    FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
    { name: "Home", href: "#hero", icon: FaHome },
    { name: "About", href: "#about", icon: FaUser },
    { name: "Services", href: "#services", icon: FaCog },
    { name: "Gallery", href: "#gallery", icon: FaImages },
    { name: "Reviews", href: "#reviews", icon: FaStar },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -50% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const sectionIds = [
            "hero",
            "about",
            "services",
            "gallery",
            "reviews",
            "contact",
        ];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (href: string) => {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Vertical Sidebar - All Screen Sizes */}
            <nav
                className="fixed left-0 top-0 h-full bg-white border-r border-blue-200
                   shadow-lg z-50 w-16 md:w-64 flex flex-col transition-all duration-300"
            >
                {/* Logo */}
                <div className="p-3 md:p-4 lg:p-6 border-b border-blue-100">
                    <div className="flex items-center justify-center md:justify-start md:space-x-3">
                        <div
                            className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden
                         border-2 border-blue-200 flex-shrink-0"
                        >
                            <Image
                                src="https://res.cloudinary.com/dub5eqaqo/image/upload/v1753470111/pixelboards_pcnjlb.png"
                                alt="Pixel Boards"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Logo text - only on tablet/desktop */}
                        <div className="hidden md:block">
                            <h1 className="text-lg font-bold text-blue-900 leading-tight">
                                Pixel Boards
                            </h1>
                            <p className="text-xs text-blue-600 font-medium">
                                Billboards and more...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-4 md:py-6">
                    <nav className="space-y-1 md:space-y-2 px-2 md:px-3 lg:px-4">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            const IconComp = link.icon;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`w-full flex items-center justify-center md:justify-start
                              md:space-x-3 px-2 md:px-4 py-3 rounded-xl transition-all duration-200
                              group relative overflow-hidden ${
                                        isActive
                                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                            : "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
                                    }`}
                                    title={link.name} // Tooltip for mobile icons
                                >
                                    {/* Icon - always visible */}
                                    <IconComp className="w-5 h-5 flex-shrink-0" />

                                    {/* Text label - only on tablet/desktop */}
                                    <span className="hidden md:block font-medium text-sm">
                                        {link.name}
                                    </span>

                                    {/* Active indicator for mobile */}
                                    {isActive && (
                                        <div className="md:hidden absolute right-1 w-5 h-5 border-r" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* CTA Button */}
                <div className="p-2 md:p-3 lg:p-4 border-t border-blue-100">
                    <a
                        href="https://wa.me/441234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white hover:bg-blue-100 text-white rounded-xl
                       p-3 md:px-4 md:py-3 transition-all duration-200 flex items-center
                       justify-center md:space-x-2 shadow-lg hover:shadow-xl
                       hover:scale-105 active:scale-95"
                        title="Get Quote via WhatsApp"
                    >
                        <FaWhatsapp className="w-4 h-4 lg:w-5 lg:h-5" />
                        {/* Text only on tablet/desktop */}
                        <span className="hidden md:block font-semibold text-sm">
                            Get Quote
                        </span>
                    </a>
                </div>
            </nav>

            {/* Spacer for content - responsive width */}
            <div className="w-16 md:w-64" />
        </>
    );
}