import Home from './pages/Home';
import './index.css';

import {Routes,Route } from 'react-router'
import Layout from './layout/Layout';

function App(){
  return (
    <Routes>
        <Route element={Layout}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <h1 className='text-sm text-green-100'>Encuentrame</h1>
    </Routes>
    
    

  )
  
}


export default App