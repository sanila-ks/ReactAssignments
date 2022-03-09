// import React, { useState } from "react";

// function UserDetailsComponent() {
//   var [userDetails, setUserDetails] = useState({
//     name: "Mayank",
//     age: 30
//   });
                                               
//   return (
//     <div>
//       <h1>This is the Parent Component</h1><hr/>
//       <ChildComponent userDetails={userDetails}></ChildComponent>
//     </div>                                         
//   )
// }

// function ChildComponent(props) {
//   return (
//     <div>
//       <h2>This is Child Component</h2><hr/>
//       <SubChildComponent userDetails={props.userDetails}></SubChildComponent>
//     </div>
//   )
// }

// function SubChildComponent(props) {
//   return (
//     <div>
//       <h3>This is Sub Child Component</h3>
//       <h4>User Name: {props.userDetails.name}</h4>
//       <h4>User Age: {props.userDetails.age}</h4>
//     </div>
//   )
// }

// export default UserDetailsComponent;


import { useState,createContext,useContext } from "react";
var userDetailContext = createContext(null);

function UseContextHook() {
  var [userDetails,setuserDetails] = useState({
    name: "Manu",
    age: 30
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent  />
      <button onClick={() => setuserDetails({
            name: "Sam",
            age: 10
             })}>  
        Click me  
      </button> 
    </userDetailContext.Provider>
  )
}

function ChildComponent() {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  )
}

function SubChildComponent() {
  var contextData = useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  )
}

export default UseContextHook;