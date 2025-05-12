import { createContext, useState, useEffect } from "react";
import { fetchProductos } from "../hooks/useApi";
export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos().then((data) => setProductos(data));
  }, []);

  return (
    <ProductoContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductoContext.Provider>
  );
};
