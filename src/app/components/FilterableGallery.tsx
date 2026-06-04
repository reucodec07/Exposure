//app/components/FilterableGallery.tsx
"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

type ImageType = {
    public_id: string;
    secure_url: string;
    tags?: string[];
    context?: { custom?: { title?: string; description?: string; client?: string } };
};

const TAGS = ["All", "Portraits", "Weddings", "Commercial", "Events"];

export default function FilterableGallery() {
    const [images, setImages] = useState<ImageType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTag, setSelectedTag] = useState("All");
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/gallery-by-tag?tag=${selectedTag}`)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.resources || []);
                setLoading(false);
                setShowAll(false);
            });
    }, [selectedTag]);

    const visibleCount = showAll ? images.length : Math.min(images.length, 12);

    const nextImage = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <section id="gallery" className="relative py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4 sm:mb-6">
                        <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                            Portfolio
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-blue-600">Portfolio Gallery</span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Explore our latest projects and see how we bring brands to life with
                        stunning photography
                    </p>

                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
                    {TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200
                                     border-2 hover:scale-105 active:scale-95 text-sm sm:text-base
                                     ${selectedTag === tag
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                                : 'bg-white text-slate-700 border-blue-200 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-16 sm:py-20">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                            <div className="absolute inset-0 border-4 border-blue-200 rounded-full" />
                            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin" />
                        </div>
                        <p className="text-blue-700 font-medium text-base sm:text-lg">Loading amazing projects...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-16 sm:py-20">
                        <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🔍</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">No projects found</h3>
                        <p className="text-slate-600 text-base sm:text-lg">
                            Try selecting a different category above.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                            {images.slice(0, visibleCount).map((img, idx) => (
                                <div key={img.public_id}
                                     className="group relative bg-white border border-blue-200 rounded-xl sm:rounded-2xl
                                              overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10
                                              transition-all duration-300 hover:-translate-y-1">

                                    <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                                        <Image
                                            src={img.secure_url}
                                            alt={`Project ${idx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                                <h4 className="text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                                                    {img.context?.custom?.title || `Project ${idx + 1}`}
                                                </h4>
                                                <p className="text-blue-100 text-xs sm:text-sm mb-2 sm:mb-3">
                                                    {img.context?.custom?.description || "Click to view details"}
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrent(idx);
                                                        setIsOpen(true);
                                                    }}
                                                    className="flex items-center bg-white/90 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2
                                                             rounded-lg font-medium hover:bg-white transition-colors duration-200 text-xs sm:text-sm"
                                                    aria-label="View project details"
                                                >
                                                    <span className="mr-1 sm:mr-2">🔍</span>
                                                    <span>View Details</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        {img.tags && img.tags.length > 0 && (
                                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-wrap gap-1">
                                                {img.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag}
                                                          className="bg-blue-600/90 text-white px-2 py-1 rounded-md text-xs font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View More Button */}
                        {images.length > 12 && (
                            <div className="text-center">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700
                                             text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200
                                             hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm sm:text-base"
                                >
                                    {showAll ? "Show Less" : `View All ${images.length} Projects`}
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Lightbox Modal */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/75" />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="relative bg-white rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[90vh]
                                                       overflow-hidden shadow-2xl">

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90
                                         rounded-full flex items-center justify-center text-slate-700 hover:bg-white
                                         transition-all duration-200 shadow-lg text-sm sm:text-base"
                                aria-label="Close gallery"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                                {/* Image Section */}
                                <div className="flex-1 relative bg-slate-100 min-h-80 sm:min-h-96 lg:min-h-[600px]">
                                    <Image
                                        src={images[current]?.secure_url}
                                        alt={`Project ${current + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                    />

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2
                                                 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center
                                                 text-slate-700 hover:bg-white transition-all duration-200 shadow-lg text-sm sm:text-base"
                                        aria-label="Previous image"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2
                                                 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center
                                                 text-slate-700 hover:bg-white transition-all duration-200 shadow-lg text-sm sm:text-base"
                                        aria-label="Next image"
                                    >
                                        →
                                    </button>

                                    {/* Image Counter */}
                                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2
                                                  bg-white/90 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-slate-700
                                                  font-medium text-xs sm:text-sm">
                                        {current + 1} / {images.length}
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="lg:w-96 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                                        {images[current]?.context?.custom?.title || "Featured Project"}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                                        {images[current]?.context?.custom?.description ||
                                            "A stunning capture showcasing professional lighting and beautiful composition."}
                                    </p>

                                    {images[current]?.context?.custom?.client && (
                                        <div className="mb-4 sm:mb-6">
                                            <span className="text-slate-500 font-medium text-sm sm:text-base">Client: </span>
                                            <span className="text-slate-800 font-semibold text-sm sm:text-base">
                                                {images[current].context.custom.client}
                                            </span>
                                        </div>
                                    )}

                                    {images[current]?.tags && images[current].tags.length > 0 && (
                                        <div className="mb-4 sm:mb-6">
                                            <span className="text-slate-500 font-medium block mb-2 text-sm sm:text-base">Project Type:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {images[current].tags.map((tag) => (
                                                    <span key={tag}
                                                          className="bg-blue-100 border border-blue-200 text-blue-700
                                                                   px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-whtie hover:bg-blue-100
                                                 font-semibold rounded-lg sm:rounded-xl
                                                 text-sm sm:text-base w-full sm:w-auto"
                                    >
                                        Get Similar Project Quote
                                    </a>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>
        </section>
    );
}