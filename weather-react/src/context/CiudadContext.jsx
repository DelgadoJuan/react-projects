import { createContext, useState } from 'react';

export const CiudadContext = createContext();

export const CiudadProvider = ({ children }) => {
  const [ciudad, setCiudad] = useState('');

  const actualizarCiudad = (nuevaCiudad) => {
    setCiudad(nuevaCiudad);
  };

  return (
    <CiudadContext.Provider value={{ ciudad, actualizarCiudad }}>
      {children}
    </CiudadContext.Provider>
  );
};
