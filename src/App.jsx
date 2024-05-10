import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

import MathPage from './Pages/MathPage';
import PyPage from './Pages/PyPage';
import DsPage from './Pages/DsPage';
import AlgoPage from './Pages/AlgoPage';

import dataMath from './mocks/dataMath.json';
import dataPy from './mocks/dataPy.json';
import dataDs from './mocks/dataDs.json';
import dataAlg from './mocks/dataAlgo.json'



const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/math">Math</Link></li>
          <li><Link to="/python">Python</Link></li>
          <li><Link to="/Ds">Ds</Link></li>
          <li><Link to="/Algo">Algo</Link></li>
          
        </ul>
      </nav>
    
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path='/math'>
          <Route index element={<MathPage data={dataMath}/>}/>
        </Route>
        <Route path='/python'>
          <Route index element={<PyPage data={dataPy}/>}/>
        </Route>
        <Route path='/Ds'>
          <Route index element={<DsPage data={dataDs}/>}/>
        </Route>
        <Route path='/Algo'>
          <Route index element={<AlgoPage data={dataAlg}/>}/>
        </Route>
       
      </Routes>

    </BrowserRouter>
  );
};

export default App;
