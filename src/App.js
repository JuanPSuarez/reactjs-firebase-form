import './App.css';
import './index.css';
import React from 'react';
import Form from './components/Form';
import formData from './db.json';

function App() {
  return (
    <div className="App">
      <div className="form-wrapper">
        <Form items={formData.items} />
      </div>
    </div>
  );
}

export default App;
