import React, { useState, useEffect } from 'react';
import './PedidosOracaoPage.css';

function PedidosOracaoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    pedidoOracao: '',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dadosFormulario')) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

  // Verifica se os campos de nome, sobrenome, whatsapp e email já foram preenchidos
  const camposIniciaisPreenchidos = formData.nome && formData.sobrenome && formData.whatsapp && formData.email;

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica de envio do formulário, se necessário

    // Salvar dados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(formData));
  };
  const algumFormularioPreenchido = camposIniciaisPreenchidos;

  return (
    <div className="pedido-oracao-container">
      <h2>PEDIDOS DE ORAÇÃO</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {/* Verifica se pelo menos um dos formulários foi preenchido e renderiza condicionalmente */}
          {!algumFormularioPreenchido && (
            <>
              {/* Campos de nome, sobrenome, whatsapp e email */}
              <label className='titulos' htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

              <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />

              <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
              <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

              <label className='titulos' htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </>
          )}

          <label className='titulos' htmlFor="pedido-oracao">Pedido de Oração:</label>
          <textarea id="pedido-oracao" name="pedidoOracao" rows="4" value={formData.pedidoOracao} onChange={handleChange} />

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default PedidosOracaoPage;