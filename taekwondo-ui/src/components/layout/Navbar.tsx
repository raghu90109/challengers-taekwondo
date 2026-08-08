import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import "./navbar.css";
import Logo from "./logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-left">
          <Logo />
        </div>

        {/* NAVIGATION */}
        <nav className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {/* HOME */}
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <div
            className={`nav-dropdown ${aboutOpen ? "open" : ""}`}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <KeyboardArrowDownIcon
                className={`dropdown-icon ${aboutOpen ? "rotate" : ""}`}
              />
            </button>

            <div className="dropdown-menu">
              <a href="#about" onClick={closeMobileMenu}>
                About Us
              </a>

              <Link to="/about/founder" onClick={closeMobileMenu}>
                About Founder
              </Link>

              <a href="#vision-mission" onClick={closeMobileMenu}>
                Vision & Mission
              </a>

              <a href="#core-values" onClick={closeMobileMenu}>
                Core Values
              </a>
            </div>
          </div>

          {/* PROGRAMS */}
          <Link to="/programs" onClick={closeMobileMenu}>
            Programs
          </Link>

          {/* ATHLETES */}
          <Link to="#athletes" onClick={closeMobileMenu}>
            Athletes
          </Link>

          {/* RANKINGS */}
          <a href="#rankings" onClick={closeMobileMenu}>
            Rankings
          </a>

          {/* ACHIEVEMENTS */}
          <a href="#achievements" onClick={closeMobileMenu}>
            Achievements
          </a>

          {/* CONTACT */}
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>

          {/* MOBILE BUTTONS */}
          <button className="login-btn mobile-only">Login</button>

          <button className="trial-btn mobile-only">Book Trial</button>
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="nav-buttons desktop-only">
          <button className="login-btn">Login</button>

          <button className="trial-btn">Join now</button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
