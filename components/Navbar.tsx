import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/assets/logo.svg" alt="Staronly" className="w-8 h-8" />
                    <span className="text-white font-semibold text-lg">Staronly</span>
                </div>

                <a
                    href="mailto:support@staronly.rw"
                    className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors hover:translate-x-1 transition-transform"
                >
                    Request Demo
                </a>
            </div>
        </nav>
    );
}
