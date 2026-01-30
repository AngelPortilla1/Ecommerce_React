import Home from './pages/Home';
import Register from './pages/Register'
import './index.css';

import {Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout';
import Login from './pages/Login';

function App(){
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/home" element={<Home/>}></Route>
            {/* <Route path="/login" element={<Login/>}></Route> */}
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            
          </Route>
    </Routes>
    
    

  );
  
}


export default App