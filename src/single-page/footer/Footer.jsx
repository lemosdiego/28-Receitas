import Form from "../../components/form/Form";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h4 className="footer-tile">Sobre o Produto</h4>
        <p className="footer-text">
          Nosso ebook foi criado para ajudar você a adotar uma alimentação
          saudável de maneira prática e deliciosa. Com receitas simples e
          balanceadas, você vai encontrar opções para todos os gostos e
          necessidades.
        </p>
        <p className="footer-text">
          Tem dúvidas ou sugestões? Preencha o formulário e entraremos em
          contato com você o mais rápido possível!
        </p>
        <p className="copy">
          &copy; Washington Lemos. Todos os direitos reservados.
        </p>
      </div>
      <br />
      <Form />
    </footer>
  );
};
export default Footer;
