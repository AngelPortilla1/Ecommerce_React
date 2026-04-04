import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiClock, FiSearch, FiUser, FiInfo } from 'react-icons/fi';
import { HiCheckBadge } from 'react-icons/hi2';
import { useUser } from '../../context/UserContext.jsx';
import UserDropDown from '../Nabvar/UserDropDown.jsx';
import { useState } from 'react';

const Sidebar = () => {
    const location = useLocation();
    const { user } = useUser();
    const [showUserMenu, setShowUserMenu] = useState(false);

    const menuItems = [
        { name: 'TIENDA', path: '/shop', icon: <FiShoppingBag /> },
        { name: 'LANZAMIENTOS', path: '/home', icon: <HiCheckBadge /> }, // Assuming Home represents Drops
        { name: 'ARCHIVO', path: '/archive', icon: <FiClock /> },
        { name: 'INFO', path: '/about', icon: <FiInfo /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-white text-black border-r-[10px] border-black flex flex-col justify-between py-12 px-6 z-50">
            <div>
                {/* Logo Section */}
                <div className="mb-20 px-4">
                    <h1 className="text-4xl font-black tracking-tighter leading-none mb-1 font-inter uppercase">
                        NEO-YHAMAR
                    </h1>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.25em] uppercase">
                        EDICIÓN VO.1
                    </p>
                </div>

                {/* Navigation Section */}
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-5 px-4 py-5 font-black text-xl tracking-tight transition-all uppercase ${
                                    active
                                        ? 'bg-black text-[#d0ff00]'
                                        : 'hover:bg-gray-100 hover:translate-x-1'
                                }`}
                            >
                                <span className={`text-2xl ${active ? 'text-[#d0ff00]' : 'text-black'}`}>
                                    {item.icon}
                                </span>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Actions Section */}
            <div className="flex flex-col gap-2 px-0 pb-4">
                <button className="group flex items-center gap-5 px-4 py-5 font-black text-xl tracking-tight uppercase hover:bg-gray-100 hover:translate-x-1 transition-all">
                    <FiSearch className="text-2xl group-hover:scale-110 transition-transform" />
                    BUSCAR
                </button>
                
                <div className="relative">
                    <button 
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="w-full group flex items-center gap-5 px-4 py-5 font-black text-xl tracking-tight uppercase hover:bg-gray-100 hover:translate-x-1 transition-all text-left"
                    >
                        <FiUser className="text-2xl group-hover:scale-110 transition-transform" />
                        <span className="truncate">
                             {user?.username ? user.username : 'PERFIL'}
                        </span>
                    </button>
                    {showUserMenu && user?.username && (
                        <div className="absolute bottom-full left-0 mb-4 w-64 bg-white border-4 border-black shadow-hard z-50">
                            <UserDropDown />
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
