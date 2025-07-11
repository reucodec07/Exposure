"use client";

import { FaCheckCircle, FaAward, FaClock, FaShieldAlt } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="about-section">
            {/* Background Elements */}
            <div className="about-bg-grid" />
            <div className="about-bg-glow" />

            <div className="about-container">
                {/* Heading */}
                <div className="about-header">
                    <h2 className="about-title">
                        <span className="about-title-highlight">Illuminating Goa</span>
                        <span className="about-title-text">Since Years</span>
                    </h2>
                    <div className="about-title-divider" />
                </div>

                <div className="about-content">
                    {/* Left Content */}
                    <div className="about-text">
                        <p className="about-intro">
                            <span className="about-brand-name">Pixel Image Goa</span>
                            is Goa's trusted expert in cutting-edge signage solutions that make your
                            business shine brighter than ever before.
                        </p>

                        <div className="about-features">
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
                                <div key={index} className="about-feature">
                                    <div className="about-feature-icon">
                                        <div className="about-feature-dot" />
                                    </div>
                                    <div className="about-feature-content">
                                        <h4 className="about-feature-title">{feature.title}</h4>
                                        <p className="about-feature-desc">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="about-tagline">
                            No project is too big or too small – we bring your vision to light!
                        </p>
                    </div>

                    {/* Right Stats */}
                    <div className="about-stats">
                        <div className="about-stats-grid">
                            {[
                                { number: "500+", label: "Projects Completed", icon: "📈" },
                                { number: "24/7", label: "Sign Visibility", icon: "🌟" },
                                { number: "100%", label: "Client Satisfaction", icon: "😊" },
                                { number: "Goa", label: "Wide Coverage", icon: "🗺️" },
                            ].map((stat, index) => (
                                <div key={index} className="about-stat-card">
                                    <div className="about-stat-icon">{stat.icon}</div>
                                    <div className="about-stat-number">{stat.number}</div>
                                    <div className="about-stat-label">{stat.label}</div>
                                    <div className="about-stat-glow" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="about-why-choose">
                    <div className="about-why-header">
                        <FaCheckCircle className="about-why-icon" />
                        <h3 className="about-why-title">Why Choose Pixel Image Goa?</h3>
                    </div>

                    <div className="about-why-content">
                        {[
                            "Free consultation & design mockups to visualize your ideas",
                            "Competitive pricing with no hidden costs – transparent quotes",
                            "Fast turnaround time (5-7 days) without compromising quality",
                            "Professional installation by our experienced team",
                            "1-year warranty on all products with dedicated support",
                        ].map((item, index) => (
                            <div key={index} className="about-why-item">
                                <div className="about-why-bullet" />
                                <span className="about-why-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="about-trust-badges">
                    {[
                        { icon: FaShieldAlt, text: "Licensed & Insured" },
                        { icon: FaClock, text: "Fast Turnaround" },
                        { icon: FaAward, text: "Quality Guaranteed" }
                    ].map((badge, index) => (
                        <div key={index} className="about-trust-badge">
                            <badge.icon className="about-trust-icon" />
                            <span className="about-trust-text">{badge.text}</span>
                            <div className="about-trust-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}