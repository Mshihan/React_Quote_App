import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuotes";
import QuoteDetail from "./Pages/QuoteDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote" exact>
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
