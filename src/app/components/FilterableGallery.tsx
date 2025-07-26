//app/components/FilterableGallery.tsx
"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaExpandAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ImageType = {
    public_id: string;
    secure_url: string;
    tags?: string[];
    context?: { custom?: { title?: string; description?: string; client?: string } };
};

const TAGS = ["All", "LED", "ACP", "Acrylic","Fabrication"];

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
        <section id="gallery" className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent" />
                <div
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_2px,transparent_2px),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_2px,transparent_2px)]"
                    style={{ backgroundSize: '100px 100px' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                            Portfolio
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-blue-600">Portfolio Gallery</span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                        Explore our latest projects and see how we bring brands to life with
                        innovative signage solutions
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-200
                                     border-2 hover:scale-105 active:scale-95 relative overflow-hidden
                                     ${selectedTag === tag
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25'
                                : 'bg-white text-slate-700 border-blue-200 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                        >
                            {tag}
                            {selectedTag === tag && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2
                                              w-8 h-0.5 bg-white rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative w-16 h-16 mb-6">
                            <div className="absolute inset-0 border-4 border-blue-200 rounded-full" />
                            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin" />
                        </div>
                        <p className="text-blue-700 font-medium text-lg">Loading amazing projects...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">No projects found</h3>
                        <p className="text-slate-600 text-lg">
                            Try selecting a different category above.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Image Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                            {images.slice(0, visibleCount).map((img, idx) => (
                                <div key={img.public_id}
                                     className="group relative bg-white border border-blue-200 rounded-2xl
                                              overflow-hidden hover:shadow-xl hover:shadow-blue-500/10
                                              transition-all duration-300 hover:-translate-y-2">

                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={img.secure_url}
                                            alt={`Project ${idx + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110
                                                     transition-transform duration-500"
                                            loading="lazy"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h4 className="text-white font-bold mb-2">
                                                    {img.context?.custom?.title || `Project ${idx + 1}`}
                                                </h4>
                                                <p className="text-blue-100 text-sm mb-3">
                                                    {img.context?.custom?.description || "Click to view details"}
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrent(idx);
                                                        setIsOpen(true);
                                                    }}
                                                    className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm
                                                             text-blue-700 px-4 py-2 rounded-lg font-medium
                                                             hover:bg-white transition-colors duration-200"
                                                    aria-label="View project details"
                                                >
                                                    <FaExpandAlt className="w-3 h-3" />
                                                    <span>View Details</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        {img.tags && img.tags.length > 0 && (
                                            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                                {img.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag}
                                                          className="bg-blue-600/90 backdrop-blur-sm text-white
                                                                   px-2 py-1 rounded-md text-xs font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-b-[30px]
                                                      border-l-transparent border-b-blue-500/80
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View More Button */}
                        {images.length > 12 && (
                            <div className="text-center">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700
                                             text-white font-semibold rounded-xl transition-all duration-200
                                             hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                >
                                    {showAll ? "Show Less" : `View All ${images.length} Projects`}
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Lightbox Modal */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh]
                                                       overflow-hidden shadow-2xl">

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm
                                         rounded-full flex items-center justify-center text-slate-700
                                         hover:bg-white transition-all duration-200 shadow-lg"
                                aria-label="Close gallery"
                            >
                                <FaTimes className="w-4 h-4" />
                            </button>

                            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                                {/* Image Section */}
                                <div className="flex-1 relative bg-slate-100 min-h-[400px] lg:min-h-[600px]">
                                    <img
                                        src={images[current]?.secure_url}
                                        alt={`Project ${current + 1}`}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2
                                                 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full
                                                 flex items-center justify-center text-slate-700
                                                 hover:bg-white transition-all duration-200 shadow-lg"
                                        aria-label="Previous image"
                                    >
                                        <FaChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2
                                                 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full
                                                 flex items-center justify-center text-slate-700
                                                 hover:bg-white transition-all duration-200 shadow-lg"
                                        aria-label="Next image"
                                    >
                                        <FaChevronRight className="w-4 h-4" />
                                    </button>

                                    {/* Image Counter */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                                                  bg-white/90 backdrop-blur-sm rounded-full px-4 py-2
                                                  text-slate-700 font-medium text-sm">
                                        {current + 1} / {images.length}
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="lg:w-96 p-6 lg:p-8 overflow-y-auto">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                        {images[current]?.context?.custom?.title || "Featured Project"}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {images[current]?.context?.custom?.description ||
                                            "Quality craftsmanship meets innovative design in this stunning signage solution."}
                                    </p>

                                    {images[current]?.context?.custom?.client && (
                                        <div className="mb-6">
                                            <span className="text-slate-500 font-medium">Client: </span>
                                            <span className="text-slate-800 font-semibold">
                                                {images[current].context.custom.client}
                                            </span>
                                        </div>
                                    )}

                                    {images[current]?.tags && images[current].tags.length > 0 && (
                                        <div className="mb-6">
                                            <span className="text-slate-500 font-medium block mb-2">Project Type:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {images[current].tags.map((tag) => (
                                                    <span key={tag}
                                                          className="bg-blue-100 border border-blue-200 text-blue-700
                                                                   px-3 py-1 rounded-full text-sm font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700
                                                 text-white font-semibold rounded-xl transition-colors duration-200"
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