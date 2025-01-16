import Countdown from "../components/countdown/Countdown";
import Hero from "./hero/Hero";
import Presentation from "./presentation/Presentation";

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Presentation />
      <Countdown durationHours={5} />
    </div>
  );
};

export default App;
