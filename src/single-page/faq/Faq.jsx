import "react";
import "./faq.css";

const faqList = [
  {
    question: "Como adquirir o produto?",
    answer:
      "Para adquirir o produto, basta clicar no link de compra disponível em nosso site. Você será automaticamente direcionado à página de vendas da nossa parceira Kwyfy, que oferece uma experiência de compra rápida e segura. Todo o processo de pagamento é feito com segurança para garantir sua tranquilidade.",
  },
  {
    question: "Como recebo o ebook após a compra?",
    answer:
      "Ao realizar a compra através da Kiwify, você receberá um e-mail de confirmação diretamente da Kiwify, com o título Pagamento Aprovado e o nome do produto adquirido.No e-mail, haverá um botão para criar sua senha de acesso. Após criar sua senha, você poderá fazer o login e acessar o ebook de forma rápida e segura. Esse processo garante que você tenha acesso imediato ao seu produto digital.",
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
