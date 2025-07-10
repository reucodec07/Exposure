"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type ImageType = {
    public_id: string;
    secure_url: string;
};

export default function HeroSlider() {
    const [images, setImages] = useState<ImageType[]>([]);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
        images.length > 0
            ? {
                loop: true,
                slides: { perView: 1 },
                drag: true,
                mode: "snap",
                breakpoints: {
                    "(min-width: 768px)": {
                        slides: { perView: 1 },
                    },
                },
                created() {
                    setLoaded(true);
                },
            }
            : undefined
    );

    // Autoplay effect
    useEffect(() => {
        if (!slider || !slider.current || images.length <= 1) return;
        const interval = setInterval(() => {
            slider.current?.next();
        }, 4000);
        return () => clearInterval(interval);
    }, [slider, images.length]);

    // Fetch images
    useEffect(() => {
        fetch("/api/hero-slider")
            .then((res) => res.json())
            .then((data) => {
                setImages(data.resources || []);
            });
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10"></div>

            {/* Animated particles effect */}
            <div className="absolute inset-0 z-20 opacity-30">
                <div className="particle-dot top-1/4 left-1/4 bg-blue-400"></div>
                <div className="particle-dot top-3/4 right-1/3 bg-cyan-400" style={{ animationDelay: "1s" }}></div>
                <div className="particle-dot bottom-1/4 left-1/2 bg-blue-300" style={{ animationDelay: "2s" }}></div>
                <div className="particle-dot top-1/2 right-1/4 bg-cyan-300" style={{ animationDelay: "1.5s" }}></div>
            </div>

            {/* Slider */}
            <div ref={sliderRef} className="keen-slider h-full">
                {images.length === 0 && (
                    <div className="flex items-center justify-center h-full relative">
                        <div className="text-center z-30">
                            <div className="relative inline-block mb-8">
                                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
                                <h1 className="relative text-5xl md:text-7xl font-bold gradient-text-blue-animated">
                                    Loading Excellence...
                                </h1>
                            </div>
                            <div className="flex justify-center gap-2">
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
                                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                            </div>
                        </div>
                    </div>
                )}
                {images.map((img, idx) => (
                    <div
                        key={img.public_id}
                        className="keen-slider__slide relative flex items-center justify-center"
                    >
                        {/* Background image */}
                        <div className="absolute inset-0">
                            <img
                                src={img.secure_url}
                                alt={`Hero Slide ${idx + 1}`}
                                className="object-cover w-full h-full"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* Content overlay - shown on all slides */}
                        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 text-center">
                            <div className="absolute -inset-4 opacity-20">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-transparent to-cyan-600 blur-3xl animate-pulse"></div>
                            </div>

                            {/* Main heading */}
                            <div className="relative">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                    <span className="block text-white text-shadow-lg">Transform Your</span>
                                    <span className="block mt-2 gradient-text-blue-animated">
                                        Business Visibility
                                    </span>
                                </h1>

                                {/* Subheading */}
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light max-w-3xl mx-auto">
                                    Goa's Premier <span className="font-semibold text-white">LED Signage</span> & <span className="font-semibold text-white">Display Solutions</span> Expert
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>In-House Production</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                                        <span>24/7 Visibility</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                                        <span>Fast Delivery</span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href="#gallery"
                                        className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
                                    >
                                        <span>Explore Our Work</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://wa.me/919850718413"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                        <span>Get Instant Quote</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Scroll indicator - only on first slide */}
                        {idx === 0 && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Slider navigation dots */}
            {images.length > 1 && loaded && (
                <div className="absolute left-0 right-0 bottom-20 flex justify-center gap-3 z-30">
                    {images.map((_, idx) => {
                        const isActive =
                            slider.current &&
                            slider.current.track &&
                            slider.current.track.details &&
                            typeof slider.current.track.details.rel === 'number'
                                ? slider.current.track.details.rel === idx
                                : false;
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.current?.moveToIdx(idx);
                                }}
                                className={`relative h-2 rounded-full transition-all duration-300 ${
                                    isActive ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Side navigation arrows */}
            {images.length > 1 && loaded && (
                <>
                    <button
                        onClick={() => slider.current?.prev()}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => slider.current?.next()}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}
        </section>
    );
}
