import React from "react";
import "../index.css";

const Form = ({ items }) => {
  return (
    <form>
      {items.map((item) => {
        return (
          <div key={item.name}>
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
                key={item.name}
              />
            ) : item.type === "select" ? (
              <select
                name={item.name}
                id={item.name}
                required={item.required}
                className="select"
                key={item.name}
              >
                {item.options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            ) : item.type === "checkbox" ? (
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                required={item.required}
                className="input"
                key={item.name}
              />
            ) : (
            <button type="submit" className="button">
                {item.label}
            </button>
            )}
        </div>
        );
    })}
    </form>
);
};

export default Form;
