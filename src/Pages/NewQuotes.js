import useHttp from "./../hooks/useHttp";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import { addQuote } from "./../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  const onAddQuoteHandler = (quotes) => {
    sendRequest(quotes);
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [history, status]);

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddQuoteHandler}
    />
  );
};

export default NewQuote;
