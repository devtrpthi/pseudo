const Pet = () => {
    return React.createElement("div",{}, [
        React.createElement("h2",{},"Luna"),
        React.createElement("h3",{},"Shadow"),
        React.createElement("h3",{},"Milo"),
    ])
}


const App = () => {
    return React.createElement(
            "div",
            {},
    [        
        React.createElement("h1",{id: 'my-brand'}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
    ]    
            );
        }
ReactDOM.render(React.createElement(App), document.getElementById('root'));
    