import React from 'react';
import { useUser } from '../context/UserContext.jsx';

const Home = () => {
    const { isAuthenticated, user } = useUser();
    const products = [
        {
            id: 1,
            name: "NEO-SHELL V.2",
            spec: "GORE-TEX / THERMAL REACTIVE",
            price: "$499.00",
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop", // Placeholder for technical jacket
            isLarge: true
        },
        {
            id: 2,
            name: "ERROR_LOG TEE",
            price: "$85.00",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop", // Placeholder for tee
            isBestSeller: true
        }
    ];

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] border-b-4 border-black overflow-hidden flex items-center justify-between px-18 bg-white text-black">
                <div className="z-10 max-w-2xl">
                    <h2 className="text-8xl font-space-grotesk font-bold leading-[0.85] uppercase -ml-1">
                        FUTURE <br />
                        <span className="bg-secondary px-4 py-1 italic shadow-hard inline-block my-2">SYNTHETIC</span> <br />
                        STREETWEAR
                    </h2>
                    
                    <div className="mt-12 flex gap-12 items-start">
                        <div className="w-1 bg-primary h-24"></div>
                        <p className="text-xs font-bold uppercase tracking-widest max-w-[280px] leading-relaxed">
                            Redefining the digital avatar through physical utility. Disrupting traditional retail since V0.1.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <button className="bg-primary text-white border-4 border-black px-8 py-4 font-bold uppercase text-sm shadow-hard-lg hover:shadow-none transition-all">
                            ENTER THE VOID
                        </button>
                        <button className="bg-white text-black border-4 border-black px-8 py-4 font-bold uppercase text-sm shadow-hard-lg hover:shadow-none transition-all">
                            VIEW LOOKBOOK
                        </button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-surface-light border-l-4 border-black hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop" alt="Hero sneaker" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute top-10 right-10 bg-black text-white p-8 border-4 border-primary">
                         <span className="text-xl font-bold uppercase italic leading-none">NEW DROP<br/>ALERT</span>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <div className="bg-secondary border-b-4 border-black py-4 overflow-hidden whitespace-nowrap">
                <div className="animate-[marquee_20s_linear_infinite] inline-block">
                    <span className="text-2xl font-space-grotesk font-black uppercase mx-8 italic">HYPER-LINKED // TECH-SPEC // V0.1 DISRUPTION // HYPER-LINKED // TECH-SPEC // V0.1 DISRUPTION //</span>
                    <span className="text-2xl font-space-grotesk font-black uppercase mx-8 italic">HYPER-LINKED // TECH-SPEC // V0.1 DISRUPTION // HYPER-LINKED // TECH-SPEC // V0.1 DISRUPTION //</span>
                </div>
            </div>

            {/* FEATURED DROPS */}
            <section className="p-18 bg-white text-black">
                <header className="flex justify-between items-end border-b-4 border-black pb-4 mb-16">
                    <h3 className="text-6xl font-space-grotesk font-bold italic italic-heavy uppercase leading-none">FEATURED_DROPS</h3>
                    <span className="text-xs font-bold uppercase">BATCH #004</span>
                </header>

                <div className="grid grid-cols-12 gap-12">
                   {/* Main Product */}
                   <div className="col-span-8 group">
                        <div className="relative border-4 border-black overflow-hidden aspect-[4/5] bg-gray-100">
                             <img src={products[0].image} alt={products[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute bottom-10 right-10 bg-secondary px-6 py-2 border-4 border-black shadow-hard">
                                <span className="text-2xl font-space-grotesk font-bold">{products[0].price}</span>
                             </div>
                        </div>
                        <div className="flex mt-8 border-4 border-black">
                             <div className="flex-1 p-8">
                                <h4 className="text-4xl font-space-grotesk font-bold uppercase tracking-tight">{products[0].name}</h4>
                                <p className="text-[10px] font-bold uppercase text-gray-500 mt-2">{products[0].spec}</p>
                             </div>
                             <button className="w-32 bg-black text-white flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                             </button>
                        </div>
                   </div>

                   {/* Right Column Products/Banners */}
                   <div className="col-span-4 flex flex-col gap-12">
                        {/* Smaller product */}
                        <div className="border-4 border-black p-0 group">
                             <div className="relative border-b-4 border-black aspect-square overflow-hidden bg-gray-50">
                                 <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase z-10">BEST SELLER</span>
                                 <img src={products[1].image} alt={products[1].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                             </div>
                             <div className="p-6 flex justify-between items-center group-hover:bg-gray-50 transition-colors">
                                <div>
                                    <h5 className="font-bold uppercase text-sm">{products[1].name}</h5>
                                    <span className="text-xs font-bold text-primary">{products[1].price}</span>
                                </div>
                                <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                             </div>
                        </div>

                        {/* Member Access Block */}
                        <div className="bg-secondary border-4 border-black p-8 relative overflow-hidden flex flex-col justify-between min-h-[350px] shadow-hard-xl">
                            {isAuthenticated() ? (
                                <>
                                    <h4 className="text-5xl font-space-grotesk font-black uppercase leading-none italic">
                                        WELCOME BACK,<br/>{user?.username || 'AGENT'}
                                    </h4>
                                    <p className="text-xs font-bold uppercase mt-4">TUS DROPS EXCLUSIVOS ESTÁN LISTOS PARA SER DESBLOQUEADOS.</p>
                                    <button className="bg-black text-white p-4 font-bold uppercase text-xs flex items-center justify-center gap-2 group mt-auto z-10 hover:bg-primary transition-colors">
                                        SOLO PARA MIEMBROS
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h4 className="text-5xl font-space-grotesk font-black uppercase leading-none italic">MEMBER<br/>ACCESS<br/>ONLY</h4>
                                    <button className="bg-black text-white p-4 font-bold uppercase text-xs flex items-center justify-center gap-2 group z-10 hover:bg-primary transition-colors">
                                        VERIFY IDENTITY
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    </button>
                                </>
                            )}
                            <span className="absolute -bottom-10 -right-10 text-[200px] font-black text-black opacity-5 pointer-events-none">V0</span>
                        </div>
                   </div>

                </div>
            </section>

            {/* THREE COLUMN SPECS */}
            <section className="px-18 py-24 bg-white grid grid-cols-3 gap-12">
                 {[
                    { id: "01", title: "FABRICATION", text: "ALL GARMENTS ARE CONSTRUCTED USING 400GSM HEAVYWEIGHT COTTON OR RECYCLED TECHNICAL NYLON. RIGOROUSLY TESTED IN URBAN ENVIRONMENTS." },
                    { id: "02", title: "AUTHENTICITY", text: "EVERY PRODUCT INCLUDES AN EMBEDDED NFC CHIP FOR DIGITAL VERIFICATION AND EXCLUSIVE CONTENT ACCESS ON THE NEO-ZINE BLOCKCHAIN." },
                    { id: "03", title: "LOGISTICS", text: "PRIORITY WORLDWIDE SHIPPING VIA SECURE CARRIER. PACKAGED IN REUSABLE VACUUM-SEALED ANTISTATIC COMPOSITE BAGS." }
                 ].map(item => (
                    <div key={item.id} className="relative border-4 border-black p-10 group hover:bg-black hover:text-white transition-colors">
                        <span className="absolute -top-6 left-6 bg-black text-white px-3 py-1 text-xl font-bold border-4 border-black group-hover:bg-secondary group-hover:text-black">{item.id}</span>
                        <h4 className="border-b-4 border-black group-hover:border-white pb-2 mb-6 font-space-grotesk font-bold text-2xl uppercase italic">{item.title}</h4>
                        <p className="text-xs font-medium uppercase leading-relaxed tracking-wider">{item.text}</p>
                    </div>
                 ))}
            </section>

            {/* MANIFESTO / NEWSLETTER */}
            <section className="mx-18 mb-24 relative overflow-hidden bg-black text-white p-24 border-4 border-black shadow-hard-xl">
                 <div className="relative z-10 max-w-xl">
                     <h3 className="text-7xl font-space-grotesk font-black italic uppercase leading-none mb-8">JOIN THE<br/><span className="text-secondary">MANIFESTO</span></h3>
                     <p className="font-bold uppercase text-xs mb-12 tracking-widest text-gray-400">GET NOTIFIED OF SECRET DROPS AND ARCHIVE SALES BEFORE THEY GO PUBLIC.</p>
                     
                     <div className="flex border-4 border-white">
                        <input type="email" placeholder="EMAIL ADDRESS" className="flex-1 bg-transparent p-6 outline-none font-bold text-sm uppercase placeholder:text-gray-700" />
                        <button className="bg-primary text-white border-l-4 border-white px-12 font-bold uppercase transition-colors hover:bg-white hover:text-black">SUBSCRIBE</button>
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