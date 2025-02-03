import React from "react";


function Entry(props) {
  return (
    <div className="cards">
      <div className="card">
        <dl>
          <dt>{props.emoji}</dt>
          <dd>{props.name}</dd>
          <dd>{props.meaning}</dd>
        </dl>
      </div>
    </div>
  )
}

export default Entry;