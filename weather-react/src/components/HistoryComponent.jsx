import { useContext } from 'react';
import { HistoryContext } from '../context/HistoryContext';

export const HistoryComponent = () => {
  const { historial, seleccionarCiudad } = useContext(HistoryContext);

  return (
    <div className="history-container">
      <div className="history-list">
        <h3>Ciudades recientes</h3>
        {historial.length === 0 ? (
          <p className="empty-history">No hay ciudades en el historial</p>
        ) : (
          <ul>
            {historial.map((ciudad, index) => (
              <li 
                key={index}
                onClick={() => seleccionarCiudad(ciudad)}
                className="history-item"
              >
                {ciudad}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}; 