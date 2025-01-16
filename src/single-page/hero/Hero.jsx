import Cta from "../../components/cta/Cta";
import "./hero.css";

const Hero = () => {
  return (
    <header>
      <h1 className="hero-title">Emagreça com saúde: 28 receitas saudáveis</h1>
      <p className="hero-description">
        Um guia completo para uma jornada de emagrecimento saudável e deliciosa
      </p>
      <Cta
        href="https://www.youtube.com/watch?v=ddT-v65Nulw"
        className="cta-hero"
      >
        Adquira já
      </Cta>
    </header>
  );
};
export default Hero;
