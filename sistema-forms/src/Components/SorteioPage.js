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
    idade: '',
  });

  const [etapa, setEtapa] = useState(1);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dadosFormulario')) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));

    // Verificar se os campos da etapa 1 já foram preenchidos no localStorage
    const camposEtapa1Preenchidos =
      storedData.nome && storedData.sobrenome && storedData.whatsapp && storedData.email;

    // Se os campos já estiverem preenchidos, avançar para a etapa 2 automaticamente
    if (camposEtapa1Preenchidos) {
      setEtapa(2);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se os campos obrigatórios da etapa 1 estão preenchidos
    if (etapa === 1 && (!formData.nome || !formData.sobrenome || !formData.whatsapp || !formData.email)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Verifica se os campos obrigatórios da etapa 2 estão preenchidos
    if (etapa === 2 && (!formData.bairro || !formData.comoSoube || !formData.idade)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Salva dados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(formData));

    // Se estiver na etapa 1, avança para a etapa 2; se estiver na etapa 2, exibe a mensagem de participação confirmada
    setEtapa(etapa === 1 ? 2 : 3);
    setEnviado(true);
  };

  const camposIniciaisPreenchidos = formData.nome && formData.sobrenome && formData.whatsapp && formData.email;
  const camposSegundaEtapaPreenchidos = formData.bairro && formData.comoSoube && formData.idade;

  return (
    <div className="sorteio-container">
      <h2>SORTEIO POTÊNCIA 2023</h2>
      <div id="blocos">
        <form onSubmit={handleSubmit}>
          {etapa === 1 && (
            <>
              {/* Campos da etapa 1 */}
              <label className='titulos' htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

              <label className='titulos' htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />

              <label className='titulos' htmlFor="whatsapp">WhatsApp:</label>
              <input className="pequenos" type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />

              <label className='titulos' htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

              <button type="submit">Próximo</button>
            </>
          )}

          {etapa === 2 && camposIniciaisPreenchidos && (
            <>
              {/* Campos da etapa 2 */}
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
                <option value="idade-Selecione">Selecione</option>
                <option value="idade-12-17">12-17</option>
                <option value="idade-18-25">18-25</option>
                <option value="idade-26-35">26-35</option>
                <option value="idade-36-45">36-45</option>
                <option value="idade-46-mais">46+</option>
              </select>

              <button type="submit">PARTICIPAR DO SORTEIO</button>
            </>
          )}

          {etapa === 3 && enviado && (
            <p>Participação confirmada.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default SorteioPage;
