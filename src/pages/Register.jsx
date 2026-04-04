import RegisterForm from "../components/Register/Register_form"

const Register = () => {
    return(
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-white py-20">
            <div className="w-full max-w-[500px]">
                <header className="mb-12 text-center">
                    <h1 className="text-7xl font-space-grotesk font-black uppercase italic leading-none mb-4">
                        NUEVO_<br/><span className="text-primary">RECLUTA</span>
                    </h1>
                    <div className="h-2 w-24 bg-black mx-auto"></div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                        INICIALIZA TU IDENTIDAD DIGITAL EN LA RED
                    </p>
                </header>
                
                <div className="bg-white border-4 border-black p-8 shadow-hard-xl relative">
                    {/* Decoración Neo-Brutalista */}
                    <div className="absolute -top-6 -right-6 bg-secondary border-4 border-black px-4 py-1 font-bold text-sm italic shadow-hard z-10">
                        V0.1 REGISTER
                    </div>
                    
                    <RegisterForm/>
                </div>

                <p className="mt-8 text-center text-xs font-bold uppercase">
                    ¿YA TIENES ACCESO? <a href="/login" className="text-primary hover:underline underline-offset-4">INICIAR SESIÓN</a>
                </p>
            </div>
        </div>
    )
}

export default Register