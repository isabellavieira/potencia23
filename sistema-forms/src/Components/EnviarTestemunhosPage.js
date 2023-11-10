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
  // Atualiza o estado do formulário com os novos dados
    setFormData({
      ...formData,
      nome: event.target.nome.value,
      sobrenome: event.target.sobrenome.value,
      whatsapp: event.target.whatsapp.value,
      email: event.target.email.value,
      pedidoOracao: event.target.pedidoOracao.value,
    });
// Salva os dados atualizados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(formData));

    // Limpa o formulário após o envio
    event.target.reset();
  };

  return (
    <div className="enviar-testemunhos-container">
      <img src={logo} alt="Logo" />
      <h2>ENVIE SEUS TESTEMUNHOS</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
            <>
                   <div id="blocos">
        <form onSubmit={handleSubmit}>
          <label className='titulos' htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />

          <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
            required
          />

          <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            required
          />

          <label className='titulos' htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <label className='titulos' htmlFor="enviarTest">Testemunhos:</label>
          <textarea
            id="enviarTest"
            name="enviarTest"
            rows="4"
            value={formData.enviarTest}
            onChange={(e) => setFormData({ ...formData, enviarTest: e.target.value })}
            required
          />

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default EnviarTestemunhosPage;
