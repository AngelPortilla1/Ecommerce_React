import Cart from './Cart.jsx';
import UserDropDown from './UserDropDown.jsx';
import AuthButton from './authButton.jsx';

const Navbar = () => {
    return(
        <header>
            <AuthButton/> 
            <nav className="navbar bg-base-100 shadow-sm lg:rounded-box w-full">
                <div className='navbar-start'>
                    <a className='btn btn-ghost text-xl'>
                        Ecommerce
                    </a>

                </div>
                <div className='navbar-end gap-3'>
                    <a className='btn btn-primary'>Dashboard</a>
                    <Cart />
                    <UserDropDown/>

                </div>
            </nav>
        </header>
    )
}

export default Navbar