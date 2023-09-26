import Planets from "./Planets";
import "./QuoteCard.css";
import { GrDeploy } from "react-icons/gr";

const QuoteCard = ({ quote, handleChangeQuote, planet }) => {
  return (
    <section className="quoteCard">
      <article className="quoteCard__container">
        <h1 className="title">Infogalax</h1>

        <p className="text__quoteCard">{quote.phrase} </p>

        <button className="quoteCard__btn" onClick={handleChangeQuote}>
          <GrDeploy />
        </button>
      </article>

      <footer className="quoteCard__Author">Author: {quote.author}</footer>
      <Planets planet={planet} />
    </section>
  );
};
export default QuoteCard;
