import { useUser } from "../../context/UserContext";
import toast from 'react-hot-toast'
import { LogoutService } from "../../services/auth_services";
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi";

const UserDropDown = () => {
    const { setUser, user } = useUser();

    const handleLogout = async () => {
        try {
            await LogoutService();
            setUser(null);
            toast.success('SESIÓN CERRADA');
        } catch (error) {
            toast.error('ERROR AL CERRAR SESIÓN');
        }
    };

    return (
        <div className="min-w-[220px] bg-white border-4 border-black shadow-hard-xl p-2 z-[100]">
            <header className="px-4 py-3 border-b-4 border-black mb-2 bg-gray-50">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">USUARIO_ACTIVO</p>
                <p className="font-black uppercase text-sm truncate">{user?.username || 'AGENTE_V0'}</p>
            </header>

            <ul className="flex flex-col gap-1">
                <li className="group">
                    <button className="w-full flex items-center justify-between px-4 py-3 font-black text-xs uppercase transition-all hover:bg-secondary hover:translate-x-1">
                        <span>MI_PERFIL</span>
                        <FiUser className="text-lg" />
                    </button>
                </li>
                <li className="group">
                    <button className="w-full flex items-center justify-between px-4 py-3 font-black text-xs uppercase transition-all hover:bg-secondary hover:translate-x-1">
                        <span>AJUSTES_SISTEMA</span>
                        <FiSettings className="text-lg" />
                    </button>
                </li>
                <li className="mt-2 pt-2 border-t-4 border-black">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-between px-4 py-3 font-black text-xs uppercase bg-black text-white hover:bg-primary transition-all hover:translate-x-1"
                    >
                        <span>CERRAR_SESIÓN</span>
                        <FiLogOut className="text-lg" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;