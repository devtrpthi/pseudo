import {React, useState} from "react";
import  ReactDOM  from "react";

function MyButton({count, onClick}) {
    
    return(
        <button onClick={onClick}>
            Clicked {count} times  
        </button>
    );
}


function App() {
        const[count, setCount] = useState(1);

    function handleClick(){
        setCount(count + 1);
    }
        return(
            <div>
                <h1>Same update counters</h1>
                <MyButton count={count} onClick={handleClick}/>
                <MyButton count={count} onClick={handleClick}/>
            </div>
        );
    }
  export default App;