"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

const reviews = [
  {
    name: "Vaishali Pawar",
    stars: 5,
    text: "One of the most Excellent Hardworking Team they have, In House Production with all the latest Technology Machineries...Good Work",
    date: "June 2020",
    business: "Local Business Owner",
    verified: true,
    avatar: "VP",
  },
  {
    name: "Singh Purohit",
    stars: 5,
    text: "Our shop's frontlite board looks amazing. The team was responsive and delivered right on time.",
    date: "May 2021",
    business: "Retail Store",
    verified: true,
    avatar: "SP",
  },
  {
    name: "Rajesh Kumar",
    stars: 5,
    text: "The LED scrolling board they installed has significantly increased our customer footfall. Excellent ROI!",
    date: "August 2021",
    business: "Restaurant Chain",
    verified: true,
    avatar: "RK",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    console.log(currentSlide);
    if (!instanceRef.current) return;
    const interval = setInterval(() => instanceRef.current!.next(), 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="reviews" className="py-20 bg-bg-muted text-text-main">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">
            Client Success Stories
          </h2>
          <p className="text-gray-600 mt-2">
            Hear what our satisfied clients say about our work
          </p>
          <div className="h-1 w-20 bg-primary mx-auto my-4 rounded" />
        </div>

        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, idx) => (
            <div key={idx} className="keen-slider__slide px-4">
              <div className="bg-white border border-card-border rounded-lg p-6 shadow hover:shadow-md transition h-full flex flex-col justify-between">
                <div>
                  <FaQuoteLeft className="text-primary text-xl mb-2" />
                  <p className="text-sm text-gray-700">{review.text}</p>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.business}</p>
                    <div className="flex items-center gap-1 mt-1 text-primary text-xs">
                      {[...Array(review.stars)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {review.verified && (
                        <span className="flex items-center gap-1 text-green-600 text-xs ml-2">
                          <FaCheckCircle /> Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="mt-3 text-xs text-gray-400">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {loaded && (
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="p-2 bg-white border border-gray-300 rounded-full hover:bg-primary hover:text-white transition"
              aria-label="Prev review"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="p-2 bg-white border border-gray-300 rounded-full hover:bg-primary hover:text-white transition"
              aria-label="Next review"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
