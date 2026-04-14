import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  const aumentarValor = () => {
    let novoNumero = numero + 1;
    setNumero(novoNumero);
  };

  const decrecerValor = () => {
    if (numero === 0) {
      return;
    }

    let novoNumero = numero - 1;
    setNumero(novoNumero);
  };

  const reset = () => {
    setNumero(0);
  };

  return (
    <>
      <div>Valor {numero}</div>

      <div>
        <button onClick={aumentarValor}>+</button>
        {numero === 0 ? "" : <button onClick={decrecerValor}>-</button>}
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default Contador;
