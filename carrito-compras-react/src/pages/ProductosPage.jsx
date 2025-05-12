import { ProductoContext } from "../context/ProductoContext";
import { CategoriaContext } from "../context/CategoriaContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Productos } from "../components/Productos";
import { Categoria } from "../components/Categoria";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const ProductosPage = () => {
  const { productos } = useContext(ProductoContext);
  const { categoria } = useContext(CategoriaContext);
  const navigate = useNavigate();
  const [filtroPropiedad, setFiltroPropiedad] = useState("");

  const handleFiltroChange = (event) => {
    setFiltroPropiedad(event.target.value);
  };

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  let productosMostrados = productos;
  if (categoria) {
    productosMostrados = productosMostrados.filter(
      (producto) => producto.category === categoria
    );
  }

  if (filtroPropiedad === "precioAsc") {
    productosMostrados = [...productosMostrados].sort(
      (a, b) => a.price - b.price
    );
  } else if (filtroPropiedad === "precioDesc") {
    productosMostrados = [...productosMostrados].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Nuestros Productos
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ gap: 2 }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "20%" },
              p: 2,
              borderRight: { md: '1px solid rgba(0, 0, 0, 0.12)'},
              height: { md: 'fit-content' }
            }}
          >
            <Typography variant="h6" gutterBottom component="div" sx={{ mb: 2 }}>
              Filtros
            </Typography>
            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Ordenar por:
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="filtro-propiedad-label">Seleccionar...</InputLabel>
                <Select
                  labelId="filtro-propiedad-label"
                  id="filtro-propiedad-select"
                  value={filtroPropiedad}
                  label="Seleccionar..."
                  onChange={handleFiltroChange}
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value="precioAsc">Precio: Menor a Mayor</MenuItem>
                  <MenuItem value="precioDesc">Precio: Mayor a Menor</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Categoria
              categorias={productos.map((producto) => producto.category)}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              p: {xs: 0, md: 2}
            }}
          >
            <Productos
              productos={productosMostrados}
              onProductoClick={handleClick}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
