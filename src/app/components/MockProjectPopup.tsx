//app/components/MockProjectPopup.tsx
"use client";

import { useState, useEffect } from "react";
import { FaInfoCircle, FaTimes, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function MockProjectPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds delay
        const timer = setTimeout(() => {
            setIsVisible(true);
            setIsAnimating(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 300); // Wait for animation to complete
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4
                       transition-all duration-300 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
        }`}>

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className={`relative bg-white rounded-3xl max-w-md w-full shadow-2xl
                           transform transition-all duration-300 ${
                isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
            }`}>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200
                             rounded-full flex items-center justify-center text-slate-600
                             hover:text-slate-800 transition-all duration-200 hover:scale-110"
                    aria-label="Close notification"
                >
                    <FaTimes className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="p-6 border-b border-blue-100">
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700
                                      rounded-xl flex items-center justify-center text-white">
                            <FaInfoCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Demo Project Notice</h3>
                            <p className="text-sm text-blue-600 font-medium">Portfolio Showcase</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                        <p className="text-slate-700 leading-relaxed">
                            <span className="font-bold text-blue-700">This is a mock project</span> created
                            for portfolio demonstration purposes. While the design and functionality are real,
                            this is not an actual business website.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <FaCode className="text-blue-600 text-lg mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Built With</h4>
                                <p className="text-sm text-slate-600">Next.js 15, TypeScript, Tailwind CSS</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <FaExternalLinkAlt className="text-blue-600 text-lg mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Purpose</h4>
                                <p className="text-sm text-slate-600">Showcasing modern web design and development skills</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleClose}
                            className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white
                                     font-semibold rounded-xl transition-all duration-200
                                     hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Got It!
                        </button>
                        <a
                            href="https://setapartdesigns.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 bg-white hover:bg-blue-50 text-blue-700
                                     font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300
                                     transition-all duration-200 hover:scale-105 active:scale-95
                                     text-center"
                        >
                            View More Work
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}