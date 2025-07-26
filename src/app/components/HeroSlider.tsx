//app/components/HeroSlider.tsx

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
            slides: { perView: 1, spacing: 0 },
            mode: "snap",
            drag: true,
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
        }
    );

    useEffect(() => {
        fetch("/api/hero-slider")
            .then((res) => res.json())
            .then((data) => setImages(data.resources || []));
    }, []);

    useEffect(() => {
        if (slider?.current && images.length > 0) {
            slider.current.update();
        }
    }, [images, slider]);

    useEffect(() => {
        if (!slider?.current || images.length <= 1) return;
        const iv = setInterval(() => slider.current?.next(), 5000);
        return () => clearInterval(iv);
    }, [slider, images.length]);

    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-transparent to-blue-200/40" />
                <div
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(59,130,246,0.08)_25%,rgba(59,130,246,0.08)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.08)_75%,rgba(59,130,246,0.08)_76%,transparent_77%,transparent),linear-gradient(-45deg,transparent_24%,rgba(59,130,246,0.08)_25%,rgba(59,130,246,0.08)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.08)_75%,rgba(59,130,246,0.08)_76%,transparent_77%,transparent)]"
                    style={{ backgroundSize: '60px 60px' }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse`}
                        style={{
                            left: `${(i * 17) % 100}%`,
                            top: `${(i * 23) % 100}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + (i % 3)}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
                {/* Text Content */}
                <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
                    <div className="max-w-2xl w-full animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                                ✨ Illuminate Your Brand
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-slate-800 block">Pixel Perfect</span>
                            <span className="text-blue-600 block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                LED Signs
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                            Transform your business visibility with Goa's premier LED signage
                            and display solutions expert.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-8">
                            {[
                                "Custom LED Boards & Displays",
                                "24/7 Eye-Catching Visibility",
                                "Fast Delivery & Installation",
                            ].map((feature, index) => (
                                <li key={feature} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#gallery"
                                className="inline-flex items-center justify-center px-8 py-4
                                         bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl
                                         transition-all duration-200 hover:scale-105 active:scale-95
                                         shadow-lg hover:shadow-xl shadow-blue-600/25"
                            >
                                View Portfolio
                            </a>
                            <a
                                href="https://wa.me/919850718413"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4
                                         bg-white hover:bg-blue-50 text-blue-700 font-semibold rounded-xl
                                         border-2 border-blue-200 hover:border-blue-300
                                         transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                Get Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Carousel */}
                <div className="flex-1 relative min-h-[50vh] lg:min-h-screen">
                    {!images.length ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded-2xl m-4">
                            <div className="text-center">
                                <div className="inline-flex items-center space-x-2 text-blue-600 mb-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                </div>
                                <p className="text-blue-700 font-medium">Loading amazing projects...</p>
                            </div>
                        </div>
                    ) : (
                        <div className="relative h-full">
                            <div ref={sliderRef} className="keen-slider h-full rounded-2xl m-4 overflow-hidden shadow-2xl">
                                {images.map((img, idx) => (
                                    <div key={img.public_id} className="keen-slider__slide relative">
                                        <Image
                                            src={img.secure_url}
                                            alt={`Project ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={idx === 0}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Dots */}
                            {loaded && images.length > 1 && (
                                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                                              flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => slider?.current?.moveToIdx(idx)}
                                            aria-label={`Go to slide ${idx + 1}`}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 
                                                     ${slideIdx === idx
                                                ? 'bg-blue-600 scale-125'
                                                : 'bg-slate-300 hover:bg-slate-400'
                                            }`}
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
                                        className="absolute left-8 top-1/2 -translate-y-1/2
                                                 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full
                                                 flex items-center justify-center text-slate-700
                                                 hover:bg-white transition-all duration-200 shadow-lg
                                                 hover:scale-110 active:scale-95"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => slider?.current?.next()}
                                        aria-label="Next Slide"
                                        className="absolute right-8 top-1/2 -translate-y-1/2
                                                 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full
                                                 flex items-center justify-center text-slate-700
                                                 hover:bg-white transition-all duration-200 shadow-lg
                                                 hover:scale-110 active:scale-95"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20
                          lg:left-1/4 lg:transform lg:-translate-x-1/2">
                <a
                    href="#about"
                    className="flex flex-col items-center space-y-2 text-slate-600
                             hover:text-blue-600 transition-colors duration-200 group"
                >
                    <div className="w-6 h-10 border-2 border-current rounded-full
                                  flex justify-center p-1 group-hover:border-blue-600">
                        <div className="w-1 h-3 bg-current rounded-full animate-bounce" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wide">Scroll</span>
                </a>
            </div>
        </section>
    );
}
