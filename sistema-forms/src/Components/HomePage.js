// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1 id="ola">OLÁ!</h1>
      <p className="destaque">
        Chegou o grande dia! O Potência 2023 vai ficar marcado na sua história.
      </p>
      <p id="inicio">
        Verifique o cardápio e loja do evento, envie seus testemunhos e pedidos de oração, e participe também do grande sorteio deste ano!
      </p>
      <div className="buttons">
        <a href="#" className="button green">CAFÉ POTÊNCIA</a>
        <a href="#" className="button green">LOJA POTÊNCIA</a>
        <Link to="/pedidos-oracao" className="button green">PEDIDOS DE ORAÇÃO</Link>
        <Link to="/enviar-testemunhos" className="button green">ENVIAR TESTEMUNHOS</Link>
        <Link to="/sorteio" className="button green">SORTEIO P23</Link>
      </div>
    </div>
  );
}

export default HomePage;
