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

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`whatsapp-float ${isVisible ? "visible" : ""}`}>
      {/* Chat Bubble */}
      <div className={`whatsapp-chat-bubble ${isHovered ? "visible" : ""}`}>
        <div className="whatsapp-chat-content">
          <div className="whatsapp-chat-header">
            <div className="whatsapp-chat-avatar">
              <span>PG</span>
            </div>
            <div className="whatsapp-chat-info">
              <h4>Pixel Image Goa</h4>
              <span>Typically replies instantly</span>
            </div>
          </div>
          <div className="whatsapp-chat-message">
            <FaComment className="whatsapp-chat-icon" />
            <p>
              Hi! 👋 Ready to illuminate your business? Let&apos;s chat about
              your signage needs!
            </p>
          </div>
        </div>
        <div className="whatsapp-chat-arrow" />
      </div>

      {/* Main Button */}
      <a
        href="https://wa.me/919850718413?text=Hi%20Pixel%20Image%20Goa!%20I'm%20interested%20in%20your%20LED%20signage%20services.%20Can%20you%20please%20provide%20more%20information?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <div className="whatsapp-pulse" />
        <div className="whatsapp-glow" />

        {/* Notification Badge */}
        <div className="whatsapp-badge">
          <span>1</span>
        </div>
      </a>

      {/* Floating Particles */}
      <div className="whatsapp-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="whatsapp-particle"
            style={
              {
                "--delay": `${i * 0.3}s`,
                "--angle": `${i * 60}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
