import Cart from './Cart.jsx';
import UserDropDown from './UserDropDown.jsx';
import AuthButton from './authButton.jsx';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

const Navbar = () => {
    const { loading, user } = useUser();

    return (
        <header className="fixed top-0 right-0 left-72 z-40 bg-white/80 backdrop-blur-md border-b-4 border-black px-12 py-5 flex items-center justify-between">
            {/* Search System Section */}
            <div className="flex items-center gap-6">
               <div className="flex items-center border-4 border-black px-4 py-2 bg-gray-50 group hover:bg-white transition-colors">
                    <svg className="w-5 h-5 mr-3 text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input 
                        type="text" 
                        placeholder="SEARCH_SYSTEM..." 
                        className="bg-transparent outline-none text-[10px] font-black uppercase w-64 placeholder:text-gray-400" 
                    />
                    <span className="text-[10px] font-black bg-black text-white px-1 ml-2">V0.1</span>
               </div>
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-6">
                {/* Admin Quick Link */}
                {user?.isAdmin && (
                    <Link to="/admin" className="text-[10px] font-black uppercase bg-primary text-white border-2 border-black px-2 py-1 shadow-hard hover:shadow-none transition-all mr-2">
                        SYS_ADMIN
                    </Link>
                )}

                {/* Global Cart Component */}
                <Cart />
                
                {/* Auth/User Toggle */}
                {!loading && (
                    user ? (
                        <div className="relative group">
                            <div className="flex items-center gap-4 cursor-pointer p-1 border-4 border-transparent hover:border-black transition-all">
                                <div className="w-10 h-10 border-4 border-black bg-secondary flex items-center justify-center p-1 group-hover:bg-primary transition-colors">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                                </div>
                                <div className="hidden lg:block leading-none">
                                    <p className="text-[8px] font-black text-gray-400 uppercase">ACCESS_GRANTED</p>
                                    <p className="text-xs font-black uppercase">{user.username}</p>
                                </div>
                            </div>
                            
                            {/* Desplegable en Hover o Click */}
                            <div className="absolute top-full right-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
                                <UserDropDown />
                            </div>
                        </div>
                    ) : (
                        <AuthButton />
                    )
                )}
            </div>
        </header>
    );
};

export default Navbar;