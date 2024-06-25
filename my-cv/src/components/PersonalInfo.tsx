import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Dario Dourado</h1>
      <p className="mb-2">Data de Nascimento: 19/11/1979</p>
      <p className="mb-2">Nacionalidade: Portuguesa</p>
      <p className="mb-2">Carta de Condução: Sim</p>
      <p className="mb-2">Tipo de Transporte: Próprio</p>
      <p className="mb-2">
        <a href="https://www.linkedin.com/in/dario-dourado/" className="text-blue-500 hover:underline">LinkedIn</a>
      </p>
      <p className="mb-2">
        <a href="https://www.credly.com/users/dario-dourado" className="text-blue-500 hover:underline">Credly</a>
      </p>
      <p className="mb-2">Email: dariodourado@gmail.com</p>
      <p className="mb-2">Telefone: 93 7372716</p>
      <p className="mb-2">Localização: Faro</p>
    </div>
  );
}

export default PersonalInfo;
