import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext.jsx';
import { useUser } from '../../context/UserContext.jsx';

const CardProduct = ({ id, name, price, imageUrl, description, stock }) => {
    const { isAuthenticated } = useUser();

    console.log('CardProduct imageUrl:', imageUrl);
    console.log('IMAGE URL =>', imageUrl);

    const imageSrc = imageUrl || 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop';

    return (
        <div className="border-4 border-black bg-white overflow-hidden group hover:shadow-hard-lg transition-all">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={imageSrc}
                    alt={name}
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop';
                    }}
                />
                {stock <= 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-space-grotesk font-bold uppercase text-sm">AGOTADO</span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-space-grotesk font-bold uppercase tracking-tight mb-2">{name}</h3>
                <p className="text-xs font-bold uppercase text-gray-500 mb-4 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-space-grotesk font-bold">{price}</span>
                    <Link to={`/detailproducts/${id}`} className="bg-black text-white border-4 border-black px-4 py-2 font-bold uppercase text-xs hover:bg-primary transition-colors inline-block">
                        VER MÁS
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;