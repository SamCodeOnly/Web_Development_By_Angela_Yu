import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props){
  return (
    <div className="card">
        <div className="top">
        <p>{props.key}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
        <div className="bottom">
          <Details detailInfo={props.tel} />
          <Details detailInfo={props.email} />
          </div>
        </div>
      </div>
  )
}

export default Card;