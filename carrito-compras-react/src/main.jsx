import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarritoApp } from "./CarritoApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>
  </BrowserRouter>
);
