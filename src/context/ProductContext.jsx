import { useState, useEffect, useCallback, createContext, useContext } from "react";

import axios from "axios";


axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_BACKEND_URL + '/products';

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [productLoading, setProductLoading] = useState(false);
    const [error, setError] = useState(null);

    //funcion para obtener todos los productos

    const getProducts = useCallback(async (id) => {


        try{
            const response = await axios.get(API_URL)
            console.log(response.data)
            setProducts(response.data.products || [])


        }catch (error){
            setError(error.message || 'Error al obtener los productos')

        }finally{
            setProductsLoading(false)
        }
    },[])
    useEffect(() => {
        setProductsLoading(true)
        getProducts()
    }, [getProducts])


    const value = {
        products,
        product,
        productsLoading,
        productLoading,
        error,
        getProducts,
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

//Hook personalizado 
export const useProducts = () => useContext(ProductContext);


