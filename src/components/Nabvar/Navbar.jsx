import Cart from './Cart.jsx';

const Navbar = () => {
    return(
        <header>
            <nav className="navbar bg-base-100 shadow-sm lg:rounded-box w-full">
                <div className='navbar-start'>
                    <a className='btn btn-ghost text-xl'>
                        Ecommerce
                    </a>

                </div>
                <div className='nabvar-end gap-3'>
                    <a className='btn btn-primary'>Dashboard</a>
                    <Cart />

                </div>
            </nav>
        </header>
    )
}

export default Navbar