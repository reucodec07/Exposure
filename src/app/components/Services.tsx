"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaLightbulb, FaCog, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "LED Boards",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163618/PixelImageGoa/Gallery/b4tpwwickosueg0lrzbx.jpg",
    summary: "Custom LED displays for maximum visibility.",
    description:
      "Get noticed with vibrant, programmable LED boards—ideal for retail, restaurants, and events. Energy efficient, easy to update, and designed to grab attention 24/7.",
    icon: FaLightbulb,
    category: "Digital",
  },
  {
    title: "Glow Sign Boards",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/yzinorq5ueoxk6knpx34.jpg",
    summary: "Bright backlit sign boards for brands.",
    description:
      "Enhance your storefront with high-brightness LED glow signs. Built with durable acrylic for excellent nighttime visibility and long-lasting impact.",
    icon: FaLightbulb,
    category: "Illuminated",
  },
  {
    title: "Fabrication Works",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/nkvplqxdlkvuuno1iklr.jpg",
    summary: "Custom fabrication for displays and mounts.",
    description:
      "Expert metal and acrylic fabrication for unique display frames, mounts, and custom signage. Perfect for businesses needing specialized solutions.",
    icon: FaCog,
    category: "Custom",
  },
  {
    title: "Frontlite Boards",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/t4doq5qxupz2plsdcu47.jpg",
    summary: "Front-lit boards for outdoor advertising.",
    description:
      "Weather-resistant boards illuminated from the front. Ideal for keeping your message clear and visible in any outdoor setting.",
    icon: FaLightbulb,
    category: "Outdoor",
  },
  {
    title: "Foam Boards (Sign Boards)",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163617/PixelImageGoa/Gallery/kjuuliqwbqfxsek1s7us.jpg",
    summary: "Lightweight foam signs for indoor use.",
    description:
      "Professional, lightweight foam boards—great for store displays, exhibitions, and pop-up promotions. Easily customizable and affordable.",
    icon: FaRocket,
    category: "Indoor",
  },
  {
    title: "ACP Paneling / Cladding",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163616/PixelImageGoa/Gallery/zfuo2v5n4clatgu57ojj.jpg",
    summary: "Modern ACP panels for shop exteriors.",
    description:
      "Upgrade your exterior with stylish, weatherproof Aluminum Composite Panel (ACP) cladding. Adds a premium look to facades and brand walls.",
    icon: FaCog,
    category: "Exterior",
  },
  {
    title: "Vehicle Display Fabrication",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163616/PixelImageGoa/Gallery/rvihfiolkkqrx6g6trnc.jpg",
    summary: "Mobile advertising on vehicle hoardings.",
    description:
      "Take your message anywhere! Custom fabrication for vehicle-mounted hoardings and moving displays, built tough for the road.",
    icon: FaRocket,
    category: "Mobile",
  },
  {
    title: "Acrylic Fabrications",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163616/PixelImageGoa/Gallery/v8yvucpcdk1nscovvuvf.jpg",
    summary: "Precision acrylic letters and signs.",
    description:
      "Crystal-clear acrylic solutions, including 3D lettering and illuminated logos—crafted for premium, eye-catching results.",
    icon: FaCog,
    category: "Premium",
  },
  {
    title: "Scrolling Boards",
    img: "https://res.cloudinary.com/dvqbg9cgp/image/upload/v1752163618/PixelImageGoa/Gallery/b4tpwwickosueg0lrzbx.jpg",
    summary: "Programmable LED scrolling message boards.",
    description:
      "Fully programmable LED boards for offers, announcements, or live messages. Perfect for promotions, events, and high-traffic locations.",
    icon: FaLightbulb,
    category: "Dynamic",
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Digital",
    "Illuminated",
    "Custom",
    "Outdoor",
    "Indoor",
    "Exterior",
    "Mobile",
    "Premium",
    "Dynamic",
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const toggleService = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="services" className="services-section">
      {/* Background Elements */}
      <div className="services-bg-grid" />
      <div className="services-bg-glow" />

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">
            <span className="services-title-highlight">Our Services</span>
          </h2>
          <p className="services-subtitle">
            From concept to installation, we deliver cutting-edge signage
            solutions that make your business shine
          </p>
          <div className="services-title-divider" />
        </div>

        {/* Category Filters */}
        <div className="services-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`services-filter ${
                activeCategory === category ? "active" : ""
              }`}
            >
              <span>{category}</span>
              <div className="services-filter-glow" />
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div key={index} className="service-card">
              {/* Service Image */}
              <div className="service-image">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="service-img"
                />
                <div className="service-overlay" />
                <div className="service-category-badge">
                  <service.icon className="service-category-icon" />
                  <span>{service.category}</span>
                </div>
              </div>

              {/* Service Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-summary">{service.summary}</p>

                {/* Expand Button */}
                <button
                  onClick={() => toggleService(index)}
                  className="service-toggle"
                  aria-expanded={openIdx === index}
                >
                  <span>Learn More</span>
                  <FaChevronDown
                    className={`service-toggle-icon ${
                      openIdx === index ? "rotated" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <div
                  className={`service-details ${
                    openIdx === index ? "expanded" : ""
                  }`}
                >
                  <p className="service-description">{service.description}</p>
                  <a href="#contact" className="service-cta">
                    Get Quote
                    <div className="service-cta-glow" />
                  </a>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="service-card-glow" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <h3 className="services-cta-title">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="services-cta-text">
            We offer custom solutions tailored to your specific needs
          </p>
          <a href="#contact" className="services-cta-btn">
            <span>Discuss Your Project</span>
            <div className="services-cta-glow" />
          </a>
        </div>
      </div>
    </section>
  );
}
