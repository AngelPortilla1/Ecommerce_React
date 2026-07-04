import Home from './pages/Home';
import Register from './pages/Register'
import './index.css';

import {Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout';
import Login from './pages/Login';
import { UserContextProvider } from './context/UserContext';
import { Toaster } from 'react-hot-toast';
import { ProductProvider } from './context/ProductContext.jsx';
import DetailProduct from './pages/DetailProduct.jsx';


function App(){
  return (
    <UserContextProvider>
      <ProductProvider>
        <Routes>
                <Route element={<Layout/>}>
                    <Route path="/home" element={<Home/>}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route> */}
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/detailproducts/:id" element={<DetailProduct/>}></Route>
                    
                  </Route>
            </Routes>
      </ProductProvider>
    <Toaster 
      position='top-right' 
      reverseOrder={false} 
      toastOptions={{
        style: {
          borderRadius: '0px',
          border: '4px solid black',
          padding: '16px',
          color: 'black',
          background: 'white',
          fontWeight: '900',
          fontFamily: 'Space Grotesk',
          textTransform: 'uppercase',
          boxShadow: '4px 4px 0px 0px #000000',
        },
        success: {
          iconTheme: {
            primary: 'black',
            secondary: '#bef264', // secondary Lime from tailwind.config
          },
        },
        error: {
          iconTheme: {
            primary: 'black',
            secondary: '#ff4b4b', // Custom Red for errors
          },
        },
      }}
    />
    </UserContextProvider>
    
    
    

  );
  
}


export default App