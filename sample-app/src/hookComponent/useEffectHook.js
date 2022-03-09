import React, { useState, useEffect } from 'react';
import axios from 'axios';  
  
function UseEffectHook() {  
  const [count, setCount] = useState(0);  
  
  // Similar to componentDidMount and componentDidUpdate:  
  
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${count} times`; 
    document.getElementById('output').innerHTML = `<p>Output :  ${count}</p>` ;
  }); 
  
  useEffect(() => {
      //Fetching and consuming data from a server API
    axios.get(`https://jsonplaceholder.typicode.com/users/4`)
      .then(res => {
        console.dir(res.data);
      })
  });
  
  
  return (  
    <div>   
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button> 
      <div id='output'></div> 
    </div>  
  );  
}  
export default UseEffectHook;  