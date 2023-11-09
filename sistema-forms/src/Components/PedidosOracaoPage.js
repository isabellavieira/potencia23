import React from 'react';
import './PedidosOracaoPage.css';

function PedidosOracaoPage() {
  return (
    <div className="pedido-oracao-container">
      <h2>PEDIDOS DE ORAÇÃO</h2>
      <div id="blocos">
      <form>
        <label className='titulos' htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />
        <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="nome" />
        <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
        <input type="tel" id="whatsapp" name="whatsapp" />
        <label className='titulos' htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />
        <label className='titulos' htmlFor="pedido-oracao">Pedidos de Oração:</label>
        <textarea id="pedido-oracao" name="pedido-oracao" rows="4" />

        <button type="submit">ENVIAR</button>
      </form>
      </div>
    </div>
  );
}

export default PedidosOracaoPage;



