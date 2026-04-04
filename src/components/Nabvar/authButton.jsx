import { Link } from "react-router-dom"

const AuthButton = () => {
    return( 
    <div className="flex items-center gap-4">
        <Link 
            className="bg-black text-white border-4 border-black px-6 py-2 font-black text-xs uppercase shadow-hard hover:bg-primary hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
            to="/login"
        >
            ACCESO_LOGIN
        </Link>
        <div className="text-black font-black text-xl">/</div>
        <Link 
            className="bg-white text-black border-4 border-black px-6 py-2 font-black text-xs uppercase shadow-hard hover:bg-secondary hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
            to="/register"
        >
            REGISTRO_NUEVO
        </Link>
    </div>
    )
}

export default AuthButton