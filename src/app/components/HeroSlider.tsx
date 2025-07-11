"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type ImageType = {
    public_id: string;
    secure_url: string;
};

export default function HeroSlider() {
    const [images, setImages] = useState<ImageType[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [slideIdx, setSlideIdx] = useState(0);

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: {
                perView: 1,
                spacing: 0
            },
            mode: "snap",
            drag: true,
            breakpoints: {
                "(min-width: 768px)": {
                    slides: {
                        perView: 1,
                        spacing: 0
                    }
                }
            },
            created(s: KeenSliderInstance) {
                const rel = s.track?.details?.rel;
                if (rel != null) {
                    setLoaded(true);
                    setSlideIdx(rel);
                }
            },
            slideChanged(s: KeenSliderInstance) {
                const rel = s.track?.details?.rel;
                if (rel != null) setSlideIdx(rel);
            },
        });

    useEffect(() => {
        fetch("/api/hero-slider")
            .then((res) => res.json())
            .then((data) => setImages(data.resources || []));
    }, []);

    useEffect(() => {
        if (slider?.current) {
            slider.current.update();
            slider.current.moveToIdx(0);
        }
    }, [images, slider]);

    useEffect(() => {
        if (!slider?.current || images.length <= 1) return;
        const iv = setInterval(() => slider.current?.next(), 5000);
        return () => clearInterval(iv);
    }, [slider, images.length]);

    return (
        <section id="hero" className="hero-section">
            {/* Animated Background Grid */}
            <div className="hero-bg-grid" />

            {/* Floating Particles */}
            <div className="hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="hero-particle"
                        style={{
                            '--delay': `${i * 0.2}s`,
                            '--duration': `${3 + (i % 3)}s`,
                            '--x': `${(i * 17) % 100}%`,
                            '--y': `${(i * 23) % 100}%`
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="hero-content">
                {/* Text Content */}
                <div className="hero-text">
                    <div className="hero-text-content">
                        <span className="hero-badge">
                <span className="hero-badge-text">Illuminate Your Brand</span>
                <div className="hero-badge-glow" />
                        </span>
                        <h1 className="hero-title">
                            <span className="hero-title-line">Pixel Perfect</span>
                            <span className="hero-title-neon">LED Signs</span>
                        </h1>
                        <p className="hero-description">
                            Transform your business visibility with Goa's premier LED signage
                            and display solutions expert.
                        </p>
                        <ul className="hero-features">
                            {[
                                "Custom LED Boards & Displays",
                                "24/7 Eye-Catching Visibility",
                                "Fast Delivery & Installation",
                            ].map((feat, index) => (
                                <li key={feat} className="hero-feature">
                                    <div className="hero-feature-dot" />
                                    <span className="hero-feature-text">{feat}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="hero-actions">
                            <a href="#gallery" className="hero-btn hero-btn-primary">
                                <span>View Portfolio</span>
                                <div className="hero-btn-glow" />
                            </a>
                            <a href="https://wa.me/919850718413"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="hero-btn hero-btn-secondary">
                                <span>Get Quote</span>
                                <div className="hero-btn-glow" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Carousel */}
                <div className="hero-slider">
                    {!images.length ? (
                        <div className="hero-loading">
                            <div className="hero-loading-text">
                                <span>Loading</span>
                                <div className="hero-loading-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div ref={sliderRef} className="hero-slider-container keen-slider">
                            {images.map((img, idx) => (
                                <div key={img.public_id} className="keen-slider__slide" style={{ minWidth: '100%' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <Image
                                            src={img.secure_url}
                                            alt={`Slide ${idx + 1}`}
                                            fill
                                            className="hero-slide-img"
                                            style={{ objectFit: 'cover' }}
                                            priority={idx === 0}
                                        />
                                        <div className="hero-slide-overlay" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Navigation Dots */}
                    {loaded && images.length > 1 && (
                        <div className="hero-dots">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => slider?.current?.moveToIdx(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`hero-dot ${slideIdx === idx ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Navigation Arrows */}
                    {loaded && images.length > 1 && (
                        <>
                            <button
                                onClick={() => slider?.current?.prev()}
                                aria-label="Previous Slide"
                                className="hero-arrow hero-arrow-prev"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => slider?.current?.next()}
                                aria-label="Next Slide"
                                className="hero-arrow hero-arrow-next"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
                <a href="#about" className="hero-scroll-link">
                    <div className="hero-scroll-mouse">
                        <div className="hero-scroll-wheel" />
                    </div>
                    <span className="hero-scroll-text">Scroll</span>
                </a>
            </div>
            </div>
        </section>
    );
}
