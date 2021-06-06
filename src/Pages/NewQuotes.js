import { useHttp } from "./../hooks/use-http";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import { addQuote } from "./../lib/api";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, httpState } = useHttp(addQuote);
  const onAddQuoteHandler = (quotes) => {
    console.log(quotes);

    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
