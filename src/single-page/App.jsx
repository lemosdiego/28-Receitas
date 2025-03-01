import Countdown from "../components/countdown/Countdown";
import Benefits from "./benefits/Benefits";
import Bonus from "./bonus/Bonus";
import Faq from "./faq/Faq";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Highlights from "./highlights/Highlights";
import Presentation from "./presentation/Presentation";
import Promo from "./promo/Promo";
import Testimonials from "./testimonials/Testimonials";
import Whybuy from "./whybuy/Whybuy";

const App = () => {
  return (
    <div>
      <Hero />
      <Presentation />
      <Benefits />
      <Promo />
      <Highlights />
      <Whybuy />
      <Testimonials />
      <Bonus />
      <Faq />
      <Footer />
      <Countdown durationHours={5} />
    </div>
  );
};

export default App;
