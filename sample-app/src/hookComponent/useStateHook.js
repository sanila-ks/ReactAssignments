
import { useState } from "react";

const UseStateHook = () =>{
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("Input Value");

    let onChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
    };

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button><br/><br></br>
            <input placeholder="enter something..." onChange={onChange} />
            <p>{inputValue}</p>
        </div>
    );
}

export default UseStateHook;