import { useState, useEffect, useCallback, createContextuseContext } from "react";


import axios from "axios";


axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_BACKEND_URL + '/products';

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState([]);
    const [product, setProduct] = useState({});
    const [productLoading, setProductLoading] = useState([]);
    const [error, setError] = useState(null);

    //funcion para obtener todos los productos

    const getProducts = useCallback(async (id) => {


        try{
            const response = await axios.get(API_URL)
            setProducts(response.data)


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

    }

