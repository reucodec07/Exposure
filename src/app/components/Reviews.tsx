// src/app/components/Reviews.tsx

const reviews = [
    {
        name: "Suresh P.",
        text: "Fantastic work on our LED sign board! Installation was quick and the quality is excellent. Highly recommend Pixel Image Goa.",
    },
    {
        name: "Anjali R.",
        text: "Our shop’s frontlite board looks amazing. The team was responsive and delivered right on time.",
    },
    {
        name: "Pratik G.",
        text: "Professional service and creative designs. The fabrication for our vehicle display was top-notch!",
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="flex-1 bg-gray-50 rounded-2xl shadow p-6">
                            <p className="text-gray-800 italic mb-3">“{review.text}”</p>
                            <div className="text-right text-sm font-bold text-gray-600">— {review.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
