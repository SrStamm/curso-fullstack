import Botao from "./Botao";

function Card({ corFundo }) {
  const titulo = "O meu primeiro componente";
  const descricao =
    "Este é um cartão criado como componente React independente.";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "15px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: corFundo,
      }}
    >
      <h2>{titulo}</h2>
      <p>{descricao}</p>

      <Botao />
    </div>
  );
}

export default Card;
