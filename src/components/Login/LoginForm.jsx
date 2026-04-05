import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { LoginService } from "../../services/auth_services"
import { useUser } from "../../context/UserContext"
import { Navigate } from "react-router-dom"
import toast from 'react-hot-toast'


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange'
    })
    const { checkSession, user } = useUser()
    const [showPassword, setShowPassword] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false)





    const onSubmit = async (data) => {
        setLoading(true);
        //Logueando al usuario

        const result = await LoginService(data, reset, setRedirect, checkSession);
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
        setLoading(false);
    }

    if (redirect && user?.isAdmin) {
        return <Navigate to="/admin/dashboard" />
    }

    if (redirect && user && !user.isAdmin) {
        return <Navigate to="/home" />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6">
            <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2 px-1">EMAIL_IDENTIFIER</label>
                <input {...register("email", {
                    required: "El email es obligatorio",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un email válido" }
                })}
                    className=" w-full
                                    bg-white
                                    border-4 border-black
                                    p-4
                                    font-bold
                                    text-sm
                                    uppercase
                                    placeholder-gray-400
                                    transition-all
                                    duration-200
                                    outline-none
                                    focus:bg-secondary
                                    focus:shadow-hard
                                    hover:translate-x-1"
                    autoComplete="email"
                    name="email"
                    placeholder="INGRESA TU CORREO"
                    type="email" />
                {errors.email && (
                    <p className="text-red-500 text-[10px] font-black uppercase mt-1 px-1 tracking-tighter">{errors.email.message}</p>
                )}
            </div>

            <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2 px-1">SECURITY_HASH</label>
                <div className="relative">
                    <input {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }
                    })}
                        className=" w-full
                                        bg-white
                                        border-4 border-black
                                        p-4
                                        font-bold
                                        text-sm
                                        uppercase
                                        placeholder-gray-400
                                        transition-all
                                        duration-200
                                        outline-none
                                        focus:bg-secondary
                                        focus:shadow-hard
                                        hover:translate-x-1"
                        autoComplete="current-password"
                        name="password"
                        placeholder="INGRESA TU CONTRASEÑA"
                        type={showPassword ? "text" : "password"} />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-4 text-black hover:text-primary transition-colors"
                    >
                        {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-red-500 text-[10px] font-black uppercase mt-1 px-1 tracking-tighter">{errors.password.message}</p>
                )}
            </div>

            <button type="submit"
                disabled={loading}
                className="w-full bg-primary text-white border-4 border-black p-5 font-black uppercase text-sm shadow-hard-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4" >
                {loading ? 'AUTENTICANDO...' : 'UNLEASH THE POWER'}
            </button>
        </form>
    )
}

export default LoginForm