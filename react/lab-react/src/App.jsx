import users from "./assets/users.json";
import "./App.css";
import Lab from "./Lab";
import UserCard from "./component/UserCard";

function App() {
  const utilizadoresAtivos = users.filter((user) => user.ativo);
  return (
    <>
      <h1>Lista de utilizadores</h1>
      {utilizadoresAtivos.length > 0 ? (
        utilizadoresAtivos.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p></p>
      )}
    </>
  );
}

export default App;
