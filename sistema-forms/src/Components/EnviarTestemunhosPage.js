import React, { useState, useEffect } from 'react';
import './EnviarTestemunhosPage.css';
function EnviarTestemunhosPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    enviarTest: '',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('enviarTestemunhosData')) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

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
    localStorage.setItem('enviarTestemunhosData', JSON.stringify(formData));
  };

  return (
    <div className="pedido-oracao-container">
      <h2>ENVIE SEUS TESTEMUNHOS</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          <label className='titulos' htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

          <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
          <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />

          <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
          <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

          <label className='titulos' htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

          <label className='titulos' htmlFor="enviar-test">Testemunhos:</label>
          <textarea id="enviar-test" name="enviarTest" rows="4" value={formData.enviarTest} onChange={handleChange} />

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default EnviarTestemunhosPage;
