import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const HomeScreen = () => {
  const{ usuario } = useContext(UsuarioContext)
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{ usuario.nombre }</th>
            <td>{ usuario.apellido }</td>
            <td>{ usuario.mail }</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
