import { createContext, useState, useContext } from "react";
import { CiudadContext } from "./ciudadContext";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [historial, setHistorial] = useState([]);
  const { actualizarCiudad } = useContext(CiudadContext);

  const agregarCiudad = (ciudad) => {
    // Evitar duplicados y mantener un máximo de 10 ciudades
    setHistorial((prev) => {
      const nuevoHistorial = [
        ciudad,
        ...prev.filter((c) => c !== ciudad),
      ].slice(0, 10);
      return nuevoHistorial;
    });
  };

  const seleccionarCiudad = (ciudad) => {
    actualizarCiudad(ciudad);
  };

  return (
    <HistoryContext.Provider
      value={{ historial, agregarCiudad, seleccionarCiudad }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
