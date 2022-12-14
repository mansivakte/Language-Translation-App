import React from "react";
import Flower from "./Assets/Flower";

function Field({ value, onChange }) {
  return (
    <div className="field">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Language Translation App</h1>
      <label>Enter English</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default Field;
