//===Terminal===
//1.npx create-react-app album
//2.cd album
//3.yarn add react-router react-router-dom axios json-severe
//4.yarn start (for React)
//5.yarn run json-serve (for Json): running the same time with #4

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home.js";
import Album from "./Album.js";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/albums/:id"><Album /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
