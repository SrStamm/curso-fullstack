import { useParams, Link } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  // useParams devolve um objeto com os parâmetros da rota atual
  // Se a rota é /users/:id e o URL é /users/3, então { id: '3' }
  const { id } = useParams();

  // O id vem sempre como string — convertemos para número
  const user = users.find((u) => u.id === Number(id));

  // Caso o utilizador não exista (ex: /users/999)
  if (!user) {
    return (
      <div>
        <h2>Utilizador não encontrado.</h2>
        <Link to="/users">← Voltar à lista</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/users">← Voltar à lista</Link>
      <h1>{user.name}</h1>
      <p>
        <strong>Função:</strong> {user.role}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
    </div>
  );
}

export default UserDetail;
