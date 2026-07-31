import "../../styles/logo.css";
import logo from "../../assets/logo/logo.png";
export default function Logo() {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Challenger Taekwondo Academy"
        className="logo-image"
      />

      <div className="logo-text">
        <div className="logo-title">CHALLENGERS</div>
        <div className="logo-sub">FIGHT CLUB</div>
      </div>
    </div>
  );
}
