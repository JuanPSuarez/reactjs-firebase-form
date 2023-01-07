import './App.css';
import './index.css';
import React, { useEffect } from 'react';
import Form from './components/Form';
import formData from './db.json';
import firebase from './components/firebase';



function App() {
  useEffect(() => {
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  firebase.database().ref('forms').push(data);
});
}, []);


  return (
    <div className="App">
      <div className="form-wrapper">
        <Form items={formData.items} />
      </div>
    </div>
  );
}

export default App;