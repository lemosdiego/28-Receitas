import Card from "../../components/card/Card";
import "./highlights.css";

const highlights = [
  {
    title: "Frango Grelhado com Legumes Assados",
    description:
      "Uma combinação perfeita de proteínas e vegetais, este prato oferece um sabor delicioso e nutritivo, ideal para uma refeição saudável e balanceada.",
    image: "/imagens/refeicao.webp",
  },
  {
    title: "Salada de Abacate com Tomate e Alface",
    description:
      "Refrescante e cheia de nutrientes, esta salada é uma excelente opção para uma refeição leve, repleta de sabores naturais e frescos.",
    image: "/imagens/salada.webp",
  },
  {
    title: "Sopa de Abóbora com Gengibre",
    description:
      "Confortante e com um toque de especiarias, esta sopa combina a doçura da abóbora com o calor do gengibre, perfeita para dias frios.",
    image: "/imagens/sopa.webp",
  },
  {
    title: "Mousse de Abacate com Cacau",
    description:
      "Uma sobremesa rica e cremosa, que traz o melhor do abacate e do cacau para uma experiência saudável e indulgente.",
    image: "/imagens/doce.webp",
  },
];

const Highlights = () => {
  return (
    <section className="section-highlights">
      <h2 className="title-highlights">As 4 Receitas Favoritas</h2>
      <div className="section-container-card">
        {highlights.map((highlight, index) => (
          <Card key={index} className="card-highlights">
            <img src={highlight.image} alt="" className="image-highlights" />
            <h3 className="title-card-highlights">{highlight.title}</h3>
            <p className="description-card-highlights">
              {highlight.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Highlights;
