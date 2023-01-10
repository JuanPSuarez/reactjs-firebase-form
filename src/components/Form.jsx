import React from "react";
import { Button, Checkbox } from "@mui/material";
import "../index.css";
// import { useState } from "react";


const Form = ({ items, checked, setChecked }) => {
  const handleChange = () => {
  // checked === true ? setChecked(false) : setChecked(true)
  setChecked(!checked) ;
  };
  return (
    <form>
      {items.map((item, index) => {
        return (
          <div key={index}>
            {item.type !== "submit" && (
              <label htmlFor={item.name} className="label">
                {item.label}
              </label>
            )}
            {item.type === "text" ||
            item.type === "email" ||
            item.type === "date" ? (
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                required={item.required}
                className="input"
                key={index}
              />
            ) : item.type === "select" ? (
              <select
                name={item.name}
                id={item.name}
                required={item.required}
                className="select"
                key={index}
              >
                {item.options.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            ) : item.type === "checkbox" ? (
              <Checkbox
                type={item.type}
                name={item.name}
                id={item.name}
                required={item.required}
                className="input"
                key={index}
                checked = {checked}
                onChange = {handleChange}
                // inputProps={{'aria-label': 'controled'}}
              />
            ) : (
              <Button variant="contained" type="submit" className="button">
                {item.label}
              </Button>
            )}
          </div>
        );
      })}
    </form>
  )};


export default Form;