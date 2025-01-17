import Countdown from "../components/countdown/Countdown";
import Benefits from "./benefits/Benefits";
import Hero from "./hero/Hero";
import Presentation from "./presentation/Presentation";

const App = () => {
  return (
    <div>
      <Hero />
      <Presentation />
      <Benefits />
      <Countdown durationHours={5} />
    </div>
  );
};

export default App;
