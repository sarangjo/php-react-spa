import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("/api/bad/");
      const json = await result.json();
      console.log(json);
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">Test!</Route>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <Link to="/test">Test</Link>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
