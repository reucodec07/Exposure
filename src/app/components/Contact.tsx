//app/components/Contact.tsx
"use client";

import {
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaCheckCircle,
    FaRocket, FaHeadset
} from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-25 to-transparent opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4 sm:mb-6">
                        <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
                        <span className="text-blue-600">Let&#39;s Capture</span>
                        <span className="text-slate-800"> Your Moments</span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Ready to create stunning visuals? Get in touch for a free consultation and quote
                    </p>

                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                <div className="block lg:grid lg:grid-cols-2 lg:gap-16 mb-12 sm:mb-16">
                    {/* Left: Contact Options */}
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8 text-center lg:text-left">
                            Get In Touch
                        </h3>

                        <div className="space-y-4 sm:space-y-6">
                            {[
                                {
                                    href: "tel:+441234567890",
                                    icon: FaPhoneAlt,
                                    label: "Call Us Directly",
                                    value: "+44 1234567890",
                                    sub: "Mon–Sat: 9:00 AM – 7:00 PM",
                                    color: "blue"
                                },
                                {
                                    href: "https://wa.me/441234567890",
                                    icon: FaWhatsapp,
                                    label: "WhatsApp Chat",
                                    value: "Quick Response",
                                    sub: "Get instant quotes & support",
                                    color: "green"
                                },
                                {
                                    href: "mailto:mockprojects@setapartprojects.com",
                                    icon: FaEnvelope,
                                    label: "Email Us",
                                    value: "mockprojects@setapartprojects.com",
                                    sub: "We'll respond within 24 hours",
                                    color: "purple"
                                }
                            ].map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="block w-full"
                                >
                                    <div className="flex items-center p-4 sm:p-6 bg-white border border-blue-200
                                                   rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md
                                                   transition-shadow duration-300 group min-h-20 sm:min-h-24">
                                        <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl 
                                                       flex items-center justify-center mr-3 sm:mr-4
                                                       ${contact.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                                                       ${contact.color === 'green' ? 'bg-green-100 text-green-600' : ''}
                                                       ${contact.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}`}>
                                            <contact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div className="flex-1 min-w-0 mr-3">
                                            <div className="text-slate-500 text-xs sm:text-sm font-medium mb-1">{contact.label}</div>
                                            <h4 className="text-slate-800 font-bold text-base sm:text-lg group-hover:text-blue-600
                                                         transition-colors duration-300 break-words leading-tight">{contact.value}</h4>
                                            <div className="text-slate-600 text-xs sm:text-sm mt-1">{contact.sub}</div>
                                        </div>
                                        <div className="text-blue-400 group-hover:text-blue-600 transition-colors duration-300 text-lg sm:text-xl">
                                            →
                                        </div>
                                    </div>
                                </a>
                            ))}

                            {/* Location Card */}
                            <div className="flex items-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100
                                          border border-blue-200 rounded-xl sm:rounded-2xl min-h-20 sm:min-h-24">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-lg sm:rounded-xl
                                              flex items-center justify-center mr-3 sm:mr-4">
                                    <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <div className="text-blue-700 text-xs sm:text-sm font-medium mb-1">Service Area</div>
                                    <h4 className="text-blue-900 font-bold text-base sm:text-lg">United Kingdom</h4>
                                    <div className="text-blue-700 text-xs sm:text-sm mt-1">Professional Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info Boxes */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Business Hours */}
                        <div className="bg-white border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <FaClock className="text-blue-600 text-lg sm:text-xl mr-2 sm:mr-3" />
                                <h4 className="text-lg sm:text-xl font-bold text-slate-800">Business Hours</h4>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", active: true },
                                    { day: "Saturday", hours: "9:00 AM – 7:00 PM", active: true },
                                    { day: "Sunday", hours: "Closed", active: false },
                                ].map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-b-0">
                                        <span className="text-slate-700 font-medium text-sm sm:text-base">{schedule.day}</span>
                                        <span className={`font-semibold text-sm sm:text-base
                                                       ${schedule.active ? 'text-blue-600' : 'text-slate-500'}`}>
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Response Guarantee */}
                        <div className="bg-white border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <FaHeadset className="text-blue-600 text-lg sm:text-xl mr-2 sm:mr-3" />
                                <h4 className="text-lg sm:text-xl font-bold text-slate-800">Quick Response Guarantee</h4>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                                We respond to all inquiries within 2 hours during business hours.
                                Get your free quote and consultation today!
                            </p>
                            <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                                <a href="tel:+441234567890"
                                   className="flex items-center justify-center px-4 py-3 text-white bg-blue-100 hover:bg-blue-200
                                            font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors duration-200
                                            min-h-12 w-full sm:w-auto">
                                    <FaPhoneAlt className="w-4 h-4 mr-2" />
                                    <span>Call Now</span>
                                </a>
                                <a
                                    href="https://wa.me/441234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-blue-200
                                             text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl
                                             transition-colors duration-200 min-h-12 w-full sm:w-auto"
                                >
                                    <FaWhatsapp className="w-4 h-4 mr-2" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-white border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <FaRocket className="text-blue-600 text-lg sm:text-xl mr-2 sm:mr-3" />
                                <h4 className="text-lg sm:text-xl font-bold text-slate-800">Why Choose Us?</h4>
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                                {[
                                    "Free consultation & shoot planning",
                                    "Transparent pricing with no hidden costs",
                                    "Fast turnaround time for edited photos",
                                    "Professional editing included",
                                    "Secure backup of your photos"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <FaCheckCircle className="text-blue-500 text-sm flex-shrink-0 mt-1 mr-2 sm:mr-3" />
                                        <span className="text-slate-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}