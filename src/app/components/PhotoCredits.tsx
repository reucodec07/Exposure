//app/components/PhotoCredits.tsx
"use client";

const photoCredits = [
    {
        photographer: "Anna Tarazevich",
        url: "https://www.pexels.com/photo/orange-neon-signs-on-wooden-board-5211556/",
        platform: "Pexels"
    },
    {
        photographer: "Meruyert Gonullu",
        url: "https://www.pexels.com/photo/an-illuminated-text-signage-7317291/",
        platform: "Pexels"
    },
    {
        photographer: "Mathias Reding",
        url: "https://www.pexels.com/photo/neon-sign-advertising-barber-shop-11213201/",
        platform: "Pexels"
    },
    {
        photographer: "Christopher Farrugia",
        url: "https://www.pexels.com/photo/pizza-neon-light-signage-beside-wall-3581878/",
        platform: "Pexels"
    },
    {
        photographer: "Tim Mossholder",
        url: "https://www.pexels.com/photo/photo-of-led-signage-on-the-wall-942317/",
        platform: "Pexels"
    },
    {
        photographer: "Ronê Ferreira",
        url: "https://www.pexels.com/photo/close-up-photo-of-red-neon-light-signage-3690005/",
        platform: "Pexels"
    },
    {
        photographer: "Gin Patin",
        url: "https://www.pexels.com/photo/three-person-sitting-on-green-large-net-2692556/",
        platform: "Pexels"
    },
    {
        photographer: "Danial Abdullah",
        url: "https://www.pexels.com/photo/man-welding-on-gray-metal-sheet-2480481/",
        platform: "Pexels"
    },
    {
        photographer: "cottonbro studio",
        url: "https://www.pexels.com/photo/brown-wooden-book-shelf-with-books-5089123/",
        platform: "Pexels"
    },
    {
        photographer: "Max Vakhtbovycn",
        url: "https://www.pexels.com/photo/empty-dressing-room-11701120/",
        platform: "Pexels"
    },
    {
        photographer: "Aldiyar Seitkassymov",
        url: "https://www.pexels.com/photo/tiled-black-wall-of-modern-building-against-white-sky-3449680/",
        platform: "Pexels"
    },
    {
        photographer: "Hatice Baran",
        url: "https://www.pexels.com/photo/coca-cola-billboard-by-roadside-in-city-13986019/",
        platform: "Pexels"
    },
    {
        photographer: "El gringo photo",
        url: "https://www.pexels.com/photo/signage-in-stadium-under-white-sky-10287251/",
        platform: "Pexels"
    },
    {
        photographer: "Isaque Pereira",
        url: "https://www.pexels.com/photo/yellow-arrow-led-signage-394377/",
        platform: "Pexels"
    },
    {
        photographer: "Google DeepMind",
        url: "https://www.pexels.com/photo/an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua-18069362/",
        platform: "Pexels"
    },
    {
        photographer: "Pawel Czerwinski",
        url: "https://unsplash.com/photos/a-close-up-of-a-wall-made-out-of-white-blocks-LSPpXv6u77s?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
        platform: "Unsplash"
    },
    {
        photographer: "Kate Glotova",
        url: "https://unsplash.com/photos/a-set-of-white-objects-on-a-blue-surface-yNBULKWPJrY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
        platform: "Unsplash"
    },
    {
        photographer: "Franco Debartolo",
        url: "https://unsplash.com/photos/three-shelves-with-vases-and-other-items-on-them-5Tz318bsLcc?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
        platform: "Unsplash"
    }
];

// Group credits by platform
const pexelsCredits = photoCredits.filter(credit => credit.platform === "Pexels");
const unsplashCredits = photoCredits.filter(credit => credit.platform === "Unsplash");

export default function PhotoCredits() {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4 sm:mb-6">
                        <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                            Photo Credits
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                        <span className="text-slate-800">Thank You to these </span>
                        <span className="text-blue-600">Amazing Photographers</span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-4 sm:mb-6">
                        We&#39;re grateful to these talented photographers for their beautiful work that helps showcase our portfolio
                    </p>

                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Pexels Credits */}
                    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-green-600 font-bold text-sm sm:text-base">P</span>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Pexels</h3>
                                <p className="text-xs sm:text-sm text-slate-600">Free Stock Photos</p>
                            </div>
                        </div>

                        <div className="grid gap-2 sm:gap-3 max-h-80 overflow-y-auto">
                            {pexelsCredits.map((credit, index) => (
                                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                                    <span className="text-slate-700 font-medium text-xs sm:text-sm">
                                        {credit.photographer}
                                    </span>
                                    <a
                                        href={credit.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium transition-colors duration-200"
                                    >
                                        View Photo →
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200">
                            <a
                                href="https://www.pexels.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200"
                            >
                                Visit Pexels →
                            </a>
                        </div>
                    </div>

                    {/* Unsplash Credits */}
                    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-slate-600 font-bold text-sm sm:text-base">U</span>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Unsplash</h3>
                                <p className="text-xs sm:text-sm text-slate-600">Beautiful Free Images</p>
                            </div>
                        </div>

                        <div className="grid gap-2 sm:gap-3 max-h-80 overflow-y-auto">
                            {unsplashCredits.map((credit, index) => (
                                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                                    <span className="text-slate-700 font-medium text-xs sm:text-sm">
                                        {credit.photographer}
                                    </span>
                                    <a
                                        href={credit.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium transition-colors duration-200"
                                    >
                                        View Photo →
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200">
                            <a
                                href="https://unsplash.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium text-sm transition-colors duration-200"
                            >
                                Visit Unsplash →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8 sm:mt-12">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 max-w-3xl mx-auto">
                        <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">
                            <span className="font-semibold">Special Thanks:</span> All images used in our portfolio are
                            for demonstration purposes only. We extend our heartfelt gratitude to these talented
                            photographers who make their work freely available to the creative community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}