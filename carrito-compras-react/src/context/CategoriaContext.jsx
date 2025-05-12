import { createContext, useState } from "react";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("");
  return (
    <CategoriaContext.Provider value={{ categoria, setCategoria }}>
      {children}
    </CategoriaContext.Provider>
  );
};
