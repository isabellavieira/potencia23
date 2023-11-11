import React, { useState, useEffect } from 'react';
import './SorteioPage.css';

function SorteioPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    bairro: '',
    comoSoube: '',
    idade: ''
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
    <div className="sorteio-container">
      <h2>SORTEIO POTÊNCIA 2023</h2>
      <div id="blocos">
      <form onSubmit={handleSubmit}>
          {!enviado && (
            <>
              <label className='titulos' htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

              <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />

              <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
              <input className="pequenos" type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

              <label className='titulos' htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </>
          )}
          
          {/* Adicionando a pergunta "Qual Bairro você mora?" */}
          <label className='titulos' htmlFor="bairro">Em qual bairro você mora?</label>
          <input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} />

          {/* Adicionando a pergunta "Como você ficou sabendo da Conferência Potência?" */}
          <label className='titulos' htmlFor="como-soube">Como você ficou sabendo da Conferência Potência?</label>
          <select id="como-soube" name="comoSoube" value={formData.comoSoube} onChange={handleChange}>
            <option value="redes-sociais">Redes Sociais</option>
            <option value="youtube">YouTube</option>
            <option value="familia-amigos">Família / Amigos</option>
            <option value="carro-de-som">Carro de Som</option>
            <option value="radio">Rádio</option>
            <option value="email">E-mail</option>
            <option value="sms">SMS</option>
            <option value="panfleto">Panfleto</option>
            <option value="grupo-igreja">Grupo da Igreja</option>
            <option value="conhecia">Já conhecia, sou Potência raiz</option>
          </select>

          {/* Adicionando a pergunta "Qual sua faixa etária?" */}
          <label className='titulos' htmlFor="idade">Qual é a sua faixa etária?</label>
          <select id="idade" name="idade" value={formData.idade} onChange={handleChange}>
            <option value="idade-12-17">12-17</option>
            <option value="idade-18-25">18-25</option>
            <option value="idade-26-35">26-35</option>
            <option value="idade-36-45">36-45</option>
            <option value="idade-46-mais">46+</option>
          </select>

          <button type="submit">PARTICIPAR DO SORTEIO</button>
        </form>
      </div>
    </div>
  );
}

export default SorteioPage;