'use client';

import { useState } from 'react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'Denver Mugenzi',
            role: 'CEO',
            company: 'Mutuelle',
            image: '/assets/testimonials/john.jpg',
            text: 'Staronly has given us an easy way to streamline communication between teams working in different systems.'
        },
        {
            name: 'Emilia Niwe',
            role: 'CFO',
            company: 'RBC',
            image: '/assets/testimonials/john.jpg',
            text: 'Staronly has given us an easy way to streamline communication between teams working in different systems. The ability to quickly and easily set up these processes across our project portfolio.'
        },
        {
            name: 'Yvan Mukunzi',
            role: 'Sanlam',
            company: 'Founder of BIMLauncher',
            image: '/assets/testimonials/john.jpg',
            text: 'Staronly has given us an easy way to streamline communication between teams working in different systems.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        What our customers say !
                    </h2>
                    <p className="text-gray-600 font-body text-lg">
                        We dedicated our lives to solving the most painful problems across industries, <span className="font-semibold text-black">by digital solutions.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-gray-200">
                                {/* Placeholder for image if not exists, or actual image */}
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-xs text-gray-500">Img</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-lg">
                                    {testimonial.name} - <span className="font-normal">{testimonial.role}</span>
                                </h3>
                                <p className="text-gray-400 text-sm font-body">{testimonial.company}</p>
                            </div>

                            <p className="text-gray-600 font-body leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-12">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-[#3b5bdb]' : 'bg-gray-200'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
