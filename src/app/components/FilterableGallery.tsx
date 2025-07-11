"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaExpandAlt, FaTimes, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";

type ImageType = {
    public_id: string;
    secure_url: string;
    tags?: string[];
    context?: { custom?: { title?: string; description?: string; client?: string } };
};

const TAGS = ["All", "LED", "ACP", "Neon", "Vehicle"];

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
        <section id="gallery" className="gallery-section">
            {/* Background Elements */}
            <div className="gallery-bg-pattern" />
            <div className="gallery-bg-glow" />

            <div className="gallery-container">
                {/* Header */}
                <div className="gallery-header">
                    <h2 className="gallery-title">
                        <span className="gallery-title-highlight">Portfolio Gallery</span>
                    </h2>
                    <p className="gallery-subtitle">
                        Explore our latest projects and see how we bring brands to life with
                        innovative signage solutions
                    </p>
                    <div className="gallery-title-divider" />
                </div>

                {/* Filter Tabs */}
                <div className="gallery-filters">
                    {TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`gallery-filter ${selectedTag === tag ? 'active' : ''}`}
                        >
                            <span>{tag}</span>
                            <div className="gallery-filter-indicator" />
                        </button>
                    ))}
                </div>

                {/* Content */}
                {loading ? (
                    <div className="gallery-loading">
                        <div className="gallery-spinner">
                            <div className="gallery-spinner-ring"></div>
                            <div className="gallery-spinner-ring"></div>
                            <div className="gallery-spinner-ring"></div>
                        </div>
                        <p className="gallery-loading-text">Loading amazing projects...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="gallery-empty">
                        <div className="gallery-empty-icon">🔍</div>
                        <h3 className="gallery-empty-title">No projects found</h3>
                        <p className="gallery-empty-text">
                            Try selecting a different category above.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Image Grid */}
                        <div className="gallery-grid">
                            {images.slice(0, visibleCount).map((img, idx) => (
                                <div key={img.public_id} className="gallery-item">
                                    <div className="gallery-item-container">
                                        <img
                                            src={img.secure_url}
                                            alt={`Project ${idx + 1}`}
                                            className="gallery-item-img"
                                            loading="lazy"
                                        />

                                        {/* Overlay */}
                                        <div className="gallery-item-overlay">
                                            <div className="gallery-item-content">
                                                <h4 className="gallery-item-title">
                                                    {img.context?.custom?.title || `Project ${idx + 1}`}
                                                </h4>
                                                <p className="gallery-item-desc">
                                                    {img.context?.custom?.description || "Click to view details"}
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrent(idx);
                                                        setIsOpen(true);
                                                    }}
                                                    className="gallery-item-btn"
                                                    aria-label="View project details"
                                                >
                                                    <FaExpandAlt />
                                                    <span>View Details</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Corner Accent */}
                                        <div className="gallery-item-accent" />

                                        {/* Tags */}
                                        {img.tags && img.tags.length > 0 && (
                                            <div className="gallery-item-tags">
                                                {img.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="gallery-item-tag">
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
                            <div className="gallery-view-more">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="gallery-view-more-btn"
                                >
                                    <span>{showAll ? "Show Less" : `View All ${images.length} Projects`}</span>
                                    <div className="gallery-view-more-glow" />
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Lightbox Modal */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="gallery-modal">
                    <div className="gallery-modal-backdrop" />
                    <div className="gallery-modal-container">
                        <Dialog.Panel className="gallery-modal-panel">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="gallery-modal-close"
                                aria-label="Close gallery"
                            >
                                <FaTimes />
                            </button>

                            <div className="gallery-modal-content">
                                {/* Image Section */}
                                <div className="gallery-modal-image-section">
                                    <div className="gallery-modal-image-container">
                                        <img
                                            src={images[current]?.secure_url}
                                            alt={`Project ${current + 1}`}
                                            className="gallery-modal-image"
                                        />

                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={prevImage}
                                            className="gallery-modal-nav gallery-modal-nav-prev"
                                            aria-label="Previous image"
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="gallery-modal-nav gallery-modal-nav-next"
                                            aria-label="Next image"
                                        >
                                            <FaChevronRight />
                                        </button>

                                        {/* Image Counter */}
                                        <div className="gallery-modal-counter">
                                            {current + 1} / {images.length}
                                        </div>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="gallery-modal-details">
                                    <div className="gallery-modal-details-content">
                                        <h3 className="gallery-modal-title">
                                            {images[current]?.context?.custom?.title || "Featured Project"}
                                        </h3>

                                        <p className="gallery-modal-description">
                                            {images[current]?.context?.custom?.description ||
                                                "Quality craftsmanship meets innovative design in this stunning signage solution."}
                                        </p>

                                        {images[current]?.context?.custom?.client && (
                                            <div className="gallery-modal-client">
                                                <span className="gallery-modal-client-label">Client:</span>
                                                <span className="gallery-modal-client-name">
                                                    {images[current].context.custom.client}
                                                </span>
                                            </div>
                                        )}

                                        {images[current]?.tags && images[current].tags.length > 0 && (
                                            <div className="gallery-modal-tags">
                                                <span className="gallery-modal-tags-label">Project Type:</span>
                                                <div className="gallery-modal-tags-list">
                                                    {images[current].tags.map((tag) => (
                                                        <span key={tag} className="gallery-modal-tag">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <a
                                            href="#contact"
                                            onClick={() => setIsOpen(false)}
                                            className="gallery-modal-cta"
                                        >
                                            <span>Get Similar Project Quote</span>
                                            <div className="gallery-modal-cta-glow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>
        </section>
    );
}