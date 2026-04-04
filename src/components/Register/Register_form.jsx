import { useState, useContext } from "react"
import { UserContext, useUser } from "../../context/UserContext"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { RegisterService } from "../../services/auth_services"
import { Navigate } from "react-router-dom"
import toast from "react-hot-toast"

//Recordar verificar maxymin lenght junto con el modelo de mongodb-Username
const RegisterForm = ()=>{
    const {register, handleSubmit,formState:{errors},reset  } = useForm({
        mode:'onChange'
    })
    //Actualmente userInfo es user 
    const {user, checkSession} = useUser()
    //const {user, checkSession} = useContext(UserContext)
    const [showPassword, setShowPassword] = useState(false)
    const [redirect, setRedirect] = useState(false)
    
    
    const onSubmit = async (data) => {
        // Registrando al usuario
        const result = await RegisterService(data, reset, setRedirect, checkSession);
        if (result.message){
            toast.success('Registro exitoso');
        }else {
            toast.error("Error en el registro");
        }
    }
    if (redirect && user.isAdmin) {
        //LLevarlo a la pagina admin
    }

    if( redirect && !user.isAdmin){
        //Llevarlo a la pagina de usuario normal
        return <Navigate to={'/home'} />
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6">
            <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2 px-1">USERNAME_RECRUIT</label>
                <input {...register("username",{
                    required: "El nombre de usuario es obligatorio",
                    minLength:{value: 3, message: "El nombre de usuario debe tener al menos 3 caracteres"},
                    maxLength:{value: 29, message: "El nombre de usuario debe tener como maximo 29 caracteres"}
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
                        autoComplete="username" 
                        name="username" 
                        placeholder="NOMBRE DE USUARIO"
                        type="text" />
                        {errors.username && (
                            <p className="text-red-500 text-[10px] font-black uppercase mt-1 px-1 tracking-tighter">{errors.username.message}</p>
                        )}
            </div>

            <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2 px-1">EMAIL_VECTOR</label>
                <input {...register("email",{
                    required: "El email es obligatorio",
                    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un email válido"}
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
                        placeholder="TU CORREO ELECTRÓNICO"
                        type="email" />
                        {errors.email && (
                            <p className="text-red-500 text-[10px] font-black uppercase mt-1 px-1 tracking-tighter">{errors.email.message}</p>
                        )}
            </div>

            <div className="relative group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2 px-1">PASSWORD_SECRET</label>
                <div className="relative">
                    <input {...register("password",{
                        required: "La contraseña es obligatoria",
                        minLength:{value: 6, message: "La contraseña debe tener al menos 6 caracteres"}
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
                            autoComplete="new-password" 
                            name="password" 
                            placeholder="TÚ CONTRASEÑA MÁXIMA"
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
                    className="w-full bg-black text-white border-4 border-black p-5 font-black uppercase text-sm shadow-hard-lg hover:bg-primary hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all mt-4" >
                INITIALIZE_RECRUIT
            </button>  
        </form>
    )
}

export default RegisterForm