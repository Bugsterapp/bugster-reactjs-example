import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav
      style={{
        padding: "20px",
        marginBottom: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link
        to="/"
        style={{
          marginRight: "20px",
          textDecoration: "none",
          color: "#646cff",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          marginRight: "20px",
          textDecoration: "none",
          color: "#646cff",
        }}
      >
        About
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "#646cff" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navigation;
