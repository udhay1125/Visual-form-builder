import React from "react";
import Navbar from "../components/Navbar";
import FormBuilder from "../components/FormBuilder";

export default function BuilderPage() {
  return (
    <div>
      <Navbar />
      <h1>Form Builder</h1>
      <FormBuilder />
    </div>
  );
}