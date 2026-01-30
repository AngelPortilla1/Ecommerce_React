import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"


const RegisterForm = ()=>{
    const {register, handleSubmit,formState:{errors},reset  } = useForm({
        mode:'onChange'
    })
    const [showPassword, setShowPassword] = useState(false)
    
    const onSubmit = (data) => {
        // Registrando al usuario
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-4 lg:gap-6 max-w-[500px] mx-auto">
            <div>
                <input {...register("username",{
                    required: "El nombre de usuario es obligatorio",
                    minLength:{value: 3, message: "El nombre de usuario debe tener al menos 3 caracteres"},
                    maxLength:{value: 20, message: "El nombre de usuario debe tener como maximo 20 caracteres"}
                })}
                        className=" w-full
                                    rounded-lg
                                    bg-[#1f2430]
                                    border border-gray-600
                                    px-3 py-2
                                    text-gray-100
                                    placeholder-gray-400
                                    transition
                                    duration-200
                                    ease-in-out
                                    focus:border-primary
                                    focus:ring-2
                                    focus:ring-primary/50
                                    focus:outline-none
                                    hover:border-gray-400"
                        autoComplete="username" 
                        name="username" 
                        placeholder="Nombre de usuario"
                        type="text" />
                        {errors.username && (
                            <p className="text-white-500 text-sm mt-1">{errors.username.message}</p>
                        )}
            </div>

            <div>
                <input {...register("email",{
                    required: "El email es obligatorio",
                    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un email válido"}
                })}
                        className=" w-full
                                    rounded-lg
                                    bg-[#1f2430]
                                    border border-gray-600
                                    px-3 py-2
                                    text-gray-100
                                    placeholder-gray-400
                                    transition
                                    duration-200
                                    ease-in-out
                                    focus:border-primary
                                    focus:ring-2
                                    focus:ring-primary/50
                                    focus:outline-none
                                    hover:border-gray-400"
                        autoComplete="email" 
                        name="email" 
                        placeholder="Correo electrónico"
                        type="email" />
                        {errors.email && (
                            <p className="text-white-500 text-sm mt-1">{errors.email.message}</p>
                        )}
            </div>

            <div>
                <div className="relative">
                    <input {...register("password",{
                        required: "La contraseña es obligatoria",
                        minLength:{value: 6, message: "La contraseña debe tener al menos 6 caracteres"}
                    })}
                            className=" w-full
                                        rounded-lg
                                        bg-[#1f2430]
                                        border border-gray-600
                                        px-3 py-2
                                        text-gray-100
                                        placeholder-gray-400
                                        transition
                                        duration-200
                                        ease-in-out
                                        focus:border-primary
                                        focus:ring-2
                                        focus:ring-primary/50
                                        focus:outline-none
                                        hover:border-gray-400"
                            autoComplete="new-password" 
                            name="password" 
                            placeholder="Contraseña"
                            type={showPassword ? "text" : "password"} />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-300"
                    >
                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                </div>
                        {errors.password && (
                            <p className="text-white-500 text-sm mt-1">{errors.password.message}</p>
                        )}
            </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg transition duration-200" >Crear cuenta
                </button>  

            
        </form>
    )
    

}

export default RegisterForm