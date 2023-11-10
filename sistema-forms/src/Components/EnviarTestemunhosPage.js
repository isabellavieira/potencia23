import React, { useState, useEffect } from 'react';
import './EnviarTestemunhosPage.css';
import logo from './potencia.jpg';

function EnviarTestemunhosPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    enviarTest: '',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dadosFormulario')) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('dadosFormulario', JSON.stringify(formData));
  };

  const camposIniciaisPreenchidos = formData.nome && formData.sobrenome && formData.whatsapp && formData.email;
  const algumFormularioPreenchido = camposIniciaisPreenchidos;

  return (
    <div className="pedido-oracao-container">
      <img src={logo} alt="Logo" />
      <h2>ENVIE SEUS TESTEMUNHOS</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {!algumFormularioPreenchido && (
            <>
              <label className='titulos' htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />

              <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} required />

              <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
              <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />

              <label className='titulos' htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </>
          )}

          <label className='titulos' htmlFor="enviar-test">Testemunhos:</label>
          <textarea id="enviar-test" name="enviarTest" rows="4" value={formData.enviarTest} onChange={handleChange} required />

          <button type="submit" disabled={!algumFormularioPreenchido}>ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default EnviarTestemunhosPage;

