import {React, useState} from "react";
import  ReactDOM  from "react";

function MyButton() {
    const[count, setCount] = useState(1);

    function handleClick(){
        setCount(count + 1);
    }
}
  export default App;