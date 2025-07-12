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

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
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
  });

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
    <section id="hero" className="bg-white text-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-3">
            Illuminate Your Brand
          </span>
          <h1 className="text-4xl font-bold mb-4">
            <span>Pixel Perfect</span>
            <br />
            <span className="text-primary">LED Signs</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Transform your business visibility with Goa’s premier LED signage
            and display solutions expert.
          </p>
          <ul className="mb-6 space-y-2 text-sm text-gray-600">
            {[
              "Custom LED Boards & Displays",
              "24/7 Eye-Catching Visibility",
              "Fast Delivery & Installation",
            ].map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {feat}
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a
              href="#gallery"
              className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition"
            >
              View Portfolio
            </a>
            <a
              href="https://wa.me/919850718413"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Right Carousel */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
          {!images.length ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-500">
              Loading...
            </div>
          ) : (
            <div ref={sliderRef} className="keen-slider h-full">
              {images.map((img, idx) => (
                <div
                  key={img.public_id}
                  className="keen-slider__slide relative"
                >
                  <Image
                    src={img.secure_url}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>
          )}

          {/* Navigation Dots */}
          {loaded && images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => slider?.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full border ${
                    slideIdx === idx
                      ? "bg-primary border-primary"
                      : "bg-white border-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
