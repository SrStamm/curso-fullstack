import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à nossa aplicação de exemplo!</p>
      <button onClick={() => navigate("/users/2")}>
        Ver perfil do Bruno Silva
      </button>
    </div>
  );
}

export default Home;
