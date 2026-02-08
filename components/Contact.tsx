'use client';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600 fill-current">
                    <path d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54,17.8C50.6,27.6,39.8,35.2,28.3,46.5C16.8,57.8,4.6,72.8,-6.2,71.3C-17,69.8,-26.4,51.8,-39.6,38.8C-52.8,25.8,-69.8,17.8,-75.6,3.8C-81.4,-10.2,-76,-30.2,-63.6,-43.8C-51.2,-57.4,-31.8,-64.6,-14.8,-62.4C2.2,-60.2,19.2,-48.6,34.5,-73 L42.7,-62.9 Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Write to us !
                        </h2>
                        <p className="text-gray-600 text-lg font-body max-w-md">
                            We dedicated our lives to solving the most painful problems across industries, <span className="font-semibold text-black">by digital solutions.</span>
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-blue-900 mb-2">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent font-body"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-blue-900 mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent font-body resize-none"
                                    placeholder="Type here..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#0000AA] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#000088] transition-colors inline-flex items-center gap-2"
                            >
                                Send →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
