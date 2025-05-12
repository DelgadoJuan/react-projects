import { useForm } from "../hooks/useForm";
import { useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Explicar reducers",
    finalizada: false,
  },
];

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }
        return tarea;
      });
    case "[TAREAS] Borrar tarea":
      return state.filter((tarea) => tarea.id !== action.payload);
    case "[TAREAS] Borrar tareas":
      return [];
    default:
      return state;
  }
};

//console.log(tareaReducer(initialState, agregarTarea));

export const ListaTareas = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });
  const agregarTarea = (event) => {
    event.preventDefault();
    if (formState.tarea == "") return;
    console.log(formState);
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };
    const action = {
      type: "[TAREAS] Agregar tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Finalizar tarea",
      payload: id,
    };
    dispatch(action);
  };

  const borrarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Borrar tarea",
      payload: id,
    };
    dispatch(action);
  };
  
  const reset = () => {
    const action = {
      type: '[TAREAS] Borrar tareas',
      payload: ''
    }
    dispatch(action)
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresa una tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
      </form>

      <hr />
      <ul className="list-group">
        {state.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={item.id}
            >
              <span>{item.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => borrarTarea(item)}
                >
                  Borrar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
