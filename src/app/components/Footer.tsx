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
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-muted text-text-main border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary">Pixel Image Goa</h3>
            <p className="text-sm text-text-muted mt-2">
              Goa&apos;s premier LED signage and display solutions expert. We
              bring your vision to light.
            </p>
            <div className="flex gap-4 mt-4 text-primary text-sm">
              <div className="flex items-center gap-2">
                <FaStar /> 5.0 Rating
              </div>
              <div className="flex items-center gap-2">
                <FaAward /> 500+ Projects
              </div>
              <div className="flex items-center gap-2">
                <FaClock /> Fast Delivery
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Portfolio", href: "#gallery" },
                { label: "Client Reviews", href: "#reviews" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
            <div className="space-y-4 text-sm text-text-muted">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" /> +91 98507 18413
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a href="mailto:pixelimagegoa@gmail.com">
                  pixelimagegoa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" /> All Across Goa
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-text-main mb-2">
                Follow Us
              </h5>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF />, href: "#" },
                  { icon: <FaInstagram />, href: "#" },
                  { icon: <FaLinkedinIn />, href: "#" },
                  {
                    icon: <FaWhatsapp />,
                    href: "https://wa.me/919850718413",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
                    aria-label="Social Link"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-6 border-gray-200 flex flex-col md:flex-row justify-between text-sm text-text-muted">
          <p>&copy; {currentYear} Pixel Image Goa. All rights reserved.</p>
          <p>Crafted by SetApartDesigns.com x Designablebits.com</p>
        </div>

        <div className="mt-4 text-center space-x-4 text-sm">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <span className="text-gray-400">•</span>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
          <span className="text-gray-400">•</span>
          <a href="#contact" className="hover:text-primary">
            Get Quote
          </a>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
