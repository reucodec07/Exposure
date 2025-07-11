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

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="footer-container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-section">
                            <div className="footer-logo">
                                <h3 className="footer-brand-name">Pixel Image Goa</h3>
                                <p className="footer-tagline">LED Signage Experts</p>
                            </div>
                            <p className="footer-description">
                                Goa's premier LED signage and display solutions expert.
                                We bring your vision to light with cutting-edge technology
                                and expert craftsmanship.
                            </p>
                            <div className="footer-highlights">
                                <div className="footer-highlight">
                                    <FaStar className="footer-highlight-icon" />
                                    <span>5.0 Rating</span>
                                </div>
                                <div className="footer-highlight">
                                    <FaAward className="footer-highlight-icon" />
                                    <span>500+ Projects</span>
                                </div>
                                <div className="footer-highlight">
                                    <FaClock className="footer-highlight-icon" />
                                    <span>Fast Delivery</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="footer-section-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#about" className="footer-link">About Us</a></li>
                                <li><a href="#services" className="footer-link">Our Services</a></li>
                                <li><a href="#gallery" className="footer-link">Portfolio</a></li>
                                <li><a href="#reviews" className="footer-link">Client Reviews</a></li>
                                <li><a href="#contact" className="footer-link">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h4 className="footer-section-title">Get In Touch</h4>
                            <div className="footer-contact-info">
                                <div className="footer-contact-item">
                                    <FaPhoneAlt className="footer-contact-icon" />
                                    <div>
                                        <span className="footer-contact-label">Call Us</span>
                                        <a href="tel:+919850718413" className="footer-contact-value">
                                            +91 98507 18413
                                        </a>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <FaEnvelope className="footer-contact-icon" />
                                    <div>
                                        <span className="footer-contact-label">Email</span>
                                        <a href="mailto:pixelimagegoa@gmail.com" className="footer-contact-value">
                                            pixelimagegoa@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <FaMapMarkerAlt className="footer-contact-icon" />
                                    <div>
                                        <span className="footer-contact-label">Service Area</span>
                                        <span className="footer-contact-value">All Across Goa</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="footer-social">
                                <h5 className="footer-social-title">Follow Us</h5>
                                <div className="footer-social-links">
                                    <a href="#" className="footer-social-link" aria-label="Facebook">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="footer-social-link" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="footer-social-link" aria-label="LinkedIn">
                                        <FaLinkedinIn />
                                    </a>
                                    <a
                                        href="https://wa.me/919850718413"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-link whatsapp"
                                        aria-label="WhatsApp"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="footer-bottom-content">
                        <div className="footer-copyright">
                            <p>&copy; {currentYear} Pixel Image Goa. All rights reserved.</p>
                            <p className="footer-copyright-sub">
                                Crafted with ❤️ by SetApartDesigns.com x Designablebits.com
                            </p>
                        </div>
                        <div className="footer-bottom-links">
                            <a href="#" className="footer-bottom-link">Privacy Policy</a>
                            <span className="footer-divider">•</span>
                            <a href="#" className="footer-bottom-link">Terms of Service</a>
                            <span className="footer-divider">•</span>
                            <a href="#contact" className="footer-bottom-link">Get Quote</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="footer-scroll-top"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>

            {/* Background Effects */}
            <div className="footer-bg-grid" />
            <div className="footer-bg-glow" />
        </footer>
    );
}