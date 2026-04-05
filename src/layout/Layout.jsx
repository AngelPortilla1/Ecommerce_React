import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Nabvar/Navbar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex min-h-screen bg-gray-100 text-black selection:bg-secondary selection:text-black">
            {/* Sidebar con prop para cerrar y estado de apertura */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Overlay para cerrar el sidebar en móvil */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Área de Contenido Principal */}
            <div className="flex-1 md:ml-72 bg-white min-h-screen relative overflow-x-hidden">
                {/* Navbar con toggle para el sidebar */}
                <Navbar toggleSidebar={toggleSidebar} />

                <main className="p-4 md:p-12 pt-28 md:pt-28">
                    <Outlet />
                </main>

                {/* Pie de Página Global */}
                <footer className="border-t-8 border-black bg-white text-black p-6 md:p-12 mt-12 md:mt-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <div className="col-span-1">
                            <h3 className="font-inter font-black italic text-2xl mb-4 tracking-tighter uppercase">NEO-YHAMAR</h3>
                            <p className="text-[10px] md:text-xs font-bold text-gray-400 leading-tight max-w-[200px] uppercase">
                                © 2026 V0.1. TODOS LOS DERECHOS RESERVADOS POR NEO-YHAMAR.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] md:text-xs font-black uppercase text-secondary bg-black inline-block px-2 py-1 mb-4 md:mb-6">NAVEGACIÓN</h4>
                            <ul className="text-xs md:text-sm font-bold uppercase space-y-2 md:space-y-3">
                                <li><a href="#" className="hover:underline decoration-4">TIENDA TODO</a></li>
                                <li><a href="#" className="hover:underline decoration-4">CALENDARIO DROPS</a></li>
                                <li><a href="#" className="hover:underline decoration-4">EL ARCHIVO</a></li>
                                <li><a href="#" className="hover:underline decoration-4">INFO LEGAL</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] md:text-xs font-black uppercase text-secondary bg-black inline-block px-2 py-1 mb-4 md:mb-6">REDES</h4>
                            <ul className="text-xs md:text-sm font-bold uppercase space-y-2 md:space-y-3">
                                <li><a href="#" className="hover:underline decoration-4">INSTAGRAM</a></li>
                                <li><a href="#" className="hover:underline decoration-4">FACEBOOK</a></li>
                            </ul>
                        </div>
                        <div className="flex items-end justify-start md:justify-end">
                            <span className="text-4xl md:text-6xl font-inter font-black italic text-gray-100 select-none tracking-tighter uppercase">V0.1.EDIC</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;