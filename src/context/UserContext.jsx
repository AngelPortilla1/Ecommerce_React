import { useContext,createContext, useState,useEffect } from "react";
import { getProfileService } from "../services/auth_services";

export const UserContext = createContext();


export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    //Funcion para verificar la sesion del usuario 
    const checkSession = async () => {
        try {
            setLoading(true);
            const userDate = await getProfileService();
            setUser(userDate);
        }catch(error){
            // 401 es un caso normal cuando no hay autenticación, no es necesario loguear
            if (error.message !== 'No autenticado') {
                console.error("Error al verificar la sesión:", error);
            }
            setUser(null);
        }finally {
            setLoading(false);
        }
}

    //Funcion para obtener el id del usuario autenticado 
    const getUserId = () => {
        return user ? user.id : null;
    }

    //Verificar si el usuario esta autenticado o no 
    const isAuthenticated = () => {
        return !!user;
    }
    useEffect(() => {
        checkSession();
    },[])



    return( <UserContext.Provider value={{user, setUser, loading, checkSession, getUserId, isAuthenticated}}>
        {children}
    </UserContext.Provider>
    )
}   
export const useUser = () => useContext(UserContext)