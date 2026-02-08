'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What is savacle ?',
            answer: 'Savacle is our flagship solution for savings cooperations and micro to medium businesses, helping them manage their operations and accounting through digitization.'
        },
        {
            question: 'Where is Staronly Ltd based in ?',
            answer: 'Staronly Ltd is based in Rwanda, serving cooperatives, SMEs, and public institutions across the region.'
        },
        {
            question: 'Can you work with banking institutions to digitize their services ?',
            answer: 'Yes, we work with banking institutions and financial organizations to develop custom digital solutions that meet their specific needs and regulatory requirements.'
        }
    ];

    return (
        <section id="faq" className="py-20 bg-[#3E3EEC]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="text-white">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            What most people ask about us !
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 text-left text-white font-medium flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-4 text-white/90 font-body">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
