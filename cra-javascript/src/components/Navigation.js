import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  const navStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "1rem 0",
    marginBottom: "2rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const navContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
  };

  const linkStyle = {
    color: "#61dafb",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    fontWeight: "500",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "rgba(97, 218, 251, 0.2)",
    color: "#ffffff",
  };

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={
              location.pathname === item.path ? activeLinkStyle : linkStyle
            }
            onMouseOver={(e) => {
              if (location.pathname !== item.path) {
                e.target.style.backgroundColor = "rgba(97, 218, 251, 0.1)";
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== item.path) {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
