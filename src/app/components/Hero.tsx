// app/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const titleVariants = [
    { line1: "Pixel Perfect",      line2: "LED Signs"            },
    { line1: "Custom Creations",   line2: "That Captivate"       },
    { line1: "Brilliant Glow",     line2: "Around the Clock"     },
    { line1: "Your Vision",        line2: "Our Illumination"     },
    { line1: "Digital Dreams",     line2: "Made Reality"         },
    { line1: "Bright Ideas",       line2: "Brighter Results"     },
    { line1: "Neon Nights",        line2: "Electric Days"        },
    { line1: "Stunning Signage",   line2: "Lasting Impact"       },
    { line1: "Light Up",           line2: "Your Success"         },
    { line1: "Vibrant Visuals",    line2: "Vivid Results"        },
    { line1: "Glowing Graphics",   line2: "Growing Business"     },
    { line1: "Radiant Designs",    line2: "Real Returns"         },
    { line1: "Dazzling Displays",  line2: "Day and Night"        },
    { line1: "Electric Impact",    line2: "Endless Possibilities"},
    { line1: "Shining Brands",     line2: "Standout Success"     },
    { line1: "Blazing Boards",     line2: "Bold Statements"      },
    { line1: "Luminous Legacy",    line2: "Leading Technology"   },
    { line1: "Sparkling Solutions", line2: "Superior Quality"    },
    { line1: "Gleaming Graphics",  line2: "Great Visibility"     },
    { line1: "Brilliant Brands",   line2: "Better Business"      },
    { line1: "Electrifying Edge",  line2: "Expert Execution"     },
    { line1: "Lustrous Lighting",  line2: "Lasting Impressions"  },
    { line1: "Dynamic Displays",   line2: "Dramatic Results"     },
    { line1: "Illuminated Ideas",  line2: "Inspired Outcomes"    },
    { line1: "Powerful Pixels",    line2: "Professional Pride"   },
    { line1: "Flashing Forward",   line2: "Future Ready"         },
    { line1: "Beaming Brands",     line2: "Beautiful Results"    },
    { line1: "Glittering Graphics", line2: "Guaranteed Quality"  },
    { line1: "Shimmering Signs",   line2: "Spectacular Service"  },
    { line1: "Twinkling Tech",     line2: "Total Transformation" }
];

// Simple typewriter for one string, with optional start delay
function Typewriter({
                        text,
                        speed = 100,
                        delay = 1,
                        className = ""
                    }: {
    text: string;
    speed?: number;      // ms per character
    delay?: number;      // ms before starting
    className?: string;
}) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        setDisplayed("");
        const start = setTimeout(() => {
            let i = 0;
            const iv = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i === text.length) clearInterval(iv);
            }, speed);
            return () => clearInterval(iv);
        }, delay);

        return () => clearTimeout(start);
    }, [text, speed, delay]);

    return <span className={className}>{displayed}</span>;
}

export default function Hero() {
    const [idx, setIdx] = useState(0);

    // Cycle every 4s
    useEffect(() => {
        const iv = setInterval(() => {
            setIdx(i => (i + 1) % titleVariants.length);
        }, 4000);
        return () => clearInterval(iv);
    }, []);

    const { line1, line2 } = titleVariants[idx];
    // calculate when to start typing line2 (after line1 finishes + small pause)
    const line1Duration = line1.length * 100;        // speed=100ms default
    const pauseAfter = 300;                           // extra pause
    const line2Delay = line1Duration + pauseAfter;

    return (
        <section
            id="hero"
            className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://res.cloudinary.com/dub5eqaqo/image/upload/v1753469794/pexels-roneferreira-3690005_zaazjg.jpg"
                    alt="Professional LED signage solution"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            </div>

            {/* LEFT: text + form + metrics */}
            <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
                <div className="max-w-2xl w-full space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center px-5 py-3 rounded-full
                          bg-white/10 backdrop-blur-sm border border-white/20
                          shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">
                            ✨ Illuminate Your Brand
                        </span>
                    </div>

                    {/* Enhanced Headline with Typewriter */}
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                            <Typewriter
                                text={line1}
                                className="block text-white drop-shadow-lg"
                            />
                            <Typewriter
                                text={line2}
                                delay={line2Delay}
                                className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500
                                         bg-clip-text text-transparent animate-pulse drop-shadow-lg"
                            />
                        </h1>
                        {/* Subtle underline effect */}
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full
                                      animate-pulse shadow-lg shadow-blue-400/50" />
                    </div>
                </div>
            </div>

            {/* RIGHT: Enhanced Visual Section */}
            <div className="relative z-10 flex-1 flex justify-center items-center px-6 lg:px-12">
                {/* This space is now part of the background, so we can add some overlay content or leave it empty */}
                <div className="hidden lg:block w-full max-w-2xl h-full flex items-center justify-center">
                    {/* Optional: Add some floating elements or leave empty since image is now background */}
                </div>
            </div>
        </section>
    );
}