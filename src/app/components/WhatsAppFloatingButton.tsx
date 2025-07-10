// src/app/components/WhatsAppFloatingButton.tsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
    return (
        <a
            href="https://wa.me/919850718413"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    );
}
