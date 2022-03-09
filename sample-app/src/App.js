import './App.css';

//import React, { useState } from "react";

//import UserDetailsComponent from './hookComponent/useContextHook';
//import UseContextHook from './hookComponent/useContextHook';
// import UseEffectHook from './hookComponent/useEffectHook';
//import UseStateHook from './hookComponent/useStateHook';
//import UseReducerHook from './hookComponent/useReducerHook';
//import UseCallbackHook from './hookComponent/useCallbackHook';
//import UseMemoHook from './hookComponent/useMemoHook';
import UseRefHook from './hookComponent/useRefHook';

// import { BrowserRouter } from 'react-router-dom';
// import RouterContainer from './routerComponent/routerContainer';

// import ClassComponent from './components/classContainer';
// import FunctionComponent from './components/functionContainer';


function App() {
  //   let [userDetails, setUserDetails] = useState({
  //   name: "Mayank",
  //   age: 30
  // });
  return (
    
    //hook
    <div className='App'>
      <UseRefHook />
    </div> 
    //<UseStateHook/>
    //<UseEffectHook/>
    //<UserDetailsComponent userDetails={userDetails}/>
    //<UserDetailsComponent/>
    //<UseContextHook/>
    // <UseReducerHook />
    //<UseCallbackHook />
    //<UseMemoHook />

    //Router
    // <BrowserRouter>
    //   <div >
    //     <RouterContainer />
    //   </div>
    // </BrowserRouter>
    
    //functional and class based componets
    // <div className="App">
    //   <FunctionComponent name='Sam'/>
    //   <FunctionComponent name='Isha'/>
    //   <ClassComponent name='Amal'/>
    // </div>
  );
}

export default App;
