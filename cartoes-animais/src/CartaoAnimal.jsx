function CartaoAnimal(props) {
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="rounded-full w-12 h-12">{props.nome.charAt(0)}</div>
      <h2>Nome: {props.nome}</h2>
      <p>Especie: {props.especie}</p>
      <p>Idade: {props.idade}</p>
      <p>Dono: {props.dono}</p>
    </div>
  );
}

export default CartaoAnimal;
