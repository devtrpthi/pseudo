import React from "react";
import  ReactDOM  from "react";

const products =[
    {title:'Cabbage', isFruit: false, id:1},
    {title: 'Garlic', isFruit: false, id:2},
    {title: 'Apple', isFruit: true, id:3},
];

function App() {
    const listItems = products.map(product => 
        <li 
        key= {products.id}
        style= {{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
        >
            {product.title}
        </li>
        );
    return(
        <ul>{listItems}</ul>
    );
}
  export default App;