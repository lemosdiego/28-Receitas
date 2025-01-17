import Card from "../../components/card/Card";
import Cta from "../../components/cta/Cta";
import "./benefits.css";

const beneficios = [
  {
    title: "Perda de peso sustentável",
    description:
      "As receitas ajudam a controlar a ingestão calórica e a saciedade, promovendo uma perda de peso gradual e saudável.",
  },
  {
    title: "Melhora da saúde",
    description:
      "Os nutrientes presentes nas receitas contribuem para uma melhor saúde cardiovascular, digestão e imunidade.",
  },
  {
    title: "Mais energia e disposição",
    description:
      "Alimentando-se de forma nutritiva, você terá mais energia para realizar suas atividades diárias.",
  },
  {
    title: "Aumento da longevidade",
    description:
      "Seguir uma dieta equilibrada com receitas saudáveis pode contribuir para uma vida mais longa e com melhor qualidade.",
  },
];

const Benefits = () => {
  return (
    <section className="section-benefits">
      <h2 className="title-benefits">Os benefícios das receitas saudáveis</h2>
      <div className="card-container-benefits">
        {beneficios.map((beneficio, index) => (
          <Card key={index} className="card-benefits">
            <h3 className="title-card-benefits">{beneficio.title}</h3>
            <p className="description-card-benefits">{beneficio.description}</p>
          </Card>
        ))}
      </div>
      <Cta className="cta-benefits">Garanta a oferta</Cta>
    </section>
  );
};

export default Benefits;
