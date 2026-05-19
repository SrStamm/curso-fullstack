import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404</h1>
      <p>Esta página não existe.</p>
      <Link to="/">Voltar ao início</Link>
    </div>
  );
}

export default NotFound;
