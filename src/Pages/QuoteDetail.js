import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Shihan", text: "Learning React is fun!" },
  { id: "q2", author: "Shamlan", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      {/* <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route> */}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
