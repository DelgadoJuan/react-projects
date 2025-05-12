import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { ProductosPage } from "./pages/ProductosPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductoProvider } from "./context/ProductoContext";
import { CarritoProvider } from "./context/CarritoContext";
import { ProductoDetallePage } from "./pages/ProductoDetallePage";
import { CategoriaProvider } from "./context/CategoriaContext";

export const CarritoApp = () => {
  return (
    <ProductoProvider>
      <CarritoProvider>
        <CategoriaProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductosPage />} />
            <Route path="/cart" element={<CarritoPage />} />
            <Route path="/products/:id" element={<ProductoDetallePage />} />
          </Routes>
        </CategoriaProvider>
      </CarritoProvider>
    </ProductoProvider>
  );
};
