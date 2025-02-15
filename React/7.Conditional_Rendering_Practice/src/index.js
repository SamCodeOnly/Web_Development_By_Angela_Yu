import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// Challenge: Without moving the userIsRegistered variable
//1. Show Login as the button text if userIsRegistered is true.
// Show Register or the button text if userIsRegistered is false.
//2. Only Show the confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.