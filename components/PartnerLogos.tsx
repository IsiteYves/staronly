'use client';

export default function PartnerLogos() {
    const partners = [
        { name: 'RSSB', image: '/assets/partners/rssb.png', href: 'https://www.rssb.rw' },
        { name: 'RSwitch', image: '/assets/partners/rswitch.png', href: 'https://www.rswitch.co.rw' },
        { name: 'RURA', image: '/assets/partners/rura.png', href: 'https://rura.rw' },
        { name: 'Sanlam', image: '/assets/partners/sanlam.png', href: 'https://www.sanlam.rw' },
        { name: 'RBC', image: '/assets/partners/rbc.png', href: 'https://rbc.gov.rw' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
                    {partners.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className={`w-auto object-contain ${partner.name === 'RSSB' ? 'h-16' : 'h-12'}`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
