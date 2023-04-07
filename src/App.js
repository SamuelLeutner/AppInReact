import React from 'react';
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Fotos from './pages/fotos/fotos';
import Sinopse from './pages/sinopse/sinopse';
import Andyserkis from './pages/Andyserkis/Andyserkis';
import RobertPattinson from './pages/RobertPattinson/RobertPattinson'
import ZoeKravotz from './pages/ZoeKravotz/ZoeKravotz'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sinopse' element={<Sinopse />} />
                <Route path='/fotos' element={<Fotos />} />
                <Route path='/Andyserkis' element={<Andyserkis />} />
                <Route path='/RobertPattinson' element={<RobertPattinson />} />
                <Route path='/ZoeKravotz' element={<ZoeKravotz />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
