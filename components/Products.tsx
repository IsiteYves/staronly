export default function Products() {
    const products = [
        {
            name: 'Ahwii',
            icon: '/assets/ahwii.png',
            description: '',
            description2: '',
            features: [
                'Salon staff management',
                'Inventory and supply chain management',
                'Much more features'
            ],
            buttonText: 'Request demo →',
            bgColor: 'bg-[#3b5bdb]',
            textColor: 'text-white',
            buttonStyle: 'bg-white text-[#3b5bdb] hover:bg-gray-100 hover:translate-x-1 transition-transform'
        },
        {
            name: 'Savacle',
            icon: '/assets/savacle.png',
            description: '',
            description2: '',
            features: [
                'Savings cooperation management',
                'Digitized loans and savings committes',
                'Accounting and cash flow analytics'
            ],
            buttonText: 'Request demo →',
            bgColor: 'bg-white',
            textColor: 'text-gray-900',
            buttonStyle: 'border-2 border-[#3b5bdb] text-[#3b5bdb] hover:bg-blue-50 hover:translate-x-1 transition-transform',
            featureColor: 'text-[#3b5bdb]'
        },
        {
            name: 'Your desired product',
            icon: '/assets/customproject.png',
            description: '',
            description2: '',
            features: [
                'Any software you want',
                'Star level solution with the best performance',
                'Support and  regular updates'
            ],
            buttonText: 'Talk to us →',
            bgColor: 'bg-white',
            textColor: 'text-gray-900',
            buttonStyle: 'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:translate-x-1 transition-transform',
            featureColor: 'text-dark'
        }
    ];

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Use <span className="text-[#3b5bdb]">our products !</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg font-body">
                        We're currently under development of two key flagship solutions, focusing on savings cooperations and micro to medium businesses, solving their management and accounting through digitization.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`${product.bgColor} ${product.textColor} p-8 rounded-2xl shadow-lg`}
                        >
                            <div className={`w-14 h-14 ${index === 0 ? 'bg-white' : 'bg-gray-100'} rounded-xl flex items-center justify-center mb-6 text-2xl`}>
                                <img src={product.icon} alt={'Product icon ' + index} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{product.name}</h3>

                            <p className={`mb-4 ${index === 0 ? 'text-white/90' : 'text-gray-600'} text-sm leading-relaxed font-body`}>
                                {product.description}
                            </p>

                            <p className={`mb-6 ${index === 0 ? 'text-white/90' : 'text-gray-600'} text-sm leading-relaxed font-body`}>
                                {product.description2}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${product.featureColor || 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full ${product.buttonStyle} py-3 rounded-lg font-medium transition-colors`}>
                                <a href="mailto:support@staronly.rw">{product.buttonText}</a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
