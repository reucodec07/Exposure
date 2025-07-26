//app/components/Contact.tsx

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
        <section id="contact" className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
                <div
                    className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.03)_2px,transparent_2px)]"
                    style={{ backgroundSize: '120px 120px' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-blue-600">Let's Light Up</span>
                        <span className="text-slate-800"> Your Business</span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                        Ready to make your brand shine? Get in touch for a free consultation and quote
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Left: Contact Options */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>

                        <div className="space-y-6">
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
                                    className="flex items-center space-x-4 p-6 bg-white border border-blue-200
                                             rounded-2xl hover:shadow-lg hover:shadow-blue-500/10
                                             transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                                                  transition-all duration-300 group-hover:scale-110
                                                  ${contact.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                                                  ${contact.color === 'green' ? 'bg-green-100 text-green-600' : ''}
                                                  ${contact.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}`}>
                                        <contact.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-slate-500 text-sm font-medium block">{contact.label}</span>
                                        <h4 className="text-slate-800 font-bold text-lg group-hover:text-blue-600
                                                     transition-colors duration-300">{contact.value}</h4>
                                        <span className="text-slate-600 text-sm">{contact.sub}</span>
                                    </div>
                                    <div className="text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1
                                                  transition-all duration-300">
                                        →
                                    </div>
                                </a>
                            ))}

                            {/* Location Card */}
                            <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100
                                          border border-blue-200 rounded-2xl">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-xl
                                              flex items-center justify-center">
                                    <FaMapMarkerAlt className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-blue-700 text-sm font-medium block">Service Area</span>
                                    <h4 className="text-blue-900 font-bold text-lg">All Across Goa</h4>
                                    <span className="text-blue-700 text-sm">North Goa & South Goa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info Boxes */}
                    <div className="space-y-8">
                        {/* Business Hours */}
                        <div className="bg-white border border-blue-200 rounded-2xl p-6
                                      hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="flex items-center space-x-3 mb-6">
                                <FaClock className="text-blue-600 text-xl" />
                                <h4 className="text-xl font-bold text-slate-800">Business Hours</h4>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", active: true },
                                    { day: "Saturday", hours: "9:00 AM – 7:00 PM", active: true },
                                    { day: "Sunday", hours: "Closed", active: false },
                                ].map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center py-2
                                                               border-b border-blue-100 last:border-b-0">
                                        <span className="text-slate-700 font-medium">{schedule.day}</span>
                                        <span className={`font-semibold 
                                                       ${schedule.active ? 'text-blue-600' : 'text-slate-500'}`}>
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Response Guarantee */}
                        <div className="bg-white border border-blue-200 rounded-2xl p-6
                                      hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="flex items-center space-x-3 mb-6">
                                <FaHeadset className="text-blue-600 text-xl" />
                                <h4 className="text-xl font-bold text-slate-800">Quick Response Guarantee</h4>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We respond to all inquiries within 2 hours during business hours.
                                Get your free quote and consultation today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="tel:+919850718413"
                                   className="flex items-center justify-center space-x-2 px-4 py-3
                                            bg-blue-600 hover:bg-blue-700 text-white font-semibold
                                            rounded-xl transition-colors duration-200">
                                    <FaPhoneAlt className="w-4 h-4" />
                                    <span>Call Now</span>
                                </a>
                                <a
                                    href="https://wa.me/919850718413"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 px-4 py-3
                                             bg-green-600 hover:bg-green-700 text-white font-semibold
                                             rounded-xl transition-colors duration-200"
                                >
                                    <FaWhatsapp className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-white border border-blue-200 rounded-2xl p-6
                                      hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="flex items-center space-x-3 mb-6">
                                <FaRocket className="text-blue-600 text-xl" />
                                <h4 className="text-xl font-bold text-slate-800">Why Choose Us?</h4>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Free consultation & design mockups",
                                    "Transparent pricing with no hidden costs",
                                    "Fast 5-7 day turnaround time",
                                    "Professional installation included",
                                    "1-year warranty on all products"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <FaCheckCircle className="text-blue-500 text-sm flex-shrink-0" />
                                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800
                              rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Take the first step towards transforming your business visibility
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+919850718413"
                           className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-700
                                    font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200
                                    hover:scale-105 active:scale-95 shadow-lg">
                            <FaPhoneAlt className="w-5 h-5" />
                            <span>Call Now</span>
                        </a>
                        <a
                            href="https://wa.me/919850718413"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700
                                     text-white font-semibold rounded-xl transition-colors duration-200
                                     hover:scale-105 active:scale-95 shadow-lg"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}