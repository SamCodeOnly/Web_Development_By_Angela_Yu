import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js"

console.log(emojipedia)

// function createEntry(emojipedia) {
//   return (
//     <Entry 
//       id={emojipedia.id}
//       key={emojipedia.id}
//       emoji={emojipedia.emoji}
//       name={emojipedia.name}
//       meaning={emojipedia.meaning}
//     />
//   )
// }

function App() {
  return (
    <div>
      <h1 className="heading">
        <span>emojipedia</span>
      </h1>
      <div className="container">
        {/* {emojipedia.map(createEntry)} */}
        {emojipedia.map(emojiEntry => <Entry id={emojiEntry.id} key={emojiEntry.id} emoji={emojiEntry.emoji} name={emojiEntry.name} meaning={emojipedia.meaning}
            />
        )}
      </div>
    </div>
  )
}


export default App;