function CartaoAnimal(props) {
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="rounded">{props.nome.charAt(0)}</div>
      <h2>{props.nome}</h2>
      <p>{props.especie}</p>
      <p>{props.idade}</p>
    </div>
  );
}

export default CartaoAnimal;
