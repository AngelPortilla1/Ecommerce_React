import LoginForm from "../components/Login/LoginForm"

const Login = () => {
    return(
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-white">
            <div className="w-full max-w-[500px]">
                <header className="mb-8 md:mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-space-grotesk font-black uppercase italic leading-none mb-4">
                        ACCESO_AL<br/><span className="text-primary">SISTEMA</span>
                    </h1>
                    <div className="h-2 w-24 bg-black mx-auto"></div>
                    <p className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
                        INGRESA TUS CREDENCIALES PARA CONTINUAR
                    </p>
                </header>
                
                <div className="bg-white border-4 border-black p-6 md:p-8 shadow-hard-xl relative">
                    {/* Decoración Neo-Brutalista */}
                    <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-secondary border-4 border-black px-3 md:px-4 py-1 font-bold text-xs md:text-sm italic shadow-hard z-10">
                        V0.1 LOGIN
                    </div>
                    
                    <LoginForm/>
                </div>

                <p className="mt-8 text-center text-xs font-bold uppercase">
                    ¿NO TIENES UNA CUENTA? <a href="/register" className="text-primary hover:underline underline-offset-4">CREAR ACCESO</a>
                </p>
            </div>
        </div>
    )
}

export default Login