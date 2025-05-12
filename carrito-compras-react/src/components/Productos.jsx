import { Card } from "./Card"; // Asumiendo que Card.jsx está en la misma carpeta o ajustar ruta
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"; // Opcional, para padding si es necesario

export const Productos = ({ productos, onProductoClick }) => {
  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        alignItems="baseline"
        direction="row"
        justifyContent="space-evenly"
        sx={{
          "& .MuiGrid-item": {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {productos.map((producto) => (
          <Grid key={producto.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card
              onClick={() => onProductoClick(producto.id)}
              imagen={producto.image}
              titulo={producto.title}
              precio={producto.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
