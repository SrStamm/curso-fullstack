import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#e94560" : "white",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#1a1a2e",
      }}
    >
      <NavLink to="/" end style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/users" style={linkStyle}>
        Users
      </NavLink>
    </nav>
  );
}

export default Navbar;
