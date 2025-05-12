import { useWeather } from "../hooks/useWeather";
import { weatherTranslations } from "../utils/weatherTranslations";

export const WeatherDisplay = () => {
  const { dataClima, error, loading } = useWeather();
  const difKelvin = 273.15;

  let content;
  if (loading) {
    content = (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando datos del clima...</p>
      </div>
    );
  } else if (error) {
    content = <div className="error">{error}</div>;
  } else if (!dataClima) {
    content = (
      <div className="placeholder-weather">
        Busca una ciudad para ver el clima
      </div>
    );
  } else {
    const descripcionClima = dataClima.weather[0].description;
    const descripcionTraducida =
      weatherTranslations[descripcionClima] || descripcionClima;
    content = (
      <>
        <h2>{dataClima.name}</h2>
        <div className="weather-info">
          <div className="weather-item">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
              alt={descripcionTraducida}
            />
            <p className="temperature">
              {parseInt(dataClima?.main?.temp - difKelvin)}°C
            </p>
            <p className="description">{descripcionTraducida}</p>
          </div>
          <div className="weather-item">
            <h3>Detalles</h3>
            <p>Humedad: {dataClima.main.humidity}%</p>
            <p>Viento: {dataClima.wind.speed} km/h</p>
            <p>Presión: {dataClima.main.pressure} hPa</p>
          </div>
          <div className="weather-item">
            <h3>Extremos</h3>
            <p>Mínima: {parseInt(dataClima.main.temp_min - difKelvin)}°C</p>
            <p>Máxima: {parseInt(dataClima.main.temp_max - difKelvin)}°C</p>
            <p>
              Sensación térmica:{" "}
              {parseInt(dataClima.main.feels_like - difKelvin)}°C
            </p>
          </div>
        </div>
      </>
    );
  }

  return <div className="weather-display">{content}</div>;
};
