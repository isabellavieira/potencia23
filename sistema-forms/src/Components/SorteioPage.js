import React, { useState, useEffect } from 'react';
import './SorteioPage.css';
import logo from './potencia.jpg';

function SorteioPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
    bairro: '',
    comoSoube: 'selecione', // Valor padrão para a opção "Selecione"
    idade: 'selecione', // Valor padrão para a opção "Selecione"
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

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (
      formData.nome &&
      formData.sobrenome &&
      formData.whatsapp &&
      formData.email &&
      formData.bairro &&
      formData.comoSoube !== 'selecione' &&
      formData.idade !== 'selecione'
    ) {
      // Salva dados no localStorage
      localStorage.setItem('dadosFormulario', JSON.stringify(formData));
      setEnviado(true);
    } else {
      // Se os campos obrigatórios não estão preenchidos, mostra um alerta ou outra mensagem
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const algumFormularioPreenchido = enviado || (formData.nome && formData.sobrenome && formData.whatsapp && formData.email);

  return (
    <div className="sorteio-container">
      <img src={logo} alt="Logo" />
      <h2>SORTEIO POTÊNCIA 2023</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {/* Verifica se pelo menos um dos formulários foi preenchido*/}
          {!algumFormularioPreenchido && (
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

          <label className='titulos' htmlFor="bairro">Em qual bairro você mora?</label>
          <input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} />

          <label className='titulos' htmlFor="como-soube">Como você ficou sabendo da Conferência Potência?</label>
          <select id="como-soube" name="comoSoube" value={formData.comoSoube} onChange={handleChange}>
            <option value="selecione">Selecione</option>
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

          <label className='titulos' htmlFor="idade">Qual é a sua faixa etária?</label>
          <select id="idade" name="idade" value={formData.idade} onChange={handleChange}>
            <option value="selecione">Selecione</option>
            <option value="idade-12-17">12-17</option>
            <option value="idade-18-25">18-25</option>
            <option value="idade-26-35">26-35</option>
            <option value="idade-36-45">36-45</option>
            <option value="idade-46-mais">46+</option>
          </select>

          <button type="submit" disabled={!algumFormularioPreenchido}>PARTICIPAR DO SORTEIO</button>
        </form>
      </div>
    </div>
  );
}

export default SorteioPage;
