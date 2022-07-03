import React from "react";
import './App.css';

import Pet from "./pet";


//const App = () => {
  //return React.createElement(
    //      "div",
      //    {},
  //[        
    //  React.createElement("h1",{id: 'my-brand'}, "Adopt Me!"),
      //React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havaneese"}),
      //React.createElement(Pet,{name: 'Pepper', animal: 'bird', breed: 'Cackatiel'}),
      //React.createElement(Pet,{name: 'Sudo', animal: 'Dog', breed: 'Wheaten Terrier'}),
  //]    
    //      );
      //}

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Pet name='Luna' animal='Dog' breed='Havaneese' />
      <Pet name='Pepper' animal='bird' breed='Cackatiel'/>
      <Pet name= 'Sudo' animal='Dog' breed= 'Wheaten Terrier'/>
    </div>
  );
}


export default App;
  