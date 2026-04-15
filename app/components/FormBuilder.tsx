"use client";
import React, { useState } from 'react';
interface InputObject {
  id: number;
  type: string;
  label: string;
}

export default function FormBuilder() {
  const [inputs, setInputs] = useState<InputObject[]>([]);
  const [selectedType, setSelectedType] = useState('text');

  function addInput() {
    const newInput: InputObject = {
      id: inputs.length + 1,
      type: selectedType,
      label: `Input ${inputs.length + 1}`,
    };
    setInputs([...inputs, newInput]);
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Form Builder</h2>
      
      <label className="form-label">
        Select Input Type:
        <select
          className="form-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
        </select>
      </label>
      
      <button className="form-button" onClick={addInput}>Add Input</button>

      <ul className="form-list">
        {inputs.map((input) => (
          <li key={input.id}>
            {input.label} - Type: {input.type}
          </li>
        ))}
      </ul>
    </div>
  );
}