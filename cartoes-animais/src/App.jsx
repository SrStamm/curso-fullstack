import CartaoAnimal from "./CartaoAnimal";

function App() {
  return (
    <div className="">
      <h1>Os Nossos Animais de Estimação</h1>

      <div className="flex gap-1">
        <CartaoAnimal nome="Fernet" especie="Gato" idade="1 ano" dono="Maria" />
        <CartaoAnimal
          nome="Prince"
          especie="Cão"
          idade="12 anos"
          dono="Maria"
        />
        <CartaoAnimal nome="Emily" especie="Cão" idade="4 anos" dono="Ana" />
        <CartaoAnimal
          nome="Estrela"
          especie="Cão"
          idade="4 anos"
          dono="Daniel"
        />
        <CartaoAnimal nome="Nina" especie="Cão" idade="4 anos" dono="João" />
      </div>
    </div>
  );
}

export default App;
