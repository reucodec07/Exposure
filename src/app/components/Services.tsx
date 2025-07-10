"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
    {
        title: "LED Boards",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163618/PixelImageGoa/Gallery/b4tpwwickosueg0lrzbx.jpg",
        summary: "Custom LED displays for maximum visibility.",
        description:
            "Get noticed with vibrant, programmable LED boards—ideal for retail, restaurants, and events. Energy efficient, easy to update, and designed to grab attention 24/7.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Glow Sign Boards",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/yzinorq5ueoxk6knpx34.jpg",
        summary: "Bright backlit sign boards for brands.",
        description:
            "Enhance your storefront with high-brightness LED glow signs. Built with durable acrylic for excellent nighttime visibility and long-lasting impact.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Fabrication Works",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/nkvplqxdlkvuuno1iklr.jpg",
        summary: "Custom fabrication for displays and mounts.",
        description:
            "Expert metal and acrylic fabrication for unique display frames, mounts, and custom signage. Perfect for businesses needing specialized solutions.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Frontlite Boards",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/t4doq5qxupz2plsdcu47.jpg",
        summary: "Front-lit boards for outdoor advertising.",
        description:
            "Weather-resistant boards illuminated from the front. Ideal for keeping your message clear and visible in any outdoor setting.",
        gradient: "from-yellow-500 to-orange-500"
    },
    {
        title: "Foam Boards (Sign Boards)",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/kjuuliqwbqfxsek1s7us.jpg",
        summary: "Lightweight foam signs for indoor use.",
        description:
            "Professional, lightweight foam boards—great for store displays, exhibitions, and pop-up promotions. Easily customizable and affordable.",
        gradient: "from-green-500 to-teal-500"
    },
    {
        title: "ACP Paneling / Cladding (Exterior Works)",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163616/PixelImageGoa/Gallery/zfuo2v5n4clatgu57ojj.jpg",
        summary: "Modern ACP panels for shop exteriors.",
        description:
            "Upgrade your exterior with stylish, weatherproof Aluminum Composite Panel (ACP) cladding. Adds a premium look to facades and brand walls.",
        gradient: "from-gray-600 to-gray-800"
    },
    {
        title: "Hoarding Vehicles Display Fabrication",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163616/PixelImageGoa/Gallery/rvihfiolkkqrx6g6trnc.jpg",
        summary: "Mobile advertising on vehicle hoardings.",
        description:
            "Take your message anywhere! Custom fabrication for vehicle-mounted hoardings and moving displays, built tough for the road.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        title: "Acrylic Fabrications",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163616/PixelImageGoa/Gallery/v8yvucpcdk1nscovvuvf.jpg",
        summary: "Precision acrylic letters and signs.",
        description:
            "Crystal-clear acrylic solutions, including 3D lettering and illuminated logos—crafted for premium, eye-catching results.",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        title: "Scrolling Boards",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163618/PixelImageGoa/Gallery/b4tpwwickosueg0lrzbx.jpg",
        summary: "Programmable LED scrolling message boards.",
        description:
            "Fully programmable LED boards for offers, announcements, or live messages. Perfect for promotions, events, and high-traffic locations.",
        gradient: "from-pink-500 to-red-500"
    },
];

export default function Services() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section id="services" className="py-20 bg-black relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-blue-animated">
                            Our Services
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From concept to installation, we deliver cutting-edge signage solutions that make your business shine
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4 gradient-bar"></div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <li
                            key={idx}
                            className="group relative glass-card border border-gray-700/50 hover:border-gray-600 transition-all duration-300 cursor-pointer overflow-hidden"
                            tabIndex={0}
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            onKeyPress={e => {
                                if (e.key === "Enter" || e.key === " ") setOpenIdx(openIdx === idx ? null : idx);
                            }}
                            aria-expanded={openIdx === idx}
                        >
                            {/* Hover glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Image container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={400}
                                    height={192}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    priority={idx === 0}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <h3 className={`font-bold text-xl mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3">{service.summary}</p>

                                {/* Expand button */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">Click for details</span>
                                    <div className={`bg-gradient-to-r ${service.gradient} rounded-full p-2`}>
                                        {/* No icon here anymore */}
                                    </div>
                                </div>

                                {/* Expanded description */}
                                <div className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? "max-h-40 mt-4" : "max-h-0"}`}>
                                    <div className="pt-4 border-t border-gray-700/50">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <button className={`mt-3 text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:underline`}>
                                            Get Quote →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6">
                        Can't find what you're looking for? We offer custom solutions!
                    </p>
                    <a
                        href="#contact"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Discuss Your Project
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
