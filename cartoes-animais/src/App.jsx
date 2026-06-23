import CartaoAnimal from "./CartaoAnimal";

function App() {
  return (
    <div className="">
      <h1>Os Nossos Animais de Estimação</h1>

      <div className="flex">
        <CartaoAnimal nome="Fernet" especie="Cão" idade="4" />
      </div>
    </div>
  );
}

export default App;
