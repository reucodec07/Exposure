import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="contact-bg-blur contact-bg-blur-blue"></div>
                <div className="contact-bg-blur contact-bg-blur-cyan"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-blue-animated">
                            Let's Light Up Your Business
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to make your brand shine? Get in touch for a free consultation and quote
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4 gradient-bar"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                            <div className="space-y-5">
                                {/* Phone */}
                                <a href="tel:+919850718413" className="contact-card contact-card-phone group">
                                    <div className="contact-card-icon contact-card-icon-blue">
                                        <FaPhoneAlt className="text-white text-lg" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-gray-400 text-sm mb-1">Call Us Directly</p>
                                        <p className="text-white text-lg font-semibold group-hover:text-blue-400 transition-colors">+91 98507 18413</p>
                                        <p className="text-gray-500 text-xs mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/919850718413"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-card contact-card-whatsapp group"
                                >
                                    <div className="contact-card-icon contact-card-icon-green">
                                        <FaWhatsapp className="text-white text-xl" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-gray-400 text-sm mb-1">WhatsApp Chat</p>
                                        <p className="text-white text-lg font-semibold group-hover:text-green-400 transition-colors">Quick Response</p>
                                        <p className="text-gray-500 text-xs mt-1">Get instant quotes & support</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a href="mailto:pixelimagegoa@gmail.com" className="contact-card contact-card-email group">
                                    <div className="contact-card-icon contact-card-icon-purple">
                                        <FaEnvelope className="text-white text-lg" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-gray-400 text-sm mb-1">Email Us</p>
                                        <p className="text-white text-lg font-semibold group-hover:text-purple-400 transition-colors break-all">pixelimagegoa@gmail.com</p>
                                        <p className="text-gray-500 text-xs mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="contact-card">
                                    <div className="contact-card-icon contact-card-icon-orange">
                                        <FaMapMarkerAlt className="text-white text-lg" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-gray-400 text-sm mb-1">Service Area</p>
                                        <p className="text-white text-lg font-semibold">All Across Goa</p>
                                        <p className="text-gray-500 text-xs mt-1">North Goa & South Goa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="contact-why-box">
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FaCheckCircle className="text-green-400" />
                                Why Choose Pixel Image Goa?
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Free consultation & design mockups</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Competitive pricing with no hidden costs</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Fast turnaround time (5-7 days)</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Professional installation included</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>1-year warranty on all products</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-400 mb-4">
                        <FaClock className="text-lg" />
                        <span>Operating Hours: Monday - Saturday, 9:00 AM - 7:00 PM</span>
                    </div>
                    <p className="text-2xl font-bold text-white">
                        Ready to <span className="gradient-text-blue">illuminate your success?</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
