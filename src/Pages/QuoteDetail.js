import { Route, useHistory, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import { useState } from "react";

const DUMMY_QUOTES = [
  { id: "q1", author: "Shihan", text: "Learning React is fun!" },
  { id: "q2", author: "Shamlan", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const history = useHistory();
  const [showingComments, setShowingComments] = useState(false);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  const onClickShowCommentHander = () => {
    if (!showingComments) {
      setShowingComments(true);
      history.push(`/quotes/${quote.id}/comments`);
    } else {
      setShowingComments(false);
      history.push(`/quotes/${quote.id}`);
    }
  };

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <button onClick={onClickShowCommentHander}>
        {showingComments ? "Hide Comments" : "Show Comments"}{" "}
      </button>
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
