import React from "react";

export const IncrementarButton = React.memo(({ incrementar }) => {
  console.log("Me estoy redibujando");
  return (
    <button className="btn btn-primary" onClick={() => incrementar(10)}>
      +1
    </button>
  );
});
