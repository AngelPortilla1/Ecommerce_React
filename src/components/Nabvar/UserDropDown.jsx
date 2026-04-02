import { useUser } from "../../context/UserContext";
import toast from 'react-hot-toast'
import { LogoutService } from "../../services/auth_services";


const UserDropDown = () => {
    const { setUser}= useUser();

    return(
        <div className="dropdown dropdown-end">
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="User Avatar" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
            
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">Perfil <span className="badge">Nuevo</span></a>
                    </li>
                    <li>
                        <a className="justify-between">Configuracion</a>
                    </li>
                    <li>
                        <a onClick={async () => {
                            await LogoutService();
                            setUser(null);
                            toast.success('Sesión cerrada exitosamente');
                        }} className="justify-between">Cerrar Sesión</a>
                    </li> 
                </ul>
                
        </div>
    )
}

export default UserDropDown;    