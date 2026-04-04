import Cart from './Cart.jsx';
import UserDropDown from './UserDropDown.jsx';
import AuthButton from './authButton.jsx';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

const Navbar = () => {
    const { loading, user } = useUser();

    return (
        <header className="sticky top-0 z-40 bg-white text-black border-b-4 border-black px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
               <div className="flex items-center border-4 border-black px-4 py-2 bg-gray-50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="SEARCH SYSTEM..." className="bg-transparent outline-none text-xs font-bold uppercase w-48" />
               </div>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/cart" className="flex items-center bg-secondary px-6 py-2 border-4 border-black font-bold text-xs uppercase shadow-hard hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0 transition-all">
                    CART [O]
                </Link>
                
                <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                </div>

                {!loading && user?.username && <UserDropDown />}
                {user?.isAdmin && (
                    <Link to="/admin" className="text-xs font-bold uppercase underline underline-offset-4 decoration-4 decoration-primary">ADMIN</Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;