interface Props {
  subtitle: string;

  title: string;
}

export default function SectionTitle({
  subtitle,

  title,
}: Props) {
  return (
    <div className="section-title">
      <p className="section-subtitle">{subtitle}</p>

      <h2>{title}</h2>
    </div>
  );
}
interface Props {
  subtitle: string;

  title: string;
}
