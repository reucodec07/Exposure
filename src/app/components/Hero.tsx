// src/app/components/Hero.tsx
export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-gradient-to-br from-[#22223b] via-[#3a86ff] to-[#6a4c93] text-white py-20 px-4 flex flex-col items-center justify-center"
        >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Stunning Signage & LED Boards for Every Business
            </h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
                We create custom LED boards, glow signs, ACP cladding, and fabrication works—delivered fast and built to last in Goa.
            </p>
            <a
                href="#contact"
                className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-blue-100 transition"
            >
                Get a Free Quote
            </a>
        </section>
    );
}
