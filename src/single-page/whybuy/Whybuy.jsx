import "./whybuy.css";
import Card from "../../components/card/Card";

const whyThisEbook = [
  {
    title: "Quem Pode Se Beneficiar?",
    description:
      "Este ebook é ideal para quem busca uma alimentação saudável sem abrir mão do sabor. Perfeito para iniciantes na cozinha ou para quem já conhece o básico, com receitas acessíveis a todos.",
    points: [
      {
        text: "Para quem quer perder peso de forma saudável.",
      },
      {
        text: "Para quem busca refeições nutritivas e equilibradas.",
      },
      {
        text: "Para quem deseja variar suas refeições saudáveis.",
      },
    ],
  },
  {
    title: "Benefícios de Ter Este Ebook",
    description:
      "Com este ebook, você terá acesso a 28 receitas cuidadosamente selecionadas para apoiar sua jornada de alimentação saudável. Descubra pratos deliciosos e práticos que tornam a alimentação saudável fácil e saborosa.",
    points: [
      {
        text: "Receitas de saladas, sopas, pratos e sobremesas.",
      },
      {
        text: "Receitas rápidas e simples para economizar tempo.",
      },
      {
        text: "Dicas para combinar alimentos de forma nutritiva.",
      },
    ],
  },
];

const Whybuy = () => {
  return (
    <section className="section-whybuy">
      {whyThisEbook.map((Ebook, index) => (
        <Card key={index} className="card-whybuy">
          <h2 className="title-whybuy">{Ebook.title}</h2>

          <p className="description-whybuy">{Ebook.description}</p>
          <ul className="whybuy-points">
            {Ebook.points.map((point, idx) => (
              <li key={idx} className="point-item">
                <i>✅</i> {point.text}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </section>
  );
};

export default Whybuy;
