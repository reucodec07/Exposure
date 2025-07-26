//app/components/About.tsx
"use client";

import { FaCheckCircle, FaAward, FaClock, FaShieldAlt } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
                <div
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)]"
                    style={{ backgroundSize: '50px 50px' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                            About Us
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-blue-600 block">Illuminating Businesses</span>
                        <span className="text-slate-800 block">Since Years</span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-slate-600 leading-relaxed text-lg">
                                <span className="text-blue-600 font-bold text-xl">Pixel Boards</span> is
                                your trusted expert in cutting-edge signage solutions that make your
                                business shine brighter than ever before.
                            </p>
                        </div>

                        <div className="space-y-6">
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
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg
                                                      shadow-blue-500/50 group-hover:scale-110 transition-transform duration-200" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-1">{feature.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                            <p className="text-blue-800 font-medium italic text-lg text-center">
                                &#34;No project is too big or too small – we bring your vision to light!&#34;
                            </p>
                        </div>
                    </div>

                    {/* Right Stats */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        {[
                            { number: "500+", label: "Projects Completed", icon: "📈" },
                            { number: "24/7", label: "Sign Visibility", icon: "🌟" },
                            { number: "100%", label: "Client Satisfaction", icon: "😊" },
                            { number: "UK", label: "Wide Coverage", icon: "🗺️" },
                        ].map((stat, index) => (
                            <div key={index}
                                 className="bg-white border border-blue-200 rounded-2xl p-6 text-center
                                          hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300
                                          hover:-translate-y-1 group">
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm font-medium text-slate-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-3xl p-8 lg:p-12 mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-8">
                        <FaCheckCircle className="text-blue-600 text-xl" />
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Why Choose Pixel Boards?</h3>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                            {[
                                "Free consultation & design mockups to visualize your ideas",
                                "Competitive pricing with no hidden costs – transparent quotes",
                                "Fast turnaround time (5-7 days) without compromising quality",
                                "Professional installation by our experienced team",
                                "1-year warranty on all products with dedicated support",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3 py-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-slate-700 leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {[
                        { icon: FaShieldAlt, text: "Licensed & Insured", color: "text-blue-600" },
                        { icon: FaClock, text: "Fast Turnaround", color: "text-blue-600" },
                        { icon: FaAward, text: "Quality Guaranteed", color: "text-blue-600" }
                    ].map((badge, index) => (
                        <div key={index}
                             className="flex items-center space-x-3 bg-white border border-blue-200
                                      rounded-full px-6 py-3 hover:shadow-lg hover:shadow-blue-500/10
                                      transition-all duration-300 hover:-translate-y-1 group">
                            <badge.icon className={`${badge.color} text-lg group-hover:scale-110 transition-transform duration-200`} />
                            <span className="font-medium text-slate-700">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}