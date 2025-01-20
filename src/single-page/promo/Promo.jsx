import Cta from "../../components/cta/Cta";
import "./promo.css";

const Promo = () => {
  return (
    <section className="section-promo">
      <img
        src="/public/imagens/capaEbook.webp"
        alt=""
        className="image-promo"
      />
      <aside className="content-promo">
        <h2 className="title-promo">
          Transforme Sua Vida com 28 Receitas Saudáveis!
        </h2>
        <br />
        <p className="description-promo">
          Descrição: abrir mão do sabor. Este eBook reúne 28 receitas incríveis,
          incluindo saladas, sopas, pratos principais e sobremesas deliciosas.
          Alimente-se bem, perca peso e sinta-se melhor com refeições que são
          tão nutritivas quanto saborosas. Aproveite essa oportunidade para
          transformar sua alimentação e seu estilo de vida!
        </p>
        <br />
        <Cta className="cta-promo">Garanta Agora por Apenas R$14,99</Cta>
      </aside>
    </section>
  );
};
export default Promo;
