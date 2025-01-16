import Countdown from "../components/countdown/Countdown";
import Hero from "./hero/Hero";

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Countdown durationHours={5} />
    </div>
  );
};

export default App;
