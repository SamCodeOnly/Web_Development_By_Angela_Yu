import React from "react";


// 1. DECLARATIVE PROGRAMMING 
// var isDone = true;

// const strikeThrough = {textDecoration: "line-through"};

// function App() {
//   return (
//     <div className="container">
//       <h1 style={isDone ? strikeThrough : null}>Buy Milk</h1>
//     </div>
//   )
// }





//  2.IMPERATIVE PROGRAMMING BELOW HERE
function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = "none";
}

function App() {
  return (
    <div className="container">
      <p>Buy Milk</p>
        <button onClick={strike}>Change to Strick Through</button>
        <button onClick={unStrike}>Change back</button>
    </div>
  )
}

export default App