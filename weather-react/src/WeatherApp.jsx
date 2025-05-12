import { WeatherDisplay } from "./components/WeatherDisplay";
import { SearchForm } from "./components/SearchForm";
import { CiudadProvider } from "./context/ciudadContext";
import { HistoryProvider } from "./context/HistoryContext";
import { HistoryComponent } from "./components/HistoryComponent";

export const WeatherApp = () => {
  return (
    <CiudadProvider>
      <HistoryProvider>
        <div className="main-layout">
          <HistoryComponent />
          <div className="main-content">
            <div className="main-content-wrapper">
              <h1>Aplicación de clima</h1>
              <SearchForm />
              <WeatherDisplay />
            </div>
          </div>
        </div>
      </HistoryProvider>
    </CiudadProvider>
  );
};
