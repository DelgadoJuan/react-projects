import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/weather.css'
import { WeatherApp } from './WeatherApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp></WeatherApp>
  </StrictMode>,
)
