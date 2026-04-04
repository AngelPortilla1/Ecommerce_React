import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
    // Aquí podrías obtener la cantidad de productos de tu contexto de carrito
    const itemCount = 2; 

    return (
        <div className="relative group">
            <Link to="/cart" className="flex items-center gap-3 bg-white border-4 border-black px-6 py-2 shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
                <FiShoppingBag className="text-xl group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-black uppercase tracking-tighter">SISTEMA_ALMACÉN</span>
                    <span className="text-sm font-black italic">BOLSA_[{itemCount}]</span>
                </div>
                
                {/* Contador flotante estilo "Pop" */}
                <div className="absolute -top-3 -right-3 bg-secondary border-4 border-black px-2 py-0.5 text-xs font-black italic shadow-hard group-hover:bg-primary group-hover:text-white transition-colors">
                    {itemCount < 10 ? `0${itemCount}` : itemCount}
                </div>
            </Link>
        </div>
    );
};

export default Cart;