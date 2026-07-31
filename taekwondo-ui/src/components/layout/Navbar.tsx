import "./navbar.css";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Logo />

        <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Programs</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Branches</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="trial-btn">Book Trial</button>
        </div>
      </nav>
    </header>
  );
}
