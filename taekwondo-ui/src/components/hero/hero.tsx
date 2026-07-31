import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <div className="hero-buttons">
            <button className="primary-btn">Book Free Trial</button>

            <button className="secondary-btn">Explore Programs</button>
          </div>
        </div>
      </div>
    </section>
  );
}
