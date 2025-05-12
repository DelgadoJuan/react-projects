import React from 'react';
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 8,
          pb: 6,
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Un fondo gradiente azul
          color: 'white',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Bienvenido a UrbanSelects
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Tu tienda única para encontrar lo último en moda, joyería y tecnología. ¡Explora nuestra colección y encuentra lo que necesitas!
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" size="large" color="secondary" component={Link} to="/products" endIcon={<ArrowForwardIcon />}>
              Ver Productos
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          ¿Por qué elegirnos?
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: 'Última Tecnología', description: 'Siempre al día con los lanzamientos más recientes.', icon: <ShoppingCartIcon fontSize="large" color="primary"/> },
            { title: 'Envíos Rápidos', description: 'Recibe tus pedidos en la puerta de tu casa velozmente.', icon: <SpeedIcon fontSize="large" color="primary"/> },
            { title: 'Soporte 24/7', description: 'Nuestro equipo está listo para ayudarte en cualquier momento.', icon: <SupportAgentIcon fontSize="large" color="primary"/> },
          ].map((feature) => (
            <Grid item key={feature.title} size={{xs: 12, sm:6, md:4}} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography>{feature.description}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          UrbanSelects
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Innovación a tu alcance.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          {'Copyright © '}
          UrbanSelects {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </>
  );
}; 