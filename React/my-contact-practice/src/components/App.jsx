import React from "react";
import Card from "./Card";
import contacts from "../Contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return (
  <Card 
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
   />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My contact</h1>
      <Avatar img={contacts[2].imgURL} />
      {contacts.map(createCard)}

      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      /> */}
    </div>
  );     
}

export default App;
