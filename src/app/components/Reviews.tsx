//app/components/Reviews.tsx

"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";

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
        <section id="reviews" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_24%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.03)_75%,rgba(59,130,246,0.03)_76%,transparent_77%,transparent),linear-gradient(-45deg,transparent_24%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.03)_75%,rgba(59,130,246,0.03)_76%,transparent_77%,transparent)]"
                    style={{ backgroundSize: '50px 50px' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                            Testimonials
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-blue-600">Client Success Stories</span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                        Don&#39;t just take our word for it—hear what our satisfied clients say about our work
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { value: "500+", label: "Happy Clients", icon: "😊" },
                        { value: "5.0", label: "Avg Rating", icon: "⭐" },
                        { value: "100%", label: "Satisfaction", icon: "✅" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white border border-blue-200 rounded-2xl p-6
                                          hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300
                                          hover:-translate-y-1">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel */}
                <div className="relative mb-12">
                    <div ref={sliderRef} className="keen-slider">
                        {reviews.map((review, index) => (
                            <div key={index} className="keen-slider__slide px-3">
                                <div className="bg-white border border-blue-200 rounded-2xl p-6 h-full
                                              hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300
                                              hover:-translate-y-2 group relative overflow-hidden">

                                    {/* Quote Icon */}
                                    <FaQuoteLeft className="absolute top-4 right-6 text-3xl text-blue-100
                                                         group-hover:text-blue-200 transition-colors duration-300" />

                                    {/* Header */}
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="relative">
                                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700
                                                          rounded-full flex items-center justify-center text-white
                                                          font-bold text-lg shadow-lg">
                                                {review.avatar}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700
                                                          rounded-full blur-lg opacity-30 scale-110" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 text-lg">{review.name}</h4>
                                            <p className="text-slate-600 text-sm mb-2">{review.business}</p>
                                            <div className="flex items-center space-x-2">
                                                <div className="flex items-center space-x-1">
                                                    {[...Array(review.stars)].map((_, i) => (
                                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                                    ))}
                                                </div>
                                                {review.verified && (
                                                    <div className="flex items-center space-x-1 text-blue-600 text-xs">
                                                        <FaCheckCircle className="text-xs" />
                                                        <span className="font-medium">Verified</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-6 relative z-10">
                                        <p className="text-slate-700 leading-relaxed italic">
                                            &#34;{review.text}&#34;
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                                        <span className="text-slate-500 text-sm">{review.date}</span>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent
                                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                                  rounded-2xl" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {loaded && (
                        <>
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="absolute -left-6 top-1/2 -translate-y-1/2
                                         w-12 h-12 bg-white border border-blue-200 rounded-full
                                         flex items-center justify-center text-blue-600
                                         hover:bg-blue-50 hover:border-blue-300 transition-all duration-200
                                         shadow-lg hover:scale-110 active:scale-95"
                                aria-label="Previous review"
                            >
                                <FaChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="absolute -right-6 top-1/2 -translate-y-1/2
                                         w-12 h-12 bg-white border border-blue-200 rounded-full
                                         flex items-center justify-center text-blue-600
                                         hover:bg-blue-50 hover:border-blue-300 transition-all duration-200
                                         shadow-lg hover:scale-110 active:scale-95"
                                aria-label="Next review"
                            >
                                <FaChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>

                {/* Dots Indicator */}
                {loaded && (
                    <div className="flex justify-center space-x-2 mb-16">
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
                )}

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800
                              rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        Ready to join our growing list of satisfied customers?
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Let&#39;s discuss how we can bring your vision to life
                    </p>
                    <a href="#contact"
                       className="inline-flex items-center px-8 py-4 bg-white text-blue-700
                                font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200
                                hover:scale-105 active:scale-95 shadow-lg">
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
}