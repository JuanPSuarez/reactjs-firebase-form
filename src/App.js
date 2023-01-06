import React from 'react';
import './App.css';
import data from './db.json'

function App() {
  const JSONdata = data
  console.log()
    return (
      <form>
        <div> 
          {/* Nombre */}
          <label>{JSONdata.items[0].label}</label>
          <input name={JSONdata.items[0].name}type={JSONdata.items[0].type} required={JSONdata.items[0].required} />
        </div>
        <div>
          {/* Correo */}
          <label>{JSONdata.items[1].label}</label>
          <input name={JSONdata.items[1].name}type={JSONdata.items[1].type} required={JSONdata.items[1].required} />
        </div>
        <div>
          {/* Fecha */}
          <label>{JSONdata.items[2].label}</label>
          <input name={JSONdata.items[2].name}type={JSONdata.items[2].type} required={JSONdata.items[2].required} />
        </div>
        <div>
          {/* Pais Origen */}
          <label htmlFor="country">{JSONdata.items[3].label}</label>
          <select name={JSONdata.items[3].name} id="country" required={JSONdata.items[3].required}>
            <option value={JSONdata.items[3].options[0].value}>{JSONdata.items[3].options[0].label}</option>
            <option value={JSONdata.items[3].options[1].value}>{JSONdata.items[3].options[1].label}</option>
            <option value={JSONdata.items[3].options[2].value}>{JSONdata.items[3].options[2].label}</option>
            <option value={JSONdata.items[3].options[3].value}>{JSONdata.items[3].options[3].label}</option>
            <option value={JSONdata.items[3].options[4].value}>{JSONdata.items[3].options[4].label}</option>
            <option value={JSONdata.items[3].options[5].value}>{JSONdata.items[3].options[5].label}</option>
            <option value={JSONdata.items[3].options[6].value}>{JSONdata.items[3].options[6].label}</option>
            <option value={JSONdata.items[3].options[7].value}>{JSONdata.items[3].options[7].label}</option>
          </select> 
        </div>
        <div> 
          {/* Terminos y condiciones */}
          <label>{JSONdata.items[4].label}</label>
          <input name={JSONdata.items[4].name}type={JSONdata.items[4].type} required={JSONdata.items[4].required} />
        </div>
        <div>
          <button type={JSONdata.items[5].type}>{JSONdata.items[5].label}</button>
        </div>
      </form>
    );
}

export default App;