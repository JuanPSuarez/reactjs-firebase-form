import React, { useState } from 'react';
import Form from '../components/Form';
import formData from '../assets/db.json';
import { writeUserData } from '../components/Firebase';
import SubmitedAlert from '../components/SubmitedAlert';

const App = () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    writeUserData(data.email, data.full_name, data.birth_date, data.country_of_origin, data.terms_and_conditions);
    form.reset();
    setChecked(false)
    setOpen(true)
    }
    
return (
    <div className="App">
        <div className="form-wrapper">
        <Form items={formData.items} checked={checked} setChecked={setChecked} onSubmit={handleFormSubmit}/>
        <SubmitedAlert open={open} setOpen={setOpen} />
        <div>
        </div>
        </div>
    </div>
);
}
export default App;