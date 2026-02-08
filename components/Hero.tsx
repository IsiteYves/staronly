export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <img
                src="/assets/hero-banner.jpeg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Star-level digital solutions for cooperatives, SMEs, and public institutions
                        </h1>

                        <p className="text-lg text-white/90 max-w-xl font-body">
                            We deliver star-level digital solutions for cooperatives, SMEs, and public institutions. No compromises on performance, security, or quality.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#products" className="bg-white text-[#3b5bdb] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform">
                                Explore our products
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>

                            <a href="mailto:support@staronly.rw" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm hover:translate-x-1 transition-transform">
                                Contact us
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
