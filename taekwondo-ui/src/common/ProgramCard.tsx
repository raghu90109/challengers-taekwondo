import "../styles/programCard.css";

interface ProgramCardProps {
  image: string;
  title: string;
  age: string;
  description: string;
}

export default function ProgramCard({
  image,
  title,
  age,
  description,
}: ProgramCardProps) {
  return (
    <div className="program-card">
      <img src={image} alt={title} />

      <div className="program-content">
        <h3>{title}</h3>

        <span>{age}</span>

        <p>{description}</p>

        <button>Learn More →</button>
      </div>
    </div>
  );
}
