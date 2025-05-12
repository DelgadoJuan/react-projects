import { useContext, useState } from "react";
import { CiudadContext } from "../context/ciudadContext";
import { HistoryContext } from "../context/HistoryContext";

export const SearchForm = () => {
  const regexCiudad = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
  const { actualizarCiudad } = useContext(CiudadContext);
  const { agregarCiudad } = useContext(HistoryContext);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!regexCiudad.test(inputValue)) {
      setError("Por favor ingresa un nombre de ciudad válido")
      return 
    }

    setError("")
    actualizarCiudad(inputValue);
    agregarCiudad(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingresa una ciudad (ej: Buenos Aires)"
          maxLength={50}
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};