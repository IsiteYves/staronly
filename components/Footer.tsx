export default function Footer() {
    return (
        <footer className="bg-[#030712] text-white relative overflow-hidden">
            <div className="bg-[#0b102b] py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="text-[#3b5bdb] text-6xl mb-4 font-serif">“ ”</div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                        Excellence is not an option; it is the<br />
                        only standard we accept.
                    </h2>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden flex items-center justify-center">
                    <span className="text-[20rem] font-bold text-white whitespace-nowrap">Staronly</span>
                </div>
            </div>

            <div className="border-t border-white/10 relative z-10 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                    <img src="/assets/logo.svg" alt="Staronly" className="w-8 h-8" />
                                </div>
                                <span className="text-2xl font-bold">Staronly</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-6 text-lg">Useful links</h3>
                            <ul className="space-y-4 text-gray-400 font-body">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                <li><a href="#help" className="hover:text-white transition-colors">About us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-6 text-lg">FAQs</h3>
                            <ul className="space-y-4 text-gray-400 font-body">
                                <li><a href="#faq" className="hover:text-white transition-colors">What is Savacle?</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">How to get started?</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">Pricing plans</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-6 text-lg">Contact us</h3>
                            <ul className="space-y-4 text-gray-400 font-body">
                                <li className="flex items-center gap-2">
                                    <span>@</span>
                                    <a href="mailto:support@staronly.rw" className="hover:text-white transition-colors">support@staronly.rw</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    <a href="#" className="hover:text-white transition-colors">_staronly.rw</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-white/10 py-8 bg-black/40">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-body">
                    <p>Copyright © 2026 Staronly Ltd. All rights reserved</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">User agreement</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">Licence</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
