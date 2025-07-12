"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaRocket,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-bg-muted text-text-main">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-primary">Let&apos;s Light Up</span>{" "}
            <span>Your Business</span>
          </h2>
          <p className="text-lg text-text-muted mt-2">
            Ready to make your brand shine? Get in touch for a free consultation
          </p>
          <div className="h-1 w-20 bg-primary mx-auto my-4 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {[
              {
                icon: FaPhoneAlt,
                label: "Call Us",
                value: "+91 98507 18413",
                sub: "Mon–Sat: 9:00 AM – 7:00 PM",
              },
              {
                icon: FaWhatsapp,
                label: "WhatsApp Chat",
                value: "Quick Response",
                sub: "Instant quotes & support",
              },
              {
                icon: FaEnvelope,
                label: "Email Us",
                value: "pixelimagegoa@gmail.com",
                sub: "Replies within 24 hours",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-center p-4 bg-white border border-card-border rounded-lg shadow-sm"
              >
                <item.icon className="text-2xl text-primary" />
                <div>
                  <h4 className="text-md font-semibold">{item.label}</h4>
                  <p className="text-sm text-primary">{item.value}</p>
                  <p className="text-sm text-text-muted">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 items-center p-4 bg-white border border-card-border rounded-lg shadow-sm">
              <FaMapMarkerAlt className="text-2xl text-primary" />
              <div>
                <h4 className="text-md font-semibold">Service Area</h4>
                <p className="text-sm text-primary">All Across Goa</p>
                <p className="text-sm text-text-muted">North & South Goa</p>
              </div>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-card-border shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-primary" />
                <h4 className="font-semibold">Business Hours</h4>
              </div>
              <ul className="text-sm text-text-muted space-y-1">
                <li>Mon–Fri: 9:00 AM – 7:00 PM</li>
                <li>Saturday: 9:00 AM – 7:00 PM</li>
                <li className="text-red-500">Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-card-border shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaHeadset className="text-primary" />
                <h4 className="font-semibold">Quick Response</h4>
              </div>
              <p className="text-sm text-text-muted mb-3">
                We respond to all inquiries within 2 hours during business
                hours.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+919850718413"
                  className="text-white bg-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  <FaPhoneAlt className="inline mr-1" /> Call Now
                </a>
                <a
                  href="https://wa.me/919850718413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary border border-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  <FaWhatsapp className="inline mr-1" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-card-border shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaRocket className="text-primary" />
                <h4 className="font-semibold">Why Choose Us?</h4>
              </div>
              <ul className="text-sm text-text-muted space-y-1 list-disc list-inside">
                <li>Free consultation & mockups</li>
                <li>Transparent pricing</li>
                <li>Fast 5–7 day turnaround</li>
                <li>Professional installation</li>
                <li>1-year warranty on all products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
