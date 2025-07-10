// src/app/components/Contact.tsx
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
                    <div className="flex items-center space-x-3">
                        <FaPhoneAlt className="text-green-600 text-xl" />
                        <a href="tel:+919850718413" className="text-lg font-medium text-gray-700 hover:underline">
                            +91 98507 18413
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaWhatsapp className="text-green-500 text-2xl" />
                        <a
                            href="https://wa.me/919850718413"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-gray-700 hover:underline"
                        >
                            WhatsApp Chat
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-blue-500 text-xl" />
                        <a href="mailto:pixelimagegoa@gmail.com" className="text-lg font-medium text-gray-700 hover:underline">
                            pixelimagegoa@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
