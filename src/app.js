import React from "react";
import  ReactDOM  from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return(
    <div>
    
      <Router>
      <header>
    <Link to='/'>
      <h1>Adopt Me!</h1>
      </Link>
      </header>
        <Switch>
      <Route path='/details/:id'>
          <Details/>
      </Route>
        <Route path='/'>
        <SearchParams/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
  