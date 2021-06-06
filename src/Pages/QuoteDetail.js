import { Route, useParams, useRouteMatch } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import useHttp from "./../hooks/useHttp";
import { getSingleQuote } from "./../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const routeMatch = useRouteMatch();

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // const quote = loadedQuotes.find((quote) => quote.id === params.quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!quote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
