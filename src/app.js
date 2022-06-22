import {React, useState} from "react";
import  ReactDOM  from "react";

function MyButton() {
    const[count, setCount] = useState(1);

    function handleClick(){
        setCount(count + 1);
    }
    return(
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

    function App() {
        return(
            <div>
                <h1>Random counters</h1>
                <MyButton/>
                <MyButton/>
            </div>
        );
    }
  export default App;