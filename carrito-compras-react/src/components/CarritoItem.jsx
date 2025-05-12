import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export const CarritoItem = ({ product, agregarCantidad, eliminarCantidad, eliminarProducto }) => {
  return (
    <Card sx={{ display: "flex", mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <IconButton size="small" onClick={() => eliminarCantidad(product.id)}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mx: 2 }}>{product.quantity}</Typography>
          <IconButton size="small" onClick={() => agregarCantidad(product.id)}>
            <AddIcon />
          </IconButton>
          <IconButton
            color="error"
            sx={{ ml: "auto" }}
            onClick={() => eliminarProducto(product.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
