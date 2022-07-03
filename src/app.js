import React from "react";
import './App.css';




const App = () => {
  return React.createElement(
          "div",
          {},
  [        
      React.createElement("h1",{id: 'my-brand'}, "Adopt Me!"),
      React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havaneese"}),
      React.createElement(Pet,{name: 'Pepper', animal: 'bird', breed: 'Cackatiel'}),
      React.createElement(Pet,{name: 'Sudo', animal: 'Dog', breed: 'Wheaten Terrier'}),
  ]    
          );
      }
export default App;
  