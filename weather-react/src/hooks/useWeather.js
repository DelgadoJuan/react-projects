import { useContext, useEffect, useState } from "react";
import { CiudadContext } from "../context/ciudadContext";

export const useWeather = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const { ciudad } = useContext(CiudadContext);
  const [dataClima, setDataClima] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const buscarClima = async () => {
    if (!ciudad) {
      setError("Por favor ingresa una ciudad");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      
      if (data.cod === "404") {
        setError("Ciudad no encontrada");
        setDataClima(null);
      } else {
        setDataClima(data);
      }
    } catch (errors) {
      setError(`Ocurrió el siguiente problema: ${errors}`);
      setDataClima(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ciudad) {
      buscarClima();
    }
  }, [ciudad]);

  return { dataClima, error, loading, buscarClima };
};
