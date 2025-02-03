import React from 'react';
import ReactDOM from 'react-dom/client';

function Card(props) {
  return <div className='my-style'>
    <h2>{props.name}</h2>
    <img src={props.img} alt='avatar-img' />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>My Contact</h1>
    <Card
    //Inside our card component we cannot use className property alike Custome Property
      name="Beyonce" 
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0q3LSEcsDK4jkUIvPGdk6fQDs72U9BnNIuw&s" 
      tel="+2186923212" 
      email="beyonce@gmail.com"
    />
    <Card 
      name="Jack Bauer" 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY-nhdhTi75HocDLZwT5QAwrXepWhWISR3A&s" 
        tel="+2186923212" 
        email="JackBauer@gmail.com"
    />
    <Card name="Chuck Norris" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEV8SOFYsCZSHFykMVmJkp9ya9Er-U9SAyQ&s" tel="+645657836767" email="ChuckNoriis@gmail.com" />
  </React.StrictMode>
);
