import Home from './pages/Home';
import Register from './pages/Register'
import './index.css';

import {Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout';

function App(){
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/diney" element={<Home/>}></Route>
            {/* <Route path="/login" element={<Login/>}></Route> */}
            <Route path="/register" element={<Register/>}></Route>
            
          </Route>
    </Routes>
    
    

  );
  
}


export default App