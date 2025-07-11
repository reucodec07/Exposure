"use client";

import {
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaCheckCircle,
    FaHeadset,
    FaRocket
} from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            {/* Background Elements */}
            <div className="contact-bg-grid" />
            <div className="contact-bg-glow" />

            <div className="contact-container">
                {/* Header */}
                <div className="contact-header">
                    <h2 className="contact-title">
                        <span className="contact-title-highlight">Let's Light Up</span>
                        <span className="contact-title-text"> Your Business</span>
                    </h2>
                    <p className="contact-subtitle">
                        Ready to make your brand shine? Get in touch for a free consultation and quote
                    </p>
                    <div className="contact-title-divider" />
                </div>

                <div className="contact-content">
                    {/* Left: Contact Options */}
                    <div className="contact-methods">
                        <h3 className="contact-methods-title">Get In Touch</h3>

                        <div className="contact-cards">
                            {[
                                {
                                    href: "tel:+919850718413",
                                    icon: FaPhoneAlt,
                                    label: "Call Us Directly",
                                    value: "+91 98507 18413",
                                    sub: "Mon–Sat: 9:00 AM – 7:00 PM",
                                    color: "blue"
                                },
                                {
                                    href: "https://wa.me/919850718413",
                                    icon: FaWhatsapp,
                                    label: "WhatsApp Chat",
                                    value: "Quick Response",
                                    sub: "Get instant quotes & support",
                                    color: "green"
                                },
                                {
                                    href: "mailto:pixelimagegoa@gmail.com",
                                    icon: FaEnvelope,
                                    label: "Email Us",
                                    value: "pixelimagegoa@gmail.com",
                                    sub: "We'll respond within 24 hours",
                                    color: "purple"
                                }
                            ].map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className={`contact-card contact-card-${contact.color}`}
                                >
                                    <div className="contact-card-icon">
                                        <contact.icon />
                                        <div className="contact-card-icon-glow" />
                                    </div>
                                    <div className="contact-card-content">
                                        <span className="contact-card-label">{contact.label}</span>
                                        <h4 className="contact-card-value">{contact.value}</h4>
                                        <span className="contact-card-sub">{contact.sub}</span>
                                    </div>
                                    <div className="contact-card-arrow">→</div>
                                    <div className="contact-card-glow" />
                                </a>
                            ))}

                            {/* Location Card */}
                            <div className="contact-card contact-card-location">
                                <div className="contact-card-icon">
                                    <FaMapMarkerAlt />
                                    <div className="contact-card-icon-glow" />
                                </div>
                                <div className="contact-card-content">
                                    <span className="contact-card-label">Service Area</span>
                                    <h4 className="contact-card-value">All Across Goa</h4>
                                    <span className="contact-card-sub">North Goa & South Goa</span>
                                </div>
                                <div className="contact-card-glow" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Info Boxes */}
                    <div className="contact-info">
                        {/* Business Hours */}
                        <div className="contact-info-box">
                            <div className="contact-info-header">
                                <FaClock className="contact-info-icon" />
                                <h4 className="contact-info-title">Business Hours</h4>
                            </div>
                            <div className="contact-hours">
                                {[
                                    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", active: true },
                                    { day: "Saturday", hours: "9:00 AM – 7:00 PM", active: true },
                                    { day: "Sunday", hours: "Closed", active: false },
                                ].map((schedule, index) => (
                                    <div key={index} className="contact-hour">
                                        <span className="contact-hour-day">{schedule.day}</span>
                                        <span className={`contact-hour-time ${schedule.active ? 'active' : 'inactive'}`}>
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Response Guarantee */}
                        <div className="contact-info-box">
                            <div className="contact-info-header">
                                <FaHeadset className="contact-info-icon" />
                                <h4 className="contact-info-title">Quick Response Guarantee</h4>
                            </div>
                            <p className="contact-guarantee-text">
                                We respond to all inquiries within 2 hours during business hours.
                                Get your free quote and consultation today!
                            </p>
                            <div className="contact-guarantee-actions">
                                <a href="tel:+919850718413" className="contact-guarantee-btn primary">
                                    <FaPhoneAlt />
                                    <span>Call Now</span>
                                </a>
                                <a
                                    href="https://wa.me/919850718413"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-guarantee-btn secondary"
                                >
                                    <FaWhatsapp />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="contact-info-box">
                            <div className="contact-info-header">
                                <FaRocket className="contact-info-icon" />
                                <h4 className="contact-info-title">Why Choose Us?</h4>
                            </div>
                            <div className="contact-features">
                                {[
                                    "Free consultation & design mockups",
                                    "Transparent pricing with no hidden costs",
                                    "Fast 5-7 day turnaround time",
                                    "Professional installation included",
                                    "1-year warranty on all products"
                                ].map((feature, index) => (
                                    <div key={index} className="contact-feature">
                                        <FaCheckCircle className="contact-feature-icon" />
                                        <span className="contact-feature-text">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="contact-cta">
                    <h3 className="contact-cta-title">Ready to Get Started?</h3>
                    <p className="contact-cta-text">
                        Take the first step towards transforming your business visibility
                    </p>
                    <div className="contact-cta-actions">
                        <a href="tel:+919850718413" className="contact-cta-btn primary">
                            <FaPhoneAlt />
                            <span>Call Now</span>
                            <div className="contact-cta-glow" />
                        </a>
                        <a
                            href="https://wa.me/919850718413"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-cta-btn secondary"
                        >
                            <FaWhatsapp />
                            <span>WhatsApp Us</span>
                            <div className="contact-cta-glow" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}