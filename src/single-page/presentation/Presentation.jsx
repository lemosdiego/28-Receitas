import Card from "../../components/card/Card";
import "./presentation.css";

const receitas = [
  {
    categoria: "Saladas Refrescantes",
    descricao:
      "Deliciosas saladas com ingredientes frescos e molhos saudáveis.",
  },
  {
    categoria: "Sopas Nutritivas",
    descricao: "Sopas cremosas e saborosas, perfeitas para os dias frios.",
  },
  {
    categoria: "Pratos Principais Saudáveis",
    descricao: "Receitas com proteínas magras, legumes e grãos integrais.",
  },
  {
    categoria: "Sobremesas Deliciosas",
    descricao:
      "Sobremesas saudáveis e saborosas, para satisfazer seu paladar sem culpa.",
  },
];

const Presentation = () => {
  return (
    <section className="section-presentation">
      <h2 className="presentation-title">
        Descubra como perder peso <br />
        de maneira saudável e sustentável.
      </h2>
      <h3 className="presentation-title-secondary">
        28 Receitas incríveis para ajudar você nesse processo
      </h3>
      <p className="presentation-description">
        Alimentar-se de forma saudável não significa abrir mão do prazer à mesa.
        Aprenda a combinar alimentos nutritivos em receitas simples, saborosas e
        perfeitas para quem deseja manter uma alimentação equilibrada e ainda
        conquistar seus objetivos de saúde.
      </p>
      <div className="content-card">
        {receitas.map((receita, index) => (
          <Card key={index} className="card-presentation">
            <h3 className="title-category">{receita.categoria}</h3>
            <p className="description-category">{receita.descricao}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Presentation;
