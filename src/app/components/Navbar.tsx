import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur z-50 shadow">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo and Brand */}
                <a href="#hero" className="flex items-center space-x-2 group">
                    <Image
                        src="/logo1.jpg"
                        alt="Pixel Image Goa Logo"
                        width={48}
                        height={48}
                        className="rounded-xl border border-gray-200 shadow"
                        priority
                    />
                    <span className="font-bold text-xl text-blue-800 group-hover:text-blue-600 transition">
            Pixel Image Goa
          </span>
                </a>
                {/* Nav links */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 font-medium hover:text-blue-700 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
