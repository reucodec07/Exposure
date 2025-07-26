//app/components/WhatsAppFloatingButton.tsx

"use client";

import { FaWhatsapp, FaComment } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function WhatsAppFloatingButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Chat Bubble */}
            <div className={`absolute bottom-20 right-0 w-80 bg-white border border-blue-200 
                           rounded-2xl p-6 shadow-2xl shadow-blue-500/20 transition-all duration-300
                           ${isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700
                                      rounded-full flex items-center justify-center text-white font-bold text-sm">
                            PG
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800">Pixel Image Goa</h4>
                            <span className="text-slate-500 text-xs">Typically replies instantly</span>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <FaComment className="text-blue-500 text-lg mt-1 flex-shrink-0" />
                        <p className="text-slate-700 text-sm leading-relaxed">
                            Hi! 👋 Ready to illuminate your business? Let's chat about your signage needs!
                        </p>
                    </div>
                </div>

                {/* Arrow pointing to button */}
                <div className="absolute bottom-[-8px] right-5 w-0 h-0
                              border-l-[8px] border-r-[8px] border-t-[8px]
                              border-l-transparent border-r-transparent border-t-blue-200" />
                <div className="absolute bottom-[-6px] right-5 w-0 h-0
                              border-l-[8px] border-r-[8px] border-t-[8px]
                              border-l-transparent border-r-transparent border-t-white" />
            </div>

            {/* Main WhatsApp Button */}
            <a
                href="https://wa.me/919850718413?text=Hi%20Pixel%20Image%20Goa!%20I'm%20interested%20in%20your%20LED%20signage%20services.%20Can%20you%20please%20provide%20more%20information?"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-16 h-16
                         bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700
                         rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50
                         transition-all duration-300 hover:scale-110 active:scale-95 group
                         animate-bounce hover:animate-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-8 h-8 text-white" />

                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-full border-4 border-green-400
                              animate-ping opacity-75 group-hover:opacity-0" />

                {/* Notification Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white
                              rounded-full flex items-center justify-center text-xs font-bold
                              animate-pulse hover:animate-none">
                    1
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-green-300 rounded-full opacity-60
                                     animate-pulse group-hover:animate-ping"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${i * 60}deg) translateX(30px) translateY(-50%)`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '2s'
                            }}
                        />
                    ))}
                </div>
            </a>
        </div>
    );
}