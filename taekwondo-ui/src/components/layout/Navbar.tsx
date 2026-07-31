import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";
import Logo from "./logo";

const menuItems = [
  "Home",
  "About",
  "Programs",
  "Gallery",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-left">
          <Logo />
        </div>
        <nav className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <button className="login-btn mobile-only">Login</button>

          <button className="trial-btn mobile-only">Book Trial</button>
        </nav>

        <div className="nav-buttons desktop-only">
          <button className="login-btn">Login</button>
          <button className="trial-btn">Book Trial</button>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
