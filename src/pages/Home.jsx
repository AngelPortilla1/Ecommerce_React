const Home = () => {
    const products = [
        {
            id: 1,
            name: "Producto Premium",
            price: "$99.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            category: "Electrónica"
        },
        {
            id: 2,
            name: "Producto Elegante",
            price: "$149.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            category: "Accesorios"
        },
        {
            id: 3,
            name: "Producto Exclusivo",
            price: "$199.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            category: "Moda"
        },
        {
            id: 4,
            name: "Producto Trending",
            price: "$79.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            category: "Lifestyle"
        },
    ];

    return (
        <div className="min-h-screen bg-[#0f1217]">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 px-4">
                <div className="max-w-[500px] mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
                        Bienvenido a Nuestro Ecommerce
                    </h1>
                    <p className="text-gray-400 text-lg mb-8">
                        Descubre los mejores productos con estilo y calidad
                    </p>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg transition duration-200 font-semibold">
                        Explorar Productos
                    </button>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">
                        Productos Destacados
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div 
                                key={product.id}
                                className="bg-[#1f2430] rounded-lg overflow-hidden border border-gray-600 hover:border-primary/50 transition duration-200 hover:shadow-lg hover:shadow-primary/20 group"
                            >
                                {/* Image Container */}
                                <div className="w-full h-48 overflow-hidden bg-gray-700">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <span className="text-xs text-primary font-semibold">
                                        {product.category}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-100 mt-2 mb-3">
                                        {product.name}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-primary">
                                            {product.price}
                                        </span>
                                        <button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg transition duration-200 text-sm font-medium">
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 px-4 bg-[#1f2430] border-t border-b border-gray-600">
                <div className="max-w-[500px] mx-auto">
                    <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">
                        Suscríbete a Nuestro Newsletter
                    </h3>
                    <p className="text-gray-400 text-center mb-6">
                        Recibe las mejores ofertas directamente en tu correo
                    </p>
                    
                    <div className="space-y-4">
                        <input 
                            type="email"
                            placeholder="Correo electrónico"
                            className="w-full rounded-lg bg-[#0f1217] border border-gray-600 px-4 py-3 text-gray-100 placeholder-gray-400 transition duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none hover:border-gray-400"
                        />
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg transition duration-200 font-semibold">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home 