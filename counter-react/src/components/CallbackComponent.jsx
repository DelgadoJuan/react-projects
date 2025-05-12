import { useCallback, useState } from "react";
import { IncrementarButton } from "./IncrementarButton";

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);
  const incrementarPadre = useCallback((value) => {
    setCounter((contador) => contador + value);
  }, []);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <IncrementarButton incrementar={incrementarPadre}></IncrementarButton>
    </>
  );
};
