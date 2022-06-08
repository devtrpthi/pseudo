import React from 'react';
import './App.css';
import Nav from './nav';
import About from './about';
import Shop from './shop';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/shop" element={<Shop/>}/>
    </Routes>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
