"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

type ImageType = {
    public_id: string;
    secure_url: string;
    tags: string[];
    context?: any;
};

const TAGS = ["All", "LED", "ACP", "Neon", "Vehicle"];

const tagGradients: { [key: string]: string } = {
    "All": "from-blue-500 to-cyan-500",
    "LED": "from-blue-600 to-blue-400",
    "ACP": "from-gray-600 to-gray-400",
    "Neon": "from-pink-500 to-purple-500",
    "Vehicle": "from-green-500 to-teal-500"
};

export default function FilterableGallery() {
    const [images, setImages] = useState<ImageType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTag, setSelectedTag] = useState("All");
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/gallery-by-tag?tag=${selectedTag}`)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.resources || []);
                setLoading(false);
            });
    }, [selectedTag]);

    const openModal = (idx: number) => {
        setCurrent(idx);
        setIsOpen(true);
    };

    const getProjectDetails = (img: ImageType) => ({
        title: img.context?.custom?.title || "",
        description: img.context?.custom?.description || "",
        client: img.context?.custom?.client || "",
        tags: img.tags || [],
    });

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Animated pattern */}
            <div className="absolute inset-0 opacity-5 gallery-pattern"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-blue-animated">
                            Portfolio Gallery
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our latest projects and see how we bring brands to life with innovative signage solutions
                    </p>
                    <div className="w-24 h-1 mx-auto mt-4 gradient-bar"></div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedTag === tag
                                    ? "text-white shadow-lg"
                                    : "text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50"
                            }`}
                        >
                            {selectedTag === tag && (
                                <>
                                    <div className={`filter-tab-selected bg-gradient-to-r ${tagGradients[tag]}`}></div>
                                    <div className={`filter-tab-selected-blur bg-gradient-to-r ${tagGradients[tag]}`}></div>
                                </>
                            )}
                            <span className="relative z-10">{tag}</span>
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative">
                            <div className="gallery-spinner"></div>
                            <div className="gallery-spinner gallery-spinner-secondary"></div>
                        </div>
                        <p className="text-gray-400 mt-4">Loading amazing projects...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <p className="text-gray-400 text-lg">No projects found for this category.</p>
                        <p className="text-gray-500 mt-2">Try selecting a different category above.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {images.map((img, idx) => (
                            <button
                                key={img.public_id}
                                onClick={() => openModal(idx)}
                                className="group relative rounded-xl overflow-hidden bg-gray-900 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 gallery-item"
                                aria-label="Open project details"
                            >
                                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                                    <img
                                        src={img.secure_url}
                                        alt={`Project ${idx + 1}`}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="gallery-image-overlay"></div>

                                    {/* Hover content */}
                                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="text-left">
                                            <p className="text-white font-semibold text-lg">View Project</p>
                                            <p className="text-gray-300 text-sm">Click to see details</p>
                                        </div>
                                    </div>

                                    {/* Corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* Modal with project details */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 modal-overlay" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden relative border border-gray-700">
                            {/* Close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm z-20 transition-colors"
                                aria-label="Close gallery"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {images[current] && (
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image section */}
                                    <div className="lg:w-2/3 relative bg-black">
                                        <img
                                            src={images[current].secure_url}
                                            alt="Project"
                                            className="w-full h-[400px] lg:h-[500px] object-contain"
                                        />

                                        {/* Navigation arrows */}
                                        <button
                                            onClick={() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors"
                                            aria-label="Previous image"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors"
                                            aria-label="Next image"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {/* Image counter */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                            {current + 1} / {images.length}
                                        </div>
                                    </div>

                                    {/* Details section */}
                                    <div className="lg:w-1/3 p-6 lg:p-8">
                                        <h3 className="text-2xl font-bold gradient-text-blue mb-4">
                                            {getProjectDetails(images[current]).title || "Featured Project"}
                                        </h3>

                                        <p className="text-gray-300 mb-6">
                                            {getProjectDetails(images[current]).description ||
                                                "Another stunning signage solution delivered by Pixel Image Goa. Quality craftsmanship meets innovative design."}
                                        </p>

                                        {/* Client testimonial */}
                                        {getProjectDetails(images[current]).client && (
                                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                                                <p className="text-blue-400 text-sm font-medium mb-1">Client Feedback</p>
                                                <p className="text-gray-300 italic">"{getProjectDetails(images[current]).client}"</p>
                                            </div>
                                        )}

                                        {/* Tags */}
                                        {getProjectDetails(images[current]).tags.length > 0 && (
                                            <div className="space-y-2">
                                                <p className="text-gray-400 text-sm font-medium">Project Type</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {getProjectDetails(images[current]).tags.map((t: string) => (
                                                        <span
                                                            key={t}
                                                            className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 text-xs px-3 py-1 rounded-full"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* CTA */}
                                        <a
                                            href="#contact"
                                            className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Get Similar Project Quote
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>
        </section>
    );
}
