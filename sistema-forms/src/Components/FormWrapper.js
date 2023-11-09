// FormWrapper.js
import React, { useState, useEffect } from 'react';

function FormWrapper({ children }) {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    whatsapp: '',
    email: '',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('sharedFormData')) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

  return (
    <div className="form-wrapper">
      {React.cloneElement(children, { formData, setFormData })}
    </div>
  );
}

export default FormWrapper;
