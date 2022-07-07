import React from "react";
import  ReactDOM  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Router>
      <Route path='/details/:id'>
          <Details/>
      </Route>
        <Route path='/'>
        <SearchParams/>
        </Route>
      </Router>
    </div>
  );
}


export default App;
  