import { useContext } from "react";
import { CategoriaContext } from "../context/CategoriaContext";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export const Categoria = ({ categorias }) => {
  const { categoria, setCategoria } = useContext(CategoriaContext);
  const categoriasUnicas = [...new Set(categorias)];

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categorías
        </ListSubheader>
      }
    >
      <ListItemButton
        selected={categoria === ""}
        onClick={() => setCategoria("")}
      >
        <ListItemText primary="Todas" />
      </ListItemButton>
      {categoriasUnicas.map((cat) => (
        <ListItemButton
          key={cat}
          selected={categoria === cat}
          onClick={() => setCategoria(cat)}
        >
          <ListItemText primary={cat} />
        </ListItemButton>
      ))}
    </List>
  );
};
