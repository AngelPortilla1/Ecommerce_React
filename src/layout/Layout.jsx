import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100 text-black selection:bg-secondary selection:text-black">
            {/* New Sidebar Component */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 ml-72 bg-white min-h-screen relative overflow-x-hidden">
                <main className="p-12">
                    <Outlet />
                </main>
                
                {/* Global Footer (Optional - keeping for structure) */}
                <footer className="border-t-8 border-black bg-white text-black p-12 mt-24">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="col-span-1">
                            <h3 className="font-inter font-black italic text-2xl mb-4 tracking-tighter uppercase">NEO-YHAMAR</h3>
                            <p className="text-xs font-bold text-gray-400 leading-tight max-w-[200px] uppercase">
                                © 2024 DISRUPTIVE COMMERCE PROTOCOL V0.1. ALL RIGHTS RESERVED BY THE COLLECTIVE.
                            </p>
                        </div>
                        <div>
                             <h4 className="text-xs font-black uppercase text-secondary bg-black inline-block px-2 py-1 mb-6">NAVIGATION</h4>
                             <ul className="text-sm font-bold uppercase space-y-3">
                                <li><a href="#" className="hover:underline decoration-4">SHOP ALL</a></li>
                                <li><a href="#" className="hover:underline decoration-4">DROPS CALENDAR</a></li>
                                <li><a href="#" className="hover:underline decoration-4">THE ARCHIVE</a></li>
                                <li><a href="#" className="hover:underline decoration-4">LEGAL INFO</a></li>
                             </ul>
                        </div>
                        <div>
                             <h4 className="text-xs font-black uppercase text-secondary bg-black inline-block px-2 py-1 mb-6">SOCIALS</h4>
                             <ul className="text-sm font-bold uppercase space-y-3">
                                <li><a href="#" className="hover:underline decoration-4">INSTAGRAM</a></li>
                                <li><a href="#" className="hover:underline decoration-4">X / TWITTER</a></li>
                                <li><a href="#" className="hover:underline decoration-4">DISCORD SERVER</a></li>
                             </ul>
                        </div>
                        <div className="flex items-end justify-end">
                            <span className="text-6xl font-inter font-black italic text-gray-50 select-none tracking-tighter uppercase">V0.1.EDI</span>
                        </div>
                     </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;