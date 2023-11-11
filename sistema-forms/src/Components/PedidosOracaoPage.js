import React, { useState, useEffect } from 'react';
import './PedidosOracaoPage.css';
import logo from './potencia.jpg';

function PedidosOracaoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    pedidoOracao: '',
  });

  const [etapa, setEtapa] = useState(1);
  const [enviado, setEnviado] = useState(false);
  const [botaoProximoHabilitado, setBotaoProximoHabilitado] = useState(false);
  const [botaoEnviarHabilitado, setBotaoEnviarHabilitado] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dadosFormulario')) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
    verificarCamposAutomaticosPreenchidos(storedData);

    // Verificar se os campos da etapa 1 já foram preenchidos no localStorage
    const camposEtapa1Preenchidos =
      storedData.nome && storedData.sobrenome && storedData.whatsapp && storedData.email;

    // Se os campos já estiverem preenchidos, avançar para a etapa 2 automaticamente
    if (camposEtapa1Preenchidos) {
      setEtapa(2);
    }
  }, []);

  const verificarCamposAutomaticosPreenchidos = (data) => {
    if (etapa === 1) {
      const camposPreenchidos = data.nome && data.sobrenome && data.whatsapp && data.email;
      setBotaoProximoHabilitado(camposPreenchidos);
    } else if (etapa === 2) {
      const camposPreenchidos = data.pedidoOracao.trim().length > 0;
      setBotaoEnviarHabilitado(camposPreenchidos);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    verificarCamposAutomaticosPreenchidos({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (etapa === 1 && (!formData.nome || !formData.sobrenome || !formData.whatsapp || !formData.email)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (etapa === 2 && formData.pedidoOracao.trim().length === 0) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    localStorage.setItem('dadosFormulario', JSON.stringify(formData));

    setEtapa(etapa === 1 ? 2 : 3);
    setEnviado(true);
  };

  return (
    <div className="pedido-oracao-container">
      <img src={logo} alt="Logo" />
      <h2>PEDIDOS DE ORAÇÃO</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {etapa === 1 && (
            <>
              <label className='titulos' htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

              <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />

              <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
              <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

              <label className='titulos' htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

              <button type="submit" disabled={!botaoProximoHabilitado}>Próximo</button>
            </>
          )}

          {etapa === 2 && (
            <>
              <label className='titulos' htmlFor="pedido-oracao">Pedido de Oração:</label>
              <textarea id="pedido-oracao" name="pedidoOracao" rows="4" value={formData.pedidoOracao} onChange={handleChange} />

              <button type="submit" disabled={!botaoEnviarHabilitado}>ENVIAR</button>
            </>
          )}

          {etapa === 3 && enviado && (
            <p>Pedido de oração enviado. Estaremos orando por você!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default PedidosOracaoPage;
