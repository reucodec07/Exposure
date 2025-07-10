export default function About() {
    return (
        <section className="py-20 about-bg-gradient relative overflow-hidden" id="about">
            {/* Background LED grid effect */}
            <div className="absolute inset-0 opacity-10">
                <div className="led-grid-pattern absolute inset-0"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-blue-animated">
                            Illuminating Goa Since Years
                        </span>
                    </h2>
                    <div className="w-24 h-1 mx-auto mt-4 gradient-bar"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            <span className="text-2xl font-bold gradient-text-blue">Pixel Image | LED Board Goa</span>
                            <span className="block mt-2">is Goa's trusted expert in cutting-edge signage solutions that make your business shine brighter.</span>
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                                <p className="text-gray-400">
                                    <span className="text-white font-semibold">Expert Craftsmanship:</span> Years of experience creating eye-catching LED boards, ACP paneling, vehicle displays, and custom fabrications
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                                <p className="text-gray-400">
                                    <span className="text-white font-semibold">In-House Production:</span> State-of-the-art machinery and technology for precision manufacturing
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                                <p className="text-gray-400">
                                    <span className="text-white font-semibold">Complete Solutions:</span> From creative design to fast delivery and professional installation
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-blue-300 font-medium italic border-l-4 border-blue-500 pl-4">
                            "No project is too big or too small – we bring your vision to light!"
                        </p>
                    </div>

                    <div className="relative">
                        {/* Stats cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="about-stats-card border-blue-500/20">
                                <div className="about-stats-gradient">500+</div>
                                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
                            </div>

                            <div className="about-stats-card border-cyan-500/20">
                                <div className="about-stats-gradient-alt">24/7</div>
                                <div className="text-gray-400 text-sm mt-1">Sign Visibility</div>
                            </div>

                            <div className="about-stats-card border-blue-500/20">
                                <div className="about-stats-gradient">100%</div>
                                <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
                            </div>

                            <div className="about-stats-card border-cyan-500/20">
                                <div className="about-stats-gradient-alt">Goa</div>
                                <div className="text-gray-400 text-sm mt-1">Wide Coverage</div>
                            </div>
                        </div>

                        {/* Decorative glow effect */}
                        <div className="about-stats-glow"></div>
                    </div>
                </div>

                {/* Trust badges */}
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    {[ "Licensed & Insured", "Fast Turnaround", "Quality Guaranteed" ].map(label => (
                        <div className="flex items-center space-x-2 text-gray-400" key={label}>
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
