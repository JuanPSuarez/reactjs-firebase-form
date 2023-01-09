import './App.css';
import './index.css';
import React, { useEffect } from 'react';
import Form from './components/Form';
import formData from './db.json';
import { writeUserData } from './components/firebase';

function App() {
  useEffect(() => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

  return () => {
    form.removeEventListener('submit', handleFormSubmit);
  };
}, []);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(event.target);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  writeUserData(data.email, data.full_name, data.birth_date, data.country_of_origin, data.terms_and_conditions);
  window.alert('Form submitted successfully!');
  form.reset()
  
}


  return (
    <div className="App">
      <div className="form-wrapper">
        <Form items={formData.items} />
      </div>
    </div>
  );
}

export default App;
