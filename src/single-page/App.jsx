import Countdown from "../components/countdown/Countdown";
import Benefits from "./benefits/Benefits";
import Hero from "./hero/Hero";
import Highlights from "./highlights/Highlights";
import Presentation from "./presentation/Presentation";
import Promo from "./promo/Promo";
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
      <Countdown durationHours={5} />
    </div>
  );
};

export default App;
