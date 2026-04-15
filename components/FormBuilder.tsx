"use client";
import React from "react";
import { useFormLogic } from "./FormLogic";

export default function FormBuilder() {
  const {
    fields,
    selectedType,
    setSelectedType,
    addField,
    updateField,
    deleteField,
    moveFieldUp,
    moveFieldDown,
  } = useFormLogic();

  return (
    <div>
      <h2>Form Builder</h2>

      <label>
        Select Input Type:
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
        </select>
      </label>

      <button onClick={addField}>Add Input</button>

      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            {field.label} - Type: {field.type}

            <button onClick={() => moveFieldUp(index)} style={{ marginLeft: "8px" }}>
              Up
            </button>
            <button onClick={() => moveFieldDown(index)} style={{ marginLeft: "5px" }}>
              Down
            </button>
            <button onClick={() => deleteField(field.id)} style={{ marginLeft: "5px" }}>
              Delete
            </button>

            <div style={{ marginTop: "8px" }}>
              <input
                type="text"
                value={field.label}
                onChange={(e) => updateField(field.id, "label", e.target.value)}
                placeholder="Field label"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}