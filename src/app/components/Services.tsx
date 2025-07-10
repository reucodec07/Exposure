// src/app/components/Services.tsx
const services = [
    "LED Boards",
    "Glow Sign Boards",
    "Fabrication Works",
    "Frontlite Boards",
    "Foam Boards (Sign Boards)",
    "ACP Paneling / Cladding (Exterior Works)",
    "Hoarding Vehicles Display Fabrication",
    "Acrylic Fabrications",
    "Scrolling Boards",
];

export default function Services() {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <li
                            key={idx}
                            className="bg-white rounded-2xl shadow p-6 text-lg font-semibold text-center hover:bg-blue-50 transition"
                        >
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
