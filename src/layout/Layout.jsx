import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Nabvar/Navbar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100 text-black selection:bg-secondary selection:text-black">
            {/* Nuevo Componente Sidebar */}
            <Sidebar />

            {/* Área de Contenido Principal */}
            <div className="flex-1 ml-72 bg-white min-h-screen relative overflow-x-hidden">
                {/* Barra de Acciones Superior Fija */}
                <Navbar />

                <main className="p-12 pt-28">
                    <Outlet />
                </main>
                
                {/* Pie de Página Global */}
                <footer className="border-t-8 border-black bg-white text-black p-12 mt-24">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="col-span-1">
                            <h3 className="font-inter font-black italic text-2xl mb-4 tracking-tighter uppercase">NEO-YHAMAR</h3>
                            <p className="text-xs font-bold text-gray-400 leading-tight max-w-[200px] uppercase">
                                © 2026 PROTOCOLO DE COMERCIO DISRUPTIVO V0.1. TODOS LOS DERECHOS RESERVADOS POR EL COLECTIVO.
                            </p>
                        </div>
                        <div>
                             <h4 className="text-xs font-black uppercase text-secondary bg-black inline-block px-2 py-1 mb-6">NAVEGACIÓN</h4>
                             <ul className="text-sm font-bold uppercase space-y-3">
                                <li><a href="#" className="hover:underline decoration-4">TIENDA TODO</a></li>
                                <li><a href="#" className="hover:underline decoration-4">CALENDARIO DROPS</a></li>
                                <li><a href="#" className="hover:underline decoration-4">EL ARCHIVO</a></li>
                                <li><a href="#" className="hover:underline decoration-4">INFO LEGAL</a></li>
                             </ul>
                        </div>
                        <div>
                             <h4 className="text-xs font-black uppercase text-secondary bg-black inline-block px-2 py-1 mb-6">REDES</h4>
                             <ul className="text-sm font-bold uppercase space-y-3">
                                <li><a href="#" className="hover:underline decoration-4">INSTAGRAM</a></li>
                                <li><a href="#" className="hover:underline decoration-4">X / TWITTER</a></li>
                                <li><a href="#" className="hover:underline decoration-4">SERVIDOR DISCORD</a></li>
                             </ul>
                        </div>
                        <div className="flex items-end justify-end">
                            <span className="text-6xl font-inter font-black italic text-gray-50 select-none tracking-tighter uppercase">V0.1.EDIC</span>
                        </div>
                     </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;