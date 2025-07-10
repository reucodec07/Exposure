// src/app/components/Reviews.tsx

"use client";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
    {
        name: "Vaishali Pawar",
        stars: 5,
        text: "One of the most Execellent Hardworking Team they have, In House Production with all the latest Technology Machineries...Good Work",
        date: "June 2020",
        business: "Local Business Owner",
        verified: true
    },
    {
        name: "Singh Purohit",
        stars: 5,
        text: "Our shop's frontlite board looks amazing. The team was responsive and delivered right on time.",
        date: "May 2021",
        business: "Retail Store",
        verified: true
    },
    {
        name: "Rajesh Kumar",
        stars: 5,
        text: "The LED scrolling board they installed has significantly increased our customer footfall. Excellent ROI!",
        date: "August 2021",
        business: "Restaurant Chain",
        verified: true
    },
    {
        name: "Maria Fernandes",
        stars: 5,
        text: "Professional team, creative designs, and quality that lasts. Our neon signage is a showstopper!",
        date: "November 2021",
        business: "Nightclub Owner",
        verified: true
    },
    {
        name: "Amit Desai",
        stars: 5,
        text: "They transformed our building facade with ACP cladding. Looks premium and modern. Highly recommended!",
        date: "January 2022",
        business: "Corporate Office",
        verified: true
    },
    {
        name: "Priya Sharma",
        stars: 5,
        text: "Quick turnaround, competitive pricing, and the acrylic letters look fantastic. Will definitely use again!",
        date: "March 2022",
        business: "Boutique Store",
        verified: true
    },
];

export default function ReviewCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slides: { perView: 1, spacing: 16 },
        breakpoints: {
            "(min-width: 640px)": { slides: { perView: 2, spacing: 16 }},
            "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 }},
        },
        slideChanged(slider) { setCurrentSlide(slider.track.details.rel); },
        created() { setLoaded(true); },
    });

    // Auto-play
    useEffect(() => {
        if (!instanceRef.current) return;
        const interval = setInterval(() => instanceRef.current?.next(), 5000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section id="reviews" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-blue-animated">
                            Client Success Stories
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it - hear what our satisfied clients have to say about their experience
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4 gradient-bar"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text-blue">500+</div>
                        <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text-blue">5.0</div>
                        <div className="text-gray-400 text-sm mt-1">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text-blue">100%</div>
                        <div className="text-gray-400 text-sm mt-1">Satisfaction</div>
                    </div>
                </div>

                {/* Review carousel */}
                <div className="relative">
                    <div ref={sliderRef} className="keen-slider">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="keen-slider__slide">
                                <div className="review-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700/50 rounded-2xl p-6 lg:p-8 h-full flex flex-col relative overflow-hidden group hover:border-gray-600/50 transition-all duration-300">
                                    <FaQuoteLeft className="review-quote-icon" />
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, starIdx) => (
                                            <FaStar key={starIdx}
                                                    className={`h-5 w-5 ${starIdx < review.stars ? "text-yellow-400" : "text-gray-600"}`} />
                                        ))}
                                        {review.verified && (
                                            <div className="ml-2 flex items-center gap-1 text-green-400 text-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-xs">Verified</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-300 text-base lg:text-lg mb-6 flex-grow leading-relaxed">
                                        "{review.text}"
                                    </p>
                                    <div className="border-t border-gray-700/50 pt-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-white">{review.name}</p>
                                                <p className="text-sm text-gray-400">{review.business}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-cyan-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-cyan-600/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Nav arrows */}
                    {loaded && instanceRef.current && (
                        <>
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-gray-800/80 backdrop-blur text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
                                aria-label="Previous review"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-gray-800/80 backdrop-blur text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
                                aria-label="Next review"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
                {/* Dots nav */}
                {loaded && instanceRef.current && (
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(Math.ceil(reviews.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)))].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => instanceRef.current?.moveToIdx(idx * (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1))}
                                className={`h-2 transition-all duration-300 rounded-full ${
                                    Math.floor(currentSlide / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)) === idx
                                        ? "w-8 bg-gradient-to-r from-blue-400 to-cyan-400"
                                        : "w-2 bg-gray-600 hover:bg-gray-500"
                                }`}
                                aria-label={`Go to review group ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        Ready to join our growing list of satisfied customers?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    >
                        Start Your Project
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}