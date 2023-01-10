import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import formData from '../assets/db.json';
import { writeUserData } from '../components/Firebase';
import { Alert, Grid } from '@mui/material';

const App = () => {
    const [show, setShow] = useState(false)
useEffect(() => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
    
    return () => {
        form.removeEventListener('submit', handleFormSubmit);
        
    };
}, );

function handleFormSubmit(event) {

    
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    writeUserData(data.email, data.full_name, data.birth_date, data.country_of_origin, data.terms_and_conditions);
    // window.alert('Form submitted successfully!');    
    form.reset();
    setShow(!show) //alert
    setTimeout(() => {
        setShow(show)
    }, 2000);
    

    }


return (
    <div className="App">
        <div className="form-wrapper">
        <Form items={formData.items} />
        {show ? <> 
        <Grid container  alignItems="center" direction="column">
        <Alert severity="success">Formulario enviado.</Alert> 
        </Grid>
        </>:null}
        <div>
        </div>
        </div>
    </div>
);
}

export default App;