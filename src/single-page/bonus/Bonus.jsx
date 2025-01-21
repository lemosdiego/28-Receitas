import "react";
import "./bonus.css";
import Cta from "../../components/cta/Cta";

const bonusList = [
  {
    text: "Planejamento semanal completo com receitas balanceadas.",
  },
  {
    text: "Dicas de preparo e organização das refeições.",
  },
  {
    text: "Sugestões de substituições saudáveis para cada dia da semana.",
  },
];

const Bonus = () => {
  return (
    <section className="section-bonus">
      <h2 className="bonus-title">Não Perca Essa Oportunidade</h2>
      <p className="bonus-description">
        Ao adquirir este ebook, você receberá um guia exclusivo com um
        planejamento semanal de receitas. Esse guia foi cuidadosamente elaborado
        para ajudar você a organizar suas refeições de forma prática e
        nutritiva, facilitando a sua jornada de alimentação saudável.
      </p>
      <ul className="bonus-list-ul">
        {bonusList.map((bonus, index) => (
          <li key={index} className="bonus-list">
            <i>✅</i> {bonus.text}
          </li>
        ))}
      </ul>
      <Cta className="bonus-cta">Adquirir Agora</Cta>
    </section>
  );
};

export default Bonus;
