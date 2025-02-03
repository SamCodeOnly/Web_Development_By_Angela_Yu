import React from "react";
import Login from "./Login"
import Hello from "./Hello"

var isLoggedIn = false;

// function renderConditionally () {
//   if(isLoggedIn){
//     return <h1>Hello</h1>
//   }else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />  
//         <input type="password" placeholder="Password"  />
//         <button type="submit">Login</button>
//       </form>
//     )
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */}
      {isLoggedIn ? <Hello /> : <Login /> }
    </div>
  )
}


export default App