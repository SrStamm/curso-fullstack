function CartaoAnimal(props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3">
      <div className="rounded-full w-12 h-12 bg-blue-500 text-white text-xl font-bold flex items-center justify-center ">
        {props.nome.charAt(0)}
      </div>
      <h2 className="text-xl">{props.nome}</h2>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-gray-800">Espécie: </span>
        {props.especie}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-gray-800">Idade: </span>
        {props.idade}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold text-gray-800">Dono: </span> {props.dono}
      </p>
    </div>
  );
}

export default CartaoAnimal;
