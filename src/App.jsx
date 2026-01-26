import Home from './pages/Home';
import './index.css';

import {Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout';

function App(){
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/diney" element={<Home/>}></Route>
            
          </Route>
    </Routes>
    
    

  );
  
}


export default App