import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Rating,
  TextField,
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getProduct } from "../hooks/useApi";
export const ProductoDetallePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data))
    .catch((error) => console.error("Error fetching producto:", error));
  }, [id]);

  if (!product) {
    return <Typography>Producto no encontrado</Typography>;
  }

  const handleAgregar = () => {
    agregarProducto({ ...product, quantity });
  };

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="lg">
        <Card sx={{ p: {xs: 2, md: 4}, boxShadow: 3 }}>
          <Grid container spacing={{xs: 2, md: 4}}>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: '100%',
                  maxWidth: 380,
                  maxHeight: 400,
                  objectFit: 'contain',
                  borderRadius: 2,
                  background: '#fff',
                }}
              />
            </Grid>

            <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom sx={{ mb: 2 }}>
                ${product.price}
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 2, display: {xs: 'block', md: 'none'} }}>
                {product.description}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Rating value={product.rating.rate} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({product.rating.count} reseñas)
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1} color="primary">
                  <RemoveIcon />
                </IconButton>
                <TextField
                  value={quantity}
                  size="small"
                  sx={{ width: 60, '& .MuiInputBase-input': { textAlign: 'center' } }}
                  InputProps={{ readOnly: true }}
                />
                <IconButton onClick={() => setQuantity(quantity + 1)} color="primary">
                  <AddIcon />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ShoppingCartIcon />}
                onClick={handleAgregar}
                sx={{ width: {xs: '100%', sm: 'auto'}, alignSelf: {xs: 'stretch', sm: 'flex-start'} }}
              >
                Agregar al carrito
              </Button>
            </Grid>
            
            <Grid sx={{ mt: 3, display: {xs: 'none', md: 'block'} }}>
              <Typography variant="h6" gutterBottom>Descripción</Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
            </Grid>

          </Grid>
        </Card>
      </Container>
    </Box>
  );
};