import axios from 'axios';
import { set } from 'react-hook-form';

const API_URL = import.meta.env.VITE_BACKEND_URL + '/auth'
// http://localhost:3001/api/auth/register
// http://localhost:3001/api/auth/profile

axios.defaults.withCredentials = true;

export const LoginService = async (data, reset , setRedirect, checkSession) => {
    try {
        const response = await axios.post(`${API_URL}/login`,data,{
            headers:{ 'Content-type': 'application/json'} ,
             withCredentials: true,
    });

    // si la respuesta es exitosa
        console.log('Respuesta del login:', response);
        if (response.status === 200) {
            await checkSession();
            reset();
            setRedirect(true);
            return {
                success: true,
                message: 'Login exitoso'
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.error || error.response?.data?.message || error.message || 'Error desconocido'
        }
    }
};

export const RegisterService = async (data, reset, setRedirect, checkSession) => {
    try {
        const response = await axios.post(`${API_URL}/register`, data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });

        if (response.status === 201 || response.status === 200) {
            
            await checkSession();
            reset();
            setRedirect(true);
            return {
                message: true,
            }
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message || 'Error desconocido';
        alert("Error en el registro: " + errorMessage);
        return {
            message: false
        }
        
    }
};

export const LogoutService = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`, {}, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Error al hacer logout:', error);
        throw new Error('Error en el logout: ' + error.response?.data?.error);
    }
};

export const getProfileService = async () => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            withCredentials: true  // ← CRÍTICO
        });
        return response.data;
    } catch (error) {
        // 401 es un caso normal cuando no hay autenticación
        if (error.response?.status === 401) {
            throw new Error('No autenticado');
        }
        console.error('Error al obtener el perfil del usuario:', error);
        throw new Error('Error al obtener el perfil del usuario: ' + error.response?.data?.error || error.message);
    }
};

