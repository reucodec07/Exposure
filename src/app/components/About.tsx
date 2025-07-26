//app/components/About.tsx
"use client";

import { FaChartLine, FaStar, FaSmile, FaMapMarkedAlt, FaShieldAlt, FaClock, FaTrophy } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4 sm:mb-6">
                        <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                            About Us
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-blue-600 block">Illuminating Businesses</span>
                        <span className="text-slate-800 block">Since Years</span>
                    </h2>

                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                <div className="block lg:grid lg:grid-cols-2 lg:gap-16 mb-12 sm:mb-16">
                    {/* Left Content */}
                    <div className="mb-8 lg:mb-0">
                        <div className="mb-6 sm:mb-8">
                            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                                <span className="text-blue-600 font-bold text-lg sm:text-xl">Pixel Boards</span> is
                                your trusted expert in cutting-edge signage solutions that make your
                                business shine brighter than ever before.
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                            {[
                                {
                                    title: "Expert Craftsmanship:",
                                    desc: "Years of experience creating eye-catching LED boards, ACP paneling, vehicle displays, and custom fabrications"
                                },
                                {
                                    title: "In-House Production:",
                                    desc: "State-of-the-art machinery and technology for precision manufacturing"
                                },
                                {
                                    title: "Complete Solutions:",
                                    desc: "From creative design to fast delivery and professional installation"
                                },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-2 mr-3 sm:mr-4">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-md" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{feature.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <p className="text-blue-800 font-medium italic text-base sm:text-lg text-center">
                                &#34;No project is too big or too small – we bring your vision to light!&#34;
                            </p>
                        </div>
                    </div>

                    {/* Right Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                        {[
                            { number: "500+", label: "Projects Completed", icon: FaChartLine, color: "text-green-600" },
                            { number: "24/7", label: "Sign Visibility", icon: FaStar, color: "text-yellow-600" },
                            { number: "100%", label: "Client Satisfaction", icon: FaSmile, color: "text-blue-600" },
                            { number: "UK", label: "Wide Coverage", icon: FaMapMarkedAlt, color: "text-purple-600" },
                        ].map((stat, index) => (
                            <div key={index}
                                 className="bg-white border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center
                                          shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center justify-center mb-2 sm:mb-3">
                                    <stat.icon className={`text-xl sm:text-2xl lg:text-3xl ${stat.color}`} />
                                </div>
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-slate-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
                    <div className="flex items-center justify-center mb-6 sm:mb-8">
                        <span className="text-blue-600 text-lg sm:text-xl mr-2 sm:mr-3">✓</span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">Why Choose Pixel Boards?</h3>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                            {[
                                "Free consultation & design mockups to visualize your ideas",
                                "Competitive pricing with no hidden costs – transparent quotes",
                                "Fast turnaround time (5-7 days) without compromising quality",
                                "Professional installation by our experienced team",
                                "1-year warranty on all products with dedicated support",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start py-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 mr-3" />
                                    <span className="text-slate-700 leading-relaxed text-sm sm:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                    {[
                        { text: "Licensed & Insured", icon: FaShieldAlt, color: "text-green-600" },
                        { text: "Fast Turnaround", icon: FaClock, color: "text-blue-600" },
                        { text: "Quality Guaranteed", icon: FaTrophy, color: "text-yellow-600" }
                    ].map((badge, index) => (
                        <div key={index}
                             className="flex items-center bg-white border border-blue-200 rounded-full
                                      px-4 sm:px-6 py-2 sm:py-3 shadow-sm hover:shadow-md
                                      transition-shadow duration-300">
                            <badge.icon className={`text-base sm:text-lg mr-2 sm:mr-3 ${badge.color}`} />
                            <span className="font-medium text-slate-700 text-sm sm:text-base">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}