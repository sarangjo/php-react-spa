import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("/api/");
      setResult(await result.text());
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">
            Test! <Link to="/">Back home</Link>
          </Route>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Result from API: {result}</p>
              <Link to="/test">Test</Link>
              <a href="/custom-php">Custom</a>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
