import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PedidosOracaoPage from './Components/PedidosOracaoPage';
import EnviarTestemunhosPage from './Components/EnviarTestemunhosPage';
import SorteioPage from './Components/SorteioPage';
import HomePage from './Components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/pedidos-oracao" element={<PedidosOracaoPage />} />
        <Route path="/enviar-testemunhos" element={<EnviarTestemunhosPage />} />
        <Route path="/sorteio" element={<SorteioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
