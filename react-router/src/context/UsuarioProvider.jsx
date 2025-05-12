import { UsuarioContext } from "./UsuarioContext";

const usuario = {
  nombre: "Juan",
  apellido: "Delgado",
  mail: "djuan@gmail.com",
};

export const UsuarioProvider = ({ children }) => {
  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
