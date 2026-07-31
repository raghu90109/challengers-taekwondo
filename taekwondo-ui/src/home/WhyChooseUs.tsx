import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "../common/FeatureCard";

import {
  GiBlackBelt,
  GiTrophyCup,
  GiTeacher,
  GiHeartInside,
} from "react-icons/gi";

const features = [
  {
    icon: <GiBlackBelt />,
    title: "Certified Coaches",
    description:
      "Experienced and certified instructors committed to developing every student.",
  },
  {
    icon: <GiTrophyCup />,
    title: "Belt Promotion",
    description:
      "Regular grading examinations following World Taekwondo standards.",
  },
  {
    icon: <GiTeacher />,
    title: "Expert Trainers",
    description:
      "Professional coaches with competition and teaching experience.",
  },
  {
    icon: <GiHeartInside />,
    title: "Character Building",
    description:
      "Discipline, confidence, respect and leadership through martial arts.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <Container>
        <SectionTitle
          subtitle="Why Choose Challenger"
          title="More Than Martial Arts, We Build Champions"
        />

        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
