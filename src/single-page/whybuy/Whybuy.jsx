import "./whybuy.css";
import Card from "../../components/card/Card";
const whyThisEbook = [
  {
    title: "Quem Pode Se Beneficiar?",
    description:
      "Este ebook é ideal para qualquer pessoa que busca uma alimentação mais saudável sem abrir mão do sabor. Seja você um iniciante na cozinha ou alguém que já conhece o básico, estas receitas são perfeitas para todos.",
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
      "Ao adquirir este ebook, você terá acesso a 28 receitas cuidadosamente selecionadas para ajudar na sua jornada de alimentação saudável. Com pratos deliciosos e fáceis de preparar, você vai descobrir que comer bem pode ser prático e saboroso.",
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
