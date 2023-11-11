import React, { useState, useEffect } from 'react';
import './EnviarTestemunhosPage.css';

function EnviarTestemunhosPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    enviarTest: ''
  });

  const [enviado, setEnviado] = useState(false);

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

    // Verifica se os campos obrigatórios estão preenchidos
    if (formData.nome && formData.sobrenome && formData.whatsapp && formData.email) {
      // Salva dados no localStorage
      localStorage.setItem('dadosFormulario', JSON.stringify(formData));
      setEnviado(true);
    } else {
      // Se os campos obrigatórios não estão preenchidos, mostra um alerta ou outra mensagem
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  useEffect(() => {
    // Adiciona lógica para ocultar campos nos outros formulários quando enviado
    if (enviado) {
      const outrosFormularios = ['form1', 'form2', 'form3']; // Substitua pelos IDs dos seus outros formulários
      outrosFormularios.forEach((formId) => {
        const outrosFormData = JSON.parse(localStorage.getItem(`${formId}_dadosFormulario`)) || {};
        outrosFormData.nome = '';
        outrosFormData.sobrenome = '';
        outrosFormData.whatsapp = '';
        outrosFormData.email = '';
        localStorage.setItem(`${formId}_dadosFormulario`, JSON.stringify(outrosFormData));
      });
    }
  }, [enviado]);

  const camposIniciaisPreenchidos = formData.nome && formData.sobrenome && formData.whatsapp && formData.email;
  const algumFormularioPreenchido = camposIniciaisPreenchidos || enviado;

  return (
    <div className="enviar-testemunhos-container">
      <h2>ENVIE SEUS TESTEMUNHOS</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {!enviado && !algumFormularioPreenchido &&(
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

          <label className='titulos' htmlFor="enviar-test">Testemunhos:</label>
          <textarea id="enviar-test" name="enviarTest" rows="4" value={formData.enviarTest} onChange={handleChange} />

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default EnviarTestemunhosPage;