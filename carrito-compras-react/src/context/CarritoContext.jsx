import { createContext, useReducer } from "react";

export const CarritoContext = createContext();

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const compraReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "AGREGAR_PRODUCTO":
        return [...state, action.payload];
      case "AGREGAR_CANTIDAD":
        return state.map((producto) =>
          producto.id === action.payload
            ? { ...producto, quantity: producto.quantity + 1 }
            : producto
        );
      case "ELIMINAR_CANTIDAD":
        return state.map((producto) =>
          producto.id === action.payload
            ? { ...producto, quantity: producto.quantity - 1 }
            : producto
        );
      case "ELIMINAR_PRODUCTO":
        return state.filter((producto) => producto.id !== action.payload);
      case "VACIAR_CARRITO":
        return [];
    }
  };

  const [carrito, dispatch] = useReducer(compraReducer, initialState);

  const agregarProducto = (producto) => {
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: producto,
    });
  };

  const agregarCantidad = (id) => {
    dispatch({
      type: "AGREGAR_CANTIDAD",
      payload: id,
    });
  };

  const eliminarCantidad = (id) => {
    dispatch({
      type: "ELIMINAR_CANTIDAD",
      payload: id,
    });
  };

  const eliminarProducto = (id) => {
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: id,
    });
  };

  const vaciarCarrito = () => {
    dispatch({
      type: "VACIAR_CARRITO",
    });
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        agregarCantidad,
        eliminarCantidad,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
