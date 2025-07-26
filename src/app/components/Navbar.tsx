//app/components/Navbar.tsx
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
    FaBars,
    FaTimes,
    FaWhatsapp
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
    const [mobileOpen, setMobileOpen] = useState(false);

    // Intersection Observer for active section detection
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = ['hero', 'about', 'services', 'gallery', 'reviews', 'contact'];
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Desktop/Tablet Vertical Sidebar */}
            <nav className="fixed left-0 top-0 h-full bg-white border-r border-blue-200 shadow-lg z-50
                     lg:w-64 md:w-16 hidden md:flex flex-col transition-all duration-300">

                {/* Logo Section */}
                <div className="p-4 lg:p-6 border-b border-blue-100">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden
                          border-2 border-blue-200 flex-shrink-0">
                            <Image
                                src="https://res.cloudinary.com/dub5eqaqo/image/upload/v1753470111/pixelboards_pcnjlb.png"
                                alt="Pixel Boards"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-lg font-bold text-blue-900 leading-tight">
                                Pixel Image Goa
                            </h1>
                            <p className="text-xs text-blue-600 font-medium">
                                LED Signage Experts
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6">
                    <nav className="space-y-2 px-3 lg:px-4">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            const IconComponent = link.icon;

                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl
                           transition-all duration-200 group relative overflow-hidden
                           ${isActive
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                        : 'text-blue-700 hover:bg-blue-50 hover:text-blue-900'
                                    }`}
                                >
                                    <IconComponent className={`w-5 h-5 flex-shrink-0 transition-transform duration-200
                                          ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                                    <span className="hidden lg:block font-medium text-sm">
                    {link.name}
                  </span>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <div className="absolute right-2 w-2 h-2 bg-white rounded-full lg:hidden" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* CTA Button */}
                <div className="p-3 lg:p-4 border-t border-blue-100">
                    <a
                        href="https://wa.me/919850718413"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl
                     p-3 lg:px-4 lg:py-3 transition-all duration-200
                     flex items-center justify-center lg:justify-start space-x-2
                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        <FaWhatsapp className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="hidden lg:block font-semibold text-sm">Get Quote</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-xl p-3
                 shadow-lg border border-blue-200 text-blue-700 hover:text-blue-900
                 transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
                {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 z-40">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl
                        transform transition-transform duration-300">

                        {/* Header */}
                        <div className="p-6 border-b border-blue-100">
                            <div className="flex items-center space-x-4">
                                <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-200">
                                    <Image
                                        src="https://res.cloudinary.com/dub5eqaqo/image/upload/v1753470111/pixelboards_pcnjlb.png"
                                        alt="Pixel Boards"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-blue-900">Pixel Image Goa</h1>
                                    <p className="text-sm text-blue-600 font-medium">LED Signage Experts</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="py-6 px-4 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.slice(1);
                                const IconComponent = link.icon;

                                return (
                                    <button
                                        key={link.name}
                                        onClick={() => handleNavClick(link.href)}
                                        className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl
                             transition-all duration-200 text-left
                             ${isActive
                                            ? 'bg-blue-500 text-white shadow-lg'
                                            : 'text-blue-700 hover:bg-blue-50'
                                        }`}
                                    >
                                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                                        <span className="font-medium">{link.name}</span>
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="px-4 pb-6">
                            <a
                                href="https://wa.me/919850718413"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl
                         px-6 py-4 transition-all duration-200
                         flex items-center justify-center space-x-3
                         shadow-lg hover:shadow-xl font-semibold"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                <span>Get Free Quote</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content spacer for desktop */}
            <div className="hidden md:block lg:w-64 md:w-16" />
        </>
    );
}