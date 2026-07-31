import "./footer.css";
import { academyContact } from "../../data/contact";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Academy */}
        <div className="footer-column">
          <h2 className="footer-logo">Challengers Taekwondo Academy</h2>

          <p>Train Hard. Build Character. Become a Champion.</p>
        </div>

        {/* Branches */}
        <div className="footer-column">
          <h3>Branches</h3>

          <ul>
            <li>Hyderabad</li>
            <li>Vizag</li>
            <li>Vijayawada</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>📞 {academyContact.phone}</p>

          <p>✉ {academyContact.email}</p>

          <p>📍 {academyContact.address}</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Challengers Taekwondo Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
