import Cart from './Cart.jsx';
import UserDropDown from './UserDropDown.jsx';
import AuthButton from './authButton.jsx';
import { Link} from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

const Navbar = () => {

    const {loading, user} = useUser();


    return(
        <header>
            <AuthButton/> 
            <nav className="navbar bg-base-100 shadow-sm lg:rounded-box w-full">
                <div className='navbar-start'>
                    <Link className='btn btn-ghost text-xl' to='/home'>
                        Ecommerce
                    </Link>

                </div>
                <div className='navbar-end gap-3'>
                    {
                       user?.isAdmin && ( 
                        <a className='btn btn-primary'>Dashboard</a>)
                    }
                    
                    <Cart />
                    {
                        //Revisar si efectivamente sale el icono de perfil cuando esta  logueado o no
                        !loading && user?.username && <UserDropDown/>
                    }
                    

                </div>
            </nav>
        </header>
    )
}

export default Navbar