import axios from 'axios';

//Configuracion base de axios para autenticacion 
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/auth';

// Para incluir las cookies en las solicitudes
axios.defaults.withCredentials = true;


export const LoginService = async (email, password) => {
}



export const RegisterService = async (data, reset, setRedirect, checkSession) => {
    try{
        const response = await axios.post(`${API_URL}/register`, data, {headers: {
            'Content-Type': 'application/json'},
            withCredentials: true
        });
        
        if (response.status === 201 || response.status === 200) {
            alert('Registro exitoso');
            
        }
    }catch(error){
        alert("Error en el registro: " + error.response.data.message);
    }
}


export const LogoutService = async (email, password) => {
}


export const getProfileService = async () => {
    
}