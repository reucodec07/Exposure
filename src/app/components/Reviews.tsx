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
        <section id="reviews" className="reviews-section">
            {/* Background Elements */}
            <div className="reviews-bg-grid" />
            <div className="reviews-bg-glow" />

            <div className="reviews-container">
                {/* Header */}
                <div className="reviews-header">
                    <h2 className="reviews-title">
                        <span className="reviews-title-highlight">Client Success Stories</span>
                    </h2>
                    <p className="reviews-subtitle">
                        Don't just take our word for it—hear what our satisfied clients say about our work
                    </p>
                    <div className="reviews-title-divider" />
                </div>

                {/* Stats */}
                <div className="reviews-stats">
                    {[
                        { value: "500+", label: "Happy Clients", icon: "😊" },
                        { value: "5.0", label: "Avg Rating", icon: "⭐" },
                        { value: "100%", label: "Satisfaction", icon: "✅" },
                    ].map((stat, index) => (
                        <div key={index} className="reviews-stat">
                            <div className="reviews-stat-icon">{stat.icon}</div>
                            <div className="reviews-stat-value">{stat.value}</div>
                            <div className="reviews-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Carousel */}
                <div className="reviews-carousel">
                    <div ref={sliderRef} className="reviews-slider keen-slider">
                        {reviews.map((review, index) => (
                            <div key={index} className="reviews-slide keen-slider__slide">
                                <div className="review-card">
                                    {/* Quote Icon */}
                                    <FaQuoteLeft className="review-quote-icon" />

                                    {/* Header */}
                                    <div className="review-header">
                                        <div className="review-avatar">
                                            <span className="review-avatar-text">{review.avatar}</span>
                                            <div className="review-avatar-glow" />
                                        </div>
                                        <div className="review-meta">
                                            <h4 className="review-name">{review.name}</h4>
                                            <p className="review-business">{review.business}</p>
                                            <div className="review-rating">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <FaStar key={i} className="review-star" />
                                                ))}
                                                {review.verified && (
                                                    <span className="review-verified">
                                                        <FaCheckCircle />
                                                        Verified
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="review-content">
                                        <p className="review-text">"{review.text}"</p>
                                    </div>

                                    {/* Footer */}
                                    <div className="review-footer">
                                        <span className="review-date">{review.date}</span>
                                    </div>

                                    {/* Card Glow */}
                                    <div className="review-card-glow" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {loaded && (
                        <>
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="reviews-nav reviews-nav-prev"
                                aria-label="Previous review"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="reviews-nav reviews-nav-next"
                                aria-label="Next review"
                            >
                                <FaChevronRight />
                            </button>
                        </>
                    )}
                </div>

                {/* Dots Indicator */}
                {loaded && (
                    <div className="reviews-dots">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                                className={`reviews-dot ${currentSlide === idx ? 'active' : ''}`}
                                aria-label={`Go to review ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="reviews-cta">
                    <h3 className="reviews-cta-title">
                        Ready to join our growing list of satisfied customers?
                    </h3>
                    <p className="reviews-cta-text">
                        Let's discuss how we can bring your vision to life
                    </p>
                    <a href="#contact" className="reviews-cta-btn">
                        <span>Start Your Project</span>
                        <div className="reviews-cta-glow" />
                    </a>
                </div>
            </div>
        </section>
    );
}