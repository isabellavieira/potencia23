// Componente com botões
import React from 'react';
import { Link } from 'react-router-dom';

function BotoesComponente() {
  return (
    <div>
      <Link to="/pedidos-oracao">
        <button>Pedidos de Oração</button>
      </Link>
      <Link to="/enviar-testemunhos">
        <button>Enviar Testemunhos</button>
      </Link>
      <Link to="/sorteio">
        <button>Sorteio Potência 2023</button>
      </Link>
    </div>
  );
}

export default BotoesComponente;
