//app/components/Reviews.tsx

"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
    {
        name: "Vaishali Pawar",
        stars: 5,
        text: "One of the most Excellent Hardworking Team they have, In House Production with all the latest Technology Machineries...Good Work",
        date: "June 2020",
        business: "Local Business Owner",
        verified: true,
        avatar: "VP"
    },
    {
        name: "Singh Purohit",
        stars: 5,
        text: "Our shop's frontlite board looks amazing. The team was responsive and delivered right on time.",
        date: "May 2021",
        business: "Retail Store",
        verified: true,
        avatar: "SP"
    },
    {
        name: "Rajesh Kumar",
        stars: 5,
        text: "The LED scrolling board they installed has significantly increased our customer footfall. Excellent ROI!",
        date: "August 2021",
        business: "Restaurant Chain",
        verified: true,
        avatar: "RK"
    },
    {
        name: "Maria Fernandes",
        stars: 5,
        text: "Professional team, creative designs, and quality that lasts. Our neon signage is a showstopper!",
        date: "November 2021",
        business: "Nightclub Owner",
        verified: true,
        avatar: "MF"
    },
    {
        name: "Amit Desai",
        stars: 5,
        text: "They transformed our building facade with ACP cladding. Looks premium and modern. Highly recommended!",
        date: "January 2022",
        business: "Corporate Office",
        verified: true,
        avatar: "AD"
    },
    {
        name: "Priya Sharma",
        stars: 5,
        text: "Quick turnaround, competitive pricing, and the acrylic letters look fantastic. Will definitely use again!",
        date: "March 2022",
        business: "Boutique Store",
        verified: true,
        avatar: "PS"
    },
];

export default function ReviewCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: { perView: 1, spacing: 20 },
            breakpoints: {
                "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
                "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
            },
            created() { setLoaded(true); },
            slideChanged(slider) { setCurrentSlide(slider.track.details.rel); },
        }
    );

    useEffect(() => {
        if (!instanceRef.current) return;
        const interval = setInterval(() => instanceRef.current!.next(), 5000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section id="reviews" className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-blue-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-blue-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4 sm:mb-6">
                        <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                            Testimonials
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-blue-600">Client Success Stories</span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Don&#39;t just take our word for it—hear what our satisfied clients say about our work
                    </p>

                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                {/* Carousel */}
                <div className="relative mb-8 sm:mb-12">
                    <div ref={sliderRef} className="keen-slider">
                        {reviews.map((review, index) => (
                            <div key={index} className="keen-slider__slide px-3">
                                <div className="bg-white border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full shadow-sm hover:shadow-lg transition-shadow duration-300 relative">

                                    {/* Quote Icon */}
                                    <FaQuoteLeft className="absolute top-4 right-4 sm:top-6 sm:right-6 text-2xl sm:text-3xl text-blue-100" />

                                    {/* Header */}
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        <div className="relative mr-3 sm:mr-4">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                                                {review.avatar}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 text-base sm:text-lg">{review.name}</h4>
                                            <p className="text-slate-600 text-xs sm:text-sm mb-2">{review.business}</p>
                                            <div className="flex items-center">
                                                <div className="flex items-center mr-2">
                                                    {[...Array(review.stars)].map((_, i) => (
                                                        <FaStar key={i} className="text-yellow-400 text-xs sm:text-sm mr-1" />
                                                    ))}
                                                </div>
                                                {review.verified && (
                                                    <span className="text-blue-600 text-xs font-medium">
                                                        ✓ Verified
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-4 sm:mb-6">
                                        <p className="text-slate-700 leading-relaxed italic text-sm sm:text-base">
                                            &#34;{review.text}&#34;
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-3 sm:pt-4 border-t border-blue-100">
                                        <span className="text-slate-500 text-xs sm:text-sm">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {loaded && (
                        <>
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2
                                         w-10 h-10 sm:w-12 sm:h-12 bg-white border border-blue-200 rounded-full
                                         flex items-center justify-center text-blue-600 hover:bg-blue-50
                                         hover:border-blue-300 transition-colors duration-200 shadow-lg"
                                aria-label="Previous review"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2
                                         w-10 h-10 sm:w-12 sm:h-12 bg-white border border-blue-200 rounded-full
                                         flex items-center justify-center text-blue-600 hover:bg-blue-50
                                         hover:border-blue-300 transition-colors duration-200 shadow-lg"
                                aria-label="Next review"
                            >
                                →
                            </button>
                        </>
                    )}
                </div>

                {/* Dots Indicator */}
                {loaded && (
                    <div className="flex justify-center mb-12 sm:mb-16">
                        <div className="flex gap-2">
                            {reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 
                                             ${currentSlide === idx
                                        ? 'bg-blue-600 scale-125'
                                        : 'bg-blue-200 hover:bg-blue-300'
                                    }`}
                                    aria-label={`Go to review ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                        Ready to join our growing list of satisfied customers?
                    </h3>
                    <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Let&#39;s discuss how we can bring your vision to life
                    </p>
                    <a href="#contact"
                       className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-700
                                font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-blue-50
                                transition-colors duration-200 shadow-lg min-h-12">
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
}