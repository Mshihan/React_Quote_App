import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";

const NewQuote = () => {
  const history = useHistory();
  const onAddQuoteHandler = (quotes) => {
    console.log(quotes);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
