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
    comoSoube: '',
    idade: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [outroFormularioPreenchido, setOutroFormularioPreenchido] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dadosFormulario')) || {};

    const { nome, sobrenome, whatsapp, email } = storedData;
    const algumFormularioPreenchido = nome && sobrenome && whatsapp && email;

    if (algumFormularioPreenchido) {
      setOutroFormularioPreenchido(true);
      // Se algum formulário foi preenchido, oculta os campos
      setFormData({ bairro: '', comoSoube: '', idade: '' });
    } else {
      setFormData((prevData) => ({ ...prevData, ...storedData }));
    }

    setEnviado(!!storedData.enviado);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      nome: event.target.nome.value,
      sobrenome: event.target.sobrenome.value,
      whatsapp: event.target.whatsapp.value,
      email: event.target.email.value,
      bairro: event.target.bairro.value,
      comoSoube: event.target.comoSoube.value,
      idade: event.target.idade.value
    });

    localStorage.setItem('dadosFormulario', JSON.stringify(formData));
    event.target.reset();
  };

  return (
    <div className="sorteio-container">
      <img src={logo} alt="Logo" />
      <h2>SORTEIO POTÊNCIA 2023</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {enviado ? (
            <p>Obrigado por participar do sorteio!</p>
          ) : (
            <>
              {!outroFormularioPreenchido && (
                <>
                  <label className='titulos' htmlFor="nome">Nome:</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />

                  <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
                  <input
                    type="text"
                    id="sobrenome"
                    name="sobrenome"
                    value={formData.sobrenome}
                    onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                  />

                  <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
                  <input
                    className="pequenos"
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />

                  <label className='titulos' htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </>
              )}

              <label className='titulos' htmlFor="bairro">Em qual bairro você mora?</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
              />

              <label className='titulos' htmlFor="como-soube">Como você ficou sabendo da Conferência Potência?</label>
              <select
                id="como-soube"
                name="comoSoube"
                value={formData.comoSoube}
                onChange={(e) => setFormData({ ...formData, comoSoube: e.target.value })}
              >
                <option value="">Selecione</option>
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
              <select
                id="idade"
                name="idade"
                value={formData.idade}
                onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
              >
                <option value="">Selecione</option>
                <option value="idade-12-17">12-17</option>
                <option value="idade-18-25">18-25</option>
                <option value="idade-26-35">26-35</option>
                <option value="idade-36-45">36-45</option>
                <option value="idade-46-mais">46+</option>
              </select>

              <button type="submit">PARTICIPAR DO SORTEIO</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default SorteioPage;
