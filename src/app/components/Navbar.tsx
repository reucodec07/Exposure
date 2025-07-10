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
        <nav className="fixed w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur z-50 shadow-xl border-b border-blue-500/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 min-h-[60px] md:min-h-[72px]">
                {/* Logo and Brand */}
                <a href="#hero" className="flex items-center space-x-3 group">
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                            <Image
                                src="/logo1.jpg"
                                alt="Pixel Image Goa Logo"
                                width={64}
                                height={64}
                                className="relative rounded-xl shadow-lg w-14 h-14 md:w-16 md:h-16 object-contain border border-blue-400/30"
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl md:text-2xl gradient-text-blue transition-all">
                            Pixel Image Goa
                        </span>
                        <span className="text-xs text-gray-400 hidden md:block">LED Signage Experts</span>
                    </div>
                </a>
                {/* Nav links */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link relative text-gray-300 font-medium text-base px-4 py-2 hover:text-white transition-all group"
                            tabIndex={0}
                        >
                            <span className="relative z-10">{link.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                            <span className="nav-link-underline"></span>
                        </a>
                    ))}
                    <a
                        href="https://wa.me/919850718413"
                        className="ml-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.472 12.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        Get Quote
                    </a>
                </div>
                {/* Mobile menu button */}
                <button className="md:hidden text-gray-300 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
