// src/app/components/Gallery.tsx
"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type ImageType = {
    public_id: string;
    secure_url: string;
};

export default function Gallery() {
    const [images, setImages] = useState<ImageType[]>([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    // Keen Slider setup
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: current,
        slideChanged(s) {
            setCurrent(s.track.details.rel);
        },
    });

    // Fetch images
    useEffect(() => {
        fetch("/api/gallery")
            .then((res) => res.json())
            .then((data) => {
                setImages(data.resources || []);
                setLoading(false);
            });
    }, []);

    // Open modal at the selected image
    const openModal = (idx: number) => {
        setCurrent(idx);
        setIsOpen(true);
    };

    // Move Keen Slider to correct index on modal open
    useEffect(() => {
        if (isOpen && instanceRef.current) {
            instanceRef.current.moveToIdx(current, true);
        }
    }, [isOpen, current, instanceRef]);

    return (
        <section id="gallery" className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
                {loading ? (
                    <div className="text-center text-lg text-gray-500 py-10">Loading images…</div>
                ) : (
                    <>
                        {/* Grid (show up to 6 images) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {images.slice(0, 6).map((img, idx) => (
                                <button
                                    key={img.public_id}
                                    className="rounded-xl overflow-hidden shadow hover:shadow-lg transition group focus:outline-none"
                                    onClick={() => openModal(idx)}
                                    aria-label="Open gallery lightbox"
                                >
                                    <img
                                        src={img.secure_url}
                                        alt={`Gallery work ${idx + 1}`}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                        {images.length > 6 && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={() => openModal(0)}
                                    className="inline-block bg-blue-600 text-white rounded-xl px-6 py-3 font-medium shadow hover:bg-blue-700 transition"
                                >
                                    View All Gallery
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Modal with Keen Slider */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                                aria-label="Close gallery"
                            >
                                ×
                            </button>
                            <div ref={sliderRef} className="keen-slider">
                                {images.map((img, idx) => (
                                    <div className="keen-slider__slide flex items-center justify-center bg-black" key={img.public_id}>
                                        <img
                                            src={img.secure_url}
                                            alt={`Gallery work ${idx + 1}`}
                                            className="max-h-[70vh] max-w-full mx-auto rounded"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Arrows */}
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                                aria-label="Next image"
                            >
                                ›
                            </button>
                            {/* Counter */}
                            <div className="absolute bottom-2 right-4 text-sm text-white bg-black/60 px-3 py-1 rounded">
                                {current + 1} / {images.length}
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>
        </section>
    );
}
