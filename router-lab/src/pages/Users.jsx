import { useNavigate } from "react-router-dom";
import users from "../data/users";

function Users() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Utilizadores</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ marginBottom: "0.5rem" }}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
