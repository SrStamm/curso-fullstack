import { useState } from "react";

function CartaoPerfil() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const toogle = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (
    <div
      className={`cartao ${temaOscuro && "dark"}`}
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <button onClick={toogle}>
        {temaOscuro ? "🌙 Modo escuro" : "☀️ Modo claro"}
      </button>
    </div>
  );
}

export default CartaoPerfil;
