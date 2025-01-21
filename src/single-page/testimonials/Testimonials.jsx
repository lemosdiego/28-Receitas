import "react";
import Layout from "../../components/layout/Layout";

const testimonials = [
  {
    title: "João da Silva",
    description:
      "As refeições são maravilhosas e super nutritivas! Recomendo a todos.",
    image: "/svg/joao.svg",
  },
  {
    title: "Maria Oliveira",
    description:
      "Adorei a sopa de abóbora com gengibre! É perfeita para dias frios.",
    image: "/svg/maria.svg",
  },
  {
    title: "Carlos Souza",
    description:
      "A salada de abacate é deliciosa e fresca. Ótima para o verão!",
    image: "/svg/carlos.svg",
  },
  {
    title: "Ana Paula",
    description:
      "A mousse de abacate com cacau é simplesmente divina! Saudável e saborosa.",
    image: "/svg/ana.svg",
  },
];

const Testimonials = () => {
  return (
    <Layout
      title="Depoimentos de Clientes"
      items={testimonials}
      className="testimonials"
    />
  );
};

export default Testimonials;
