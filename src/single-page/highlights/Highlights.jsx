import "react";
import Layout from "../../components/layout/Layout";

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
    <Layout
      title="As 4 Receitas Favoritas"
      items={highlights}
      className="highlights"
    />
  );
};

export default Highlights;
