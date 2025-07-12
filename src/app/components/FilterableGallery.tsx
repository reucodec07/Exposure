"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  FaExpandAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

type ImageType = {
  public_id: string;
  secure_url: string;
  tags?: string[];
  context?: {
    custom?: { title?: string; description?: string; client?: string };
  };
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
  const nextImage = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section id="gallery" className="py-20 bg-bg-main text-text-main">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-primary">Portfolio Gallery</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto mt-2">
            Explore our latest projects and see how we bring brands to life with
            innovative signage solutions.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto my-4 rounded" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full border ${
                selectedTag === tag
                  ? "bg-primary text-white"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              } transition`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-10 text-text-muted">
            Loading projects...
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-10 text-text-muted">
            No projects found.
          </div>
        ) : (
          <>
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.slice(0, visibleCount).map((img, idx) => (
                <div
                  key={img.public_id}
                  className="relative overflow-hidden rounded-lg border border-card-border shadow hover:shadow-lg transition group"
                >
                  <Image
                    src={img.secure_url}
                    alt={`Project ${idx + 1}`}
                    fill
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition">
                    <h4 className="text-lg font-semibold">
                      {img.context?.custom?.title || `Project ${idx + 1}`}
                    </h4>
                    <p className="text-sm text-text-muted">
                      {img.context?.custom?.description ||
                        "Click to view details"}
                    </p>
                    <button
                      onClick={() => {
                        setCurrent(idx);
                        setIsOpen(true);
                      }}
                      className="mt-2 px-3 py-1 text-sm bg-primary text-white rounded-full flex items-center gap-2"
                    >
                      <FaExpandAlt /> View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            {images.length > 12 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
                >
                  {showAll ? "Show Less" : `View All ${images.length} Projects`}
                </button>
              </div>
            )}
          </>
        )}

        {/* Modal */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white max-w-4xl w-full rounded-lg shadow-lg overflow-hidden relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* Image */}
                <div className="w-full md:w-2/3 relative aspect-video rounded overflow-hidden">
                  <Image
                    src={images[current]?.secure_url}
                    alt="Gallery Modal"
                    fill
                    className="object-cover rounded"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-2 right-2 text-sm text-gray-600 bg-white px-2 py-1 rounded shadow">
                    {current + 1} / {images.length}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 text-sm text-gray-700">
                  <h3 className="text-xl font-semibold mb-2">
                    {images[current]?.context?.custom?.title ||
                      "Featured Project"}
                  </h3>
                  <p className="mb-2">
                    {images[current]?.context?.custom?.description ||
                      "Quality craftsmanship meets innovative design in this stunning signage solution."}
                  </p>
                  {images[current]?.context?.custom?.client && (
                    <p className="mb-2">
                      <strong>Client:</strong>{" "}
                      {images[current].context.custom.client}
                    </p>
                  )}
                  {images &&
                    images[current]?.tags &&
                    images[current]?.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {images[current].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-primary text-white rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark"
                  >
                    Get a Similar Project Quote
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
