import { useContext,createContext, useState,useEffect } from "react";


export const UserContext = createContext();


export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Funcion para verificar la sesion del usuario 
    const checkSession = async () => {
        try {
            setLoading(true);
            //const userDate = await.getProfileService();
            // setUser(userDate);
        }catch(error){
            console.error("Error al verificar la sesión:", error);
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
export const useUSer = () => useContext(UserContext)