import Countdown from "../components/countdown/Countdown";
import Benefits from "./benefits/Benefits";
import Hero from "./hero/Hero";
import Presentation from "./presentation/Presentation";
import Promo from "./promo/Promo";

const App = () => {
  return (
    <div>
      <Hero />
      <Presentation />
      <Benefits />
      <Promo />
      <Countdown durationHours={5} />
    </div>
  );
};

export default App;
