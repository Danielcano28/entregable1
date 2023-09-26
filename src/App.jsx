import { useState } from "react";
import "./App.css";

import quotes from "./db/guates.json";
import { getRandomPhrases } from "./utils/random";
import QuoteCard from "./components/QuoteCard";

const backgrounds = ["imagen1", "imagen2", "imagen3", "imagen4"];

const planets = ["planeta1", "planeta2", "planeta3", "planeta4"];

function App() {
  const [quote, setQuote] = useState(getRandomPhrases(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomPhrases(backgrounds));
  const [planet, setPlanet] = useState(getRandomPhrases(planets));
  console.log(planet);
  const handleChangeQuote = () => {
    setQuote(getRandomPhrases(quotes));
    setCurrentBg(getRandomPhrases(backgrounds));
    setPlanet(getRandomPhrases(planets));
  };

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard
        quote={quote}
        handleChangeQuote={handleChangeQuote}
        planet={planet}
      />
    </main>
  );
}

export default App;
