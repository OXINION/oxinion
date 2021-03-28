import GlobalStyle from "./globalStyles";
import { Route, Switch } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search" component="" />
        <Route path="/" component={LandingPage} />
        <GlobalStyle />
      </Switch>
    </div>
  );
}

export default App;
