import "./aboutFounder.css";
import founderImage from "../assets/srinath.jpeg";

export default function AboutFounder() {
  return (
    <main className="founder-page">
      {/* LEFT SIDE - IMAGE */}
      <section className="founder-image-section">
        <img
          src={founderImage}
          alt="Founder of Challengers Taekwondo Academy"
          className="founder-image"
        />
      </section>

      {/* RIGHT SIDE - CONTENT */}
      <section className="founder-content-section">
        <div className="founder-content">
          <p className="founder-label">ABOUT THE FOUNDER</p>

          <h1>Suddaplli Shrinaadh Varma</h1>

          <h2>Founder & Chief Instructor</h2>

          <div className="founder-line"></div>

          <p>
            Challengers Taekwondo Academy was founded with a vision to create a
            strong foundation for students through Taekwondo, discipline and
            character development.
          </p>

          <p>
            With a deep passion for martial arts and years of dedication to
            Taekwondo, our founder believes that martial arts training is not
            only about physical strength but also about developing confidence,
            discipline, respect and mental strength.
          </p>

          <p>
            The academy provides a positive and supportive environment where
            students can learn Taekwondo, improve their fitness, develop
            self-confidence and become responsible individuals.
          </p>

          <p>
            Our training philosophy focuses on continuous improvement,
            discipline and respect. Every student is encouraged to challenge
            themselves and achieve their personal best.
          </p>

          {/* HIGHLIGHTS */}
          <div className="founder-highlights">
            <div className="highlight">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div className="highlight">
              <strong>500+</strong>
              <span>Students Trained</span>
            </div>

            <div className="highlight">
              <strong>50+</strong>
              <span>Achievements</span>
            </div>
          </div>

          {/* QUOTE */}
          <blockquote>
            "Discipline today creates the strength and confidence needed for
            tomorrow."
          </blockquote>
        </div>
      </section>
    </main>
  );
}
