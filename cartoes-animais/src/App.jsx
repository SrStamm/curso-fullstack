import CartaoAnimal from "./CartaoAnimal";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Os Nossos Animais de Estimação
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CartaoAnimal nome="Fernet" especie="Gato" idade="1 ano" dono="Maria" />
        <CartaoAnimal
          nome="Prince"
          especie="Cão"
          idade="12 anos"
          dono="Maria"
        />
        <CartaoAnimal nome="Emily" especie="Coelho" idade="4 anos" dono="Ana" />
        <CartaoAnimal
          nome="Estrela"
          especie="Gato"
          idade="4 anos"
          dono="Daniel"
        />
        <CartaoAnimal nome="Nina" especie="Pássaro" idade="1 ano" dono="João" />
      </div>
    </div>
  );
}

export default App;
