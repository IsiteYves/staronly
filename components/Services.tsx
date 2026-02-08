export default function Services() {
    const services = [
        {
            title: 'Digital Marketing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quis ligula vitae rhoncus. Integer aliquam sollicitudin elit verus ultricies. Ut egestas tellus ut purus porta tristique.',
            image: '/assets/servicesimg1.jpg',
            link: 'Learn more →'
        },
        {
            title: 'Custom software development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quis ligula vitae rhoncus. Integer aliquam sollicitudin elit verus ultricies. Ut egestas tellus ut purus porta tristique.',
            image: '/assets/servicesimg2.jpg',
            link: 'Learn more →'
        },
        {
            title: 'ICT Training',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quis ligula vitae rhoncus. Integer aliquam sollicitudin elit verus ultricies. Ut egestas tellus ut purus porta tristique.',
            image: '/assets/servicesimg3.jpg',
            link: 'Learn more →'
        }
    ];

    return (
        <section id="services" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 hidden lg:block pointer-events-none">
                <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" className="opacity-10">
                    <defs>
                        <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-primary" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 hidden lg:block pointer-events-none">
                <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" className="opacity-10">
                    <defs>
                        <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-accent-purple" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c2)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Professional Services</h2>
                        <p className="text-gray-600 text-lg font-body leading-relaxed">
                            We dedicated our lives to solving the most painful problems across industries, <span className="font-semibold text-primary">by digital solutions.</span>
                        </p>
                    </div>
                    <a href="mailto:support@staronly.rw" className="bg-[#3b5bdb] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#364fc7] transition-all hover:scale-105 shadow-lg shadow-blue-500/20 whitespace-nowrap flex items-center gap-2 group">
                        Work with us now
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                            <div className="relative h-56 bg-gradient-to-br from-[#4c6ef5] to-[#7950f2] overflow-hidden">
                                <div className="absolute inset-0 opacity-60 group-hover:opacity-75 transition-opacity duration-300">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed font-body">
                                    {service.description}
                                </p>
                                <span className="text-[#3b5bdb] font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn more <span className="text-xl">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
