import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext.jsx';
import { useProducts } from '../context/ProductContext.jsx';
import CardProduct from '../components/CardProduct/CardProduct.jsx';

const Home = () => {
    const { isAuthenticated, user } = useUser();
    const { products } = useProducts();

    useEffect(() => {
        console.log('Home products:', products);
    }, [products]);

    if (!products || !Array.isArray(products) || products.length === 0) {
        return (
            <div className="bg-white p-8 text-center uppercase font-bold">
                Cargando productos...
            </div>
        );
    }

    //     {
    //         id: 1,
    //         name: "NEO-SHELL V.2",
    //         spec: "GORE-TEX / THERMAL REACTIVE",
    //         price: "$499.00",
    //         image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop", // Placeholder for technical jacket
    //         isLarge: true
    //     },
    //     {
    //         id: 2,
    //         name: "ERROR_LOG TEE",
    //         price: "$85.00",
    //         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop", // Placeholder for tee
    //         isBestSeller: true
    //     }
    // ];

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] border-b-4 border-black overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-18 py-12 md:py-0 bg-white text-black">
                <div className="z-10 max-w-2xl text-center md:text-left">
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-space-grotesk font-bold leading-[0.9] md:leading-[0.85] uppercase -ml-1">
                        FUTURO <br />
                        <span className="bg-secondary px-4 py-1 italic shadow-hard inline-block my-2 text-3xl sm:text-4xl md:text-7xl">SINTÉTICO</span> <br />
                        STREETWEAR
                    </h2>
                    
                    <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start text-center md:text-left">
                        <div className="hidden md:block w-1 bg-primary h-24"></div>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-[280px] leading-relaxed">
                            Redefiniendo el avatar digital a través de la utilidad física. Alterando el retail tradicional desde la V0.1.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-primary text-white border-4 border-black px-8 py-4 font-bold uppercase text-sm shadow-hard-lg hover:shadow-none transition-all">
                            ENTRA AL VACÍO
                        </button>
                        <button className="bg-white text-black border-4 border-black px-8 py-4 font-bold uppercase text-sm shadow-hard-lg hover:shadow-none transition-all">
                            LOOKBOOK
                        </button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-surface-light border-l-4 border-black hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop" alt="Hero sneaker" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute top-10 right-10 bg-black text-white p-8 border-4 border-primary">
                         <span className="text-xl font-bold uppercase italic leading-none">ALERTA<br/>NUEVO DROP</span>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <div className="bg-secondary border-b-4 border-black py-4 overflow-hidden whitespace-nowrap">
                <div className="animate-[marquee_20s_linear_infinite] inline-block">
                    <span className="text-2xl font-space-grotesk font-black uppercase mx-8 italic">HIPER-VINCULADO // ESPEC-TECNICA // V0.1 DISRUPCIÓN // HIPER-VINCULADO // ESPEC-TECNICA // V0.1 DISRUPCIÓN //</span>
                    <span className="text-2xl font-space-grotesk font-black uppercase mx-8 italic">HIPER-VINCULADO // ESPEC-TECNICA // V0.1 DISRUPCIÓN // HIPER-VINCULADO // ESPEC-TECNICA // V0.1 DISRUPCIÓN //</span>
                </div>
            </div>

            {/* FEATURED DROPS */}
            <section className="p-6 md:p-18 bg-white text-black">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-4 border-black pb-4 mb-8 md:mb-16 gap-4">
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-space-grotesk font-bold italic uppercase leading-none">LANZAMIENTOS_DESTACADOS</h3>
                    <span className="text-[10px] md:text-xs font-black bg-black text-white px-2 py-1 uppercase">LOTE #004</span>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {products.map((product, index) => {
                    console.log('PRODUCT =>', product);

                return (
                    <CardProduct
                        key={product.id || index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        description={product.spec || product.description}
                        stock={product.stock || 10}
                    />
                );
            })}
                </div>
            </section>

            {/* THREE COLUMN SPECS */}
            <section className="px-6 md:px-18 py-12 md:py-24 bg-white grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                 {[
                    { id: "01", title: "FABRICACIÓN", text: "TODAS LAS PRENDAS ESTÁN CONSTRUIDAS CON ALGODÓN PESADO DE 400GSM O NYLON TÉCNICO RECICLADO. PROBADAS EN ENTORNOS URBANOS." },
                    { id: "02", title: "AUTENTICIDAD", text: "CADA PRODUCTO INCLUYE UN CHIP NFC PARA VERIFICACIÓN DIGITAL Y ACCESO EXCLUSIVO EN LA BLOCKCHAIN NEO-ZINE." },
                    { id: "03", title: "LOGÍSTICA", text: "ENVÍO MUNDIAL PRIORITARIO VÍA TRANSPORTE SEGURO. EMPAQUETADO EN BOLSAS ANTIESTÁTICAS REUTILIZABLES." }
                 ].map(item => (
                    <div key={item.id} className="relative border-4 border-black p-10 group hover:bg-black hover:text-white transition-colors">
                        <span className="absolute -top-6 left-6 bg-black text-white px-3 py-1 text-xl font-bold border-4 border-black group-hover:bg-secondary group-hover:text-black">{item.id}</span>
                        <h4 className="border-b-4 border-black group-hover:border-white pb-2 mb-6 font-space-grotesk font-bold text-2xl uppercase italic">{item.title}</h4>
                        <p className="text-xs font-medium uppercase leading-relaxed tracking-wider">{item.text}</p>
                    </div>
                 ))}
            </section>

            {/* MANIFESTO / NEWSLETTER */}
            <section className="mx-6 md:mx-18 mb-12 md:mb-24 relative overflow-hidden bg-black text-white p-8 md:p-24 border-4 border-black shadow-hard-xl">
                 <div className="relative z-10 max-w-xl">
                     <h3 className="text-4xl sm:text-5xl md:text-7xl font-space-grotesk font-black italic uppercase leading-none mb-8">ÚNETE AL<br/><span className="text-secondary">MANIFIESTO</span></h3>
                     <p className="font-bold uppercase text-[10px] md:text-xs mb-8 md:mb-12 tracking-widest text-gray-400">RECIBE NOTIFICACIONES DE DROPS SECRETOS ANTES DE QUE SEAN PÚBLICAS.</p>
                     
                     <div className="flex flex-col sm:flex-row border-4 border-white">
                        <input type="email" placeholder="CORREO_ELECTRÓNICO" className="flex-1 bg-transparent p-4 md:p-6 outline-none font-bold text-xs md:text-sm uppercase placeholder:text-gray-700" />
                        <button className="bg-primary text-white border-t-4 sm:border-t-0 sm:border-l-4 border-white px-8 md:px-12 py-4 md:py-0 font-bold uppercase transition-colors hover:bg-white hover:text-black">SUSCRIBIRSE</button>
                     </div>
                 </div>
                 {/* Background image for texture */}
                 <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 grayscale pointer-events-none">
                     <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
                 </div>
            </section>
        </div>
    );
};

export default Home;