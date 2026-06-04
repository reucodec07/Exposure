//app/components/Footer.tsx

"use client";

import {
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaArrowUp,
    FaStar,
    FaAward,
    FaClock
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)]"
                    style={{ backgroundSize: '80px 80px' }}
                />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                        {/* Company Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-600 mb-2">Exposure</h3>
                                <p className="text-slate-600 leading-relaxed max-w-md">
                                    Transforming your memories into timeless art with premium photography services. Your vision, our lens.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <FaStar className="text-yellow-500 text-sm" />
                                    <span className="text-sm font-medium">5.0 Rating</span>
                                </div>
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <FaAward className="text-blue-500 text-sm" />
                                    <span className="text-sm font-medium">500+ Projects</span>
                                </div>
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <FaClock className="text-green-500 text-sm" />
                                    <span className="text-sm font-medium">Fast Delivery</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-6 relative">
                                Our Services
                                <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Portrait Photography",
                                    "Wedding Coverage",
                                    "Commercial Shoots",
                                    "Event Photography",
                                    "Product Photography"
                                ].map((service, index) => (
                                    <li key={index}>
                                        <a href="#services"
                                           className="text-slate-600 hover:text-blue-600 transition-colors duration-200
                                                    hover:translate-x-1 transform inline-block">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-6 relative">
                                Get In Touch
                                <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
                            </h4>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start space-x-3">
                                    <FaPhoneAlt className="text-blue-500 text-sm mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="text-slate-500 text-xs uppercase tracking-wide block">Call Us</span>
                                        <a href="tel:+441234567890"
                                           className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                            +44 1234567890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <FaEnvelope className="text-blue-500 text-sm mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="text-slate-500 text-xs uppercase tracking-wide block">Email</span>
                                        <a href="mailto:mockprojects@setapartprojects.com"
                                           className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                            mockprojects@setapartprojects.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="text-blue-500 text-sm mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="text-slate-500 text-xs uppercase tracking-wide block">Service Area</span>
                                        <span className="text-slate-700 font-medium">United Kingdom</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h5 className="text-sm font-semibold text-slate-800 mb-3">Follow Us</h5>
                                <div className="flex space-x-3">
                                    {[
                                        { icon: FaFacebookF, href: "#", color: "hover:bg-blue-600" },
                                        { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
                                        { icon: FaLinkedinIn, href: "#", color: "hover:bg-blue-700" },
                                        { icon: FaWhatsapp, href: "https://wa.me/441234567890", color: "hover:bg-green-600" },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target={social.href.startsWith("http") ? "_blank" : undefined}
                                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className={`w-10 h-10 bg-white border border-blue-200 rounded-full 
                                                     flex items-center justify-center text-slate-600 
                                                     transition-all duration-200 hover:text-white hover:scale-110 
                                                     hover:shadow-lg ${social.color}`}
                                            aria-label={social.icon.name}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="relative z-10 border-t border-blue-200 bg-white/80 backdrop-blur-sm py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-slate-600 text-sm">
                                &copy; {currentYear} Exposure (Professional Photography). All rights reserved.
                            </p>
                            <p className="text-slate-500 text-xs mt-1">
                                Crafted with ❤️ by{" "}
                                <span className="text-blue-600 font-medium">SetApartDesigns.com</span>
                            </p>
                        </div>

                        <div className="flex items-center space-x-6 text-sm">
                            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <span className="text-slate-400">•</span>
                            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
                                Terms of Service
                            </a>
                            <span className="text-slate-400">•</span>
                            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                                Get Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 left-20 w-12 h-12 bg-blue-600 hover:bg-blue-700 
                          text-white rounded-full shadow-lg hover:shadow-xl 
                          transition-all duration-300 z-40 hover:scale-110 active:scale-95
                          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                aria-label="Scroll to top"
            >
                <FaArrowUp className="w-4 h-4 mx-auto" />
            </button>
        </footer>
    );
}