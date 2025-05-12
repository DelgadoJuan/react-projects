import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export const Card = ({ imagen, titulo, precio, onClick }) => {
  return (
    <MuiCard
      sx={{
        width: "100%",
        height: "100%", // Cambia de altura fija a 100%
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "220px", // Altura fija para el contenedor de la imagen
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
            image={imagen}
            alt={titulo}
          />
        </Box>
        <CardContent
          sx={{
            height: "130px", // Altura fija para el contenido
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              height: "60px", // Altura fija para el título
              overflow: "hidden",
            }}
          >
            <Typography
              variant="subtitle2"
              component="div"
              title={titulo}
              sx={{
                fontWeight: "500",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "1.3",
              }}
            >
              {titulo}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.primary"
            align="center"
            sx={{
              fontWeight: "bold",
              marginTop: "0px",
              fontSize: "1.2rem",
            }}
          >
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
