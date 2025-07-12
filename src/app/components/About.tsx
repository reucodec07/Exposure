"use client";

import { FaCheckCircle, FaAward, FaClock, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-16 bg-bg-main text-text-main">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-primary">Illuminating Goa</span>{" "}
            <span>Since Years</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto my-4 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              <strong className="text-primary">Pixel Image Goa</strong> is
              Goa&apos;s trusted expert in cutting-edge signage solutions.
            </p>
            <ul className="space-y-4">
              {[
                "Expert craftsmanship with years of experience",
                "In-house production with precision machinery",
                "Complete solutions from design to installation",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 mt-2 rounded-full bg-primary" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-primary">
              No project is too big or small – we bring your vision to light!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "500+", label: "Projects Completed", icon: "📈" },
              { number: "24/7", label: "Sign Visibility", icon: "🌟" },
              { number: "100%", label: "Client Satisfaction", icon: "😊" },
              { number: "Goa", label: "Wide Coverage", icon: "🗺️" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-card-border p-6 rounded-xl shadow text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <h4 className="text-xl font-bold text-primary">
                  {stat.number}
                </h4>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl border border-card-border p-8 shadow">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaCheckCircle className="text-primary text-xl" />
            <h3 className="text-lg font-semibold">
              Why Choose Pixel Image Goa?
            </h3>
          </div>
          <ul className="space-y-3">
            {[
              "Free consultation & mockups",
              "Transparent pricing",
              "Fast 5–7 day delivery",
              "Professional installation",
              "1-year warranty",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { icon: FaShieldAlt, text: "Licensed & Insured" },
            { icon: FaClock, text: "Fast Turnaround" },
            { icon: FaAward, text: "Quality Guaranteed" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-card-border rounded-full shadow-sm"
            >
              <badge.icon className="text-primary" />
              <span className="text-sm text-text-main font-medium">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
