import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProgramCard from "../common/ProgramCard";
import kids1 from "../assets/kids/kids-1.jpeg";
import kids2 from "../assets/kids/kids-2.jpeg";
import adults from "../assets/adults/adults.jpeg";
import selfDef from "../assets/selfDef/selfDef.jpeg";

const programs = [
  {
    image: kids2,
    title: "Little Tigers",
    age: "Age 4 - 6",
    description:
      "Fun classes that develop balance, coordination, discipline and confidence.",
  },
  {
    image: kids1,
    title: "Kids Taekwondo",
    age: "Age 7 - 12",
    description:
      "Learn kicks, blocks, forms, self-defence and tournament skills.",
  },
  {
    image: adults,
    title: "Teens & Adults",
    age: "Age 13+",
    description:
      "Fitness, flexibility, self-defence and advanced Taekwondo techniques.",
  },
  {
    image: selfDef,
    title: "Self Defence",
    age: "All Ages",
    description: "Practical self-defence techniques for everyday situations.",
  },
];

export default function Programs() {
  return (
    <section style={{ padding: "30px 0" }}>
      <Container>
        <SectionTitle subtitle="" title="Find the Right Training Program" />

        <div className="program-grid">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
