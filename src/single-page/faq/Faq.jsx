import "react";
import "./faq.css";

const faqList = [
  {
    question: "Como adquirir o produto?",
    answer:
      "Ao clicar no link de compra, você será direcionado à nossa página de vendas parceira para você ter uma experiência de compra totalmente segura.",
  },
  {
    question: "Como recebo o ebook após a compra?",
    answer:
      "Após a confirmação da compra, você receberá um link de download diretamente no seu e-mail cadastrado, garantindo o acesso imediato ao ebook.",
  },
  {
    question: "O ebook é adequado para vegetarianos/vegans?",
    answer:
      "Sim! O ebook oferece receitas adaptáveis para diferentes estilos alimentares, incluindo opções vegetarianas e veganas.",
  },
  {
    question: "Posso seguir as receitas mesmo sem experiência em cozinha?",
    answer:
      "Sim! As receitas são fáceis de seguir, com instruções claras e simples, perfeitas para quem está começando a cozinhar.",
  },
];

const Faq = () => {
  return (
    <section className="section-faq">
      <h2 className="faq-title">Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqList.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-question">{faq.question}</summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
