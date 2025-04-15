import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Planejamento from './pages/PlanejamentoFinanceiro';
import PlanejamentoPatrimonial from './pages/PlanejamentoPatrimonial';
import Seguro from './pages/SeguroDeVida';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/planejamento" element={<Planejamento />} />
        <Route path="/planejamentoPatrimonial" element={<PlanejamentoPatrimonial />} />
        <Route path="/seguroDeVida" element={<Seguro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
