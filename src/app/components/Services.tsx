//app/components/Services.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaLightbulb, FaCog, FaRocket } from "react-icons/fa";

const services = [
    {
        title: "LED Boards",
        img: "https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469794/pexels-roneferreira-3690005_zaazjg.jpg",
        summary: "Custom LED displays for maximum visibility.",
        description: "Get noticed with vibrant, programmable LED boards—ideal for retail, restaurants, and events. Energy efficient, easy to update, and designed to grab attention 24/7.",
        icon: FaLightbulb,
        category: "Digital"
    },
    {
        title: "Glow Sign Boards",
        img: "https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469779/pexels-christopher-farrugia-1959997-3581878_kuihyr.jpg",
        summary: "Bright backlit sign boards for brands.",
        description: "Enhance your storefront with high-brightness LED glow signs. Built with durable acrylic for excellent nighttime visibility and long-lasting impact.",
        icon: FaLightbulb,
        category: "Illuminated"
    },
    {
        title: "Fabrication Works",
        img: "https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469781/pexels-gin-patin-1357542-2692556_bjw9zw.jpg",
        summary: "Custom fabrication for displays and mounts.",
        description: "Expert metal and acrylic fabrication for unique display frames, mounts, and custom signage. Perfect for businesses needing specialized solutions.",
        icon: FaCog,
        category: "Custom"
    },
    {
        title: "Foam Boards (Sign Boards)",
        img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/kjuuliqwbqfxsek1s7us.jpg",
        summary: "Lightweight foam signs for indoor use.",
        description: "Professional, lightweight foam boards—great for store displays, exhibitions, and pop-up promotions. Easily customizable and affordable.",
        icon: FaRocket,
        category: "Indoor"
    },
    {
        title: "ACP Paneling / Cladding",
        img: "https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469780/pexels-cottonbro-5089123_wrlsqu.jpg",
        summary: "Modern ACP panels for shop exteriors.",
        description: "Upgrade your exterior with stylish, weatherproof Aluminum Composite Panel (ACP) cladding. Adds a premium look to facades and brand walls.",
        icon: FaCog,
        category: "Exterior"
    },
    {
        title: "Acrylic Fabrications",
        img: "https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469777/kate-glotova-yNBULKWPJrY-unsplash_lbbwij.jpg",
        summary: "Precision acrylic letters and signs.",
        description: "Crystal-clear acrylic solutions, including 3D lettering and illuminated logos—crafted for premium, eye-catching results.",
        icon: FaCog,
        category: "Premium"
    },
    {
        title: "Scrolling Boards",
        img: "https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469789/pexels-hatice-baran-153179658-13986019_kkcs0a.jpg",
        summary: "Programmable LED scrolling message boards.",
        description: "Fully programmable LED boards for offers, announcements, or live messages. Perfect for promotions, events, and high-traffic locations.",
        icon: FaLightbulb,
        category: "Dynamic"
    },
];

export default function Services() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Digital", "Illuminated", "Custom", "Indoor", "Exterior", "Premium", "Dynamic"];

    const filteredServices = activeCategory === "All"
        ? services
        : services.filter(service => service.category === activeCategory);

    const toggleService = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.03)_2px,transparent_2px)]"
                    style={{ backgroundSize: '80px 80px' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                            Our Services
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-blue-600">Our Services</span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                        From concept to installation, we deliver cutting-edge signage solutions
                        that make your business shine
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-200
                                     border-2 hover:scale-105 active:scale-95
                                     ${activeCategory === category
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25'
                                : 'bg-white text-slate-700 border-blue-200 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredServices.map((service, index) => (
                        <div key={index}
                             className="bg-white border border-blue-200 rounded-2xl overflow-hidden
                                      hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300
                                      hover:-translate-y-2 group">

                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 flex items-center space-x-2
                                              bg-white/90 backdrop-blur-sm border border-blue-200
                                              rounded-full px-3 py-1">
                                    <service.icon className="w-3 h-3 text-blue-600" />
                                    <span className="text-xs font-medium text-blue-800">{service.category}</span>
                                </div>
                            </div>

                            {/* Service Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">{service.summary}</p>

                                {/* Expand Button */}
                                <button
                                    onClick={() => toggleService(index)}
                                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800
                                             font-medium transition-colors duration-200"
                                    aria-expanded={openIdx === index}
                                >
                                    <span>Learn More</span>
                                    <FaChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 
                                                 ${openIdx === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-300 
                                              ${openIdx === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                                    <div className="pt-4 border-t border-blue-100">
                                        <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                                        <a href="#contact"
                                           className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700
                                                    text-white font-medium rounded-lg transition-colors duration-200">
                                            Get Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800
                              rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        Can&#39;t find what you&#39;re looking for?
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        We offer custom solutions tailored to your specific needs
                    </p>
                    <a href="#contact"
                       className="inline-flex items-center px-8 py-4 bg-white text-blue-700
                                font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200
                                hover:scale-105 active:scale-95">
                        Discuss Your Project
                    </a>
                </div>
            </div>
        </section>
    );
}