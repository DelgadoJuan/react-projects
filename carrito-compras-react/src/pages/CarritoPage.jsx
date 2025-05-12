import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  Card,
  CardContent,
  Divider,
  Button,
  IconButton,
  Tooltip,
  Container,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CarritoItem } from "../components/CarritoItem";
import { CarritoContext } from "../context/CarritoContext";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export const CarritoPage = () => {
  const {
    carrito,
    agregarCantidad,
    eliminarCantidad,
    eliminarProducto,
    vaciarCarrito,
  } = useContext(CarritoContext);
  const [envio, setEnvio] = useState(0);

  useEffect(() => {
    setEnvio(parseFloat((Math.random() * 100).toFixed(2)));
  }, []);

  const handleVaciarCarrito = () => {
    if (carrito.length > 0) {
      vaciarCarrito();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Carrito de Compras
        </Typography>

        {carrito.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 5}}>
            <Typography variant="h6" component="p" gutterBottom>
              Tu carrito está vacío.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/products">
              Ver Productos
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Tooltip title={carrito.length === 0 ? "El carrito ya está vacío" : "Vaciar carrito completo"}>
                  <IconButton 
                    onClick={handleVaciarCarrito} 
                    color="error" 
                    disabled={carrito.length === 0}
                  >
                    <RemoveShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <List sx={{ backgroundColor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
                {carrito.map((producto, index) => (
                  <React.Fragment key={producto.id}>
                    <CarritoItem
                      product={producto}
                      agregarCantidad={agregarCantidad}
                      eliminarCantidad={eliminarCantidad}
                      eliminarProducto={eliminarProducto}
                    />
                    {index < carrito.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Grid>

            <Grid>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
                    Resumen del Pedido
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <span>Subtotal:</span>
                    <span>
                      $
                      {carrito
                        .reduce(
                          (acc, producto) => acc + producto.price * producto.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <span>Envío:</span>
                    <span>${envio.toFixed(2)}</span>
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <span>Total:</span>
                    <span>
                      $
                      {(carrito.reduce(
                          (acc, producto) => acc + producto.price * producto.quantity,
                          0
                        ) + envio // El toFixed(2) se aplica al resultado final de la suma
                      ).toFixed(2)}
                    </span>
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth size="large">
                    Proceder al Pago
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
