import { Route, useParams, useRouteMatch } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";

const DUMMY_QUOTES = [
  { id: "q1", author: "Shihan", text: "Learning React is fun!" },
  { id: "q2", author: "Shamlan", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  console.log(routeMatch);
  if (!quote) {
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
