"use client";

import { useState } from "react";

export interface FormField {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export function useFormLogic() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedType, setSelectedType] = useState("text");

  function addField() {
    const newField: FormField = {
      id: Date.now(),
      type: selectedType,
      label: `${selectedType} field`,
      placeholder: `Enter ${selectedType}`,
      required: false,
    };

    setFields((prev) => [...prev, newField]);
  }

  function updateField(id: number, key: keyof FormField, value: string | boolean) {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    );
  }

  function deleteField(id: number) {
    setFields((prev) => prev.filter((field) => field.id !== id));
  }

  function moveFieldUp(index: number) {
    if (index === 0) return;

    setFields((prev) => {
      const updated = [...prev];
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
      return updated;
    });
  }

  function moveFieldDown(index: number) {
    setFields((prev) => {
      if (index === prev.length - 1) return prev;

      const updated = [...prev];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      return updated;
    });
  }

  return {
    fields,
    selectedType,
    setSelectedType,
    addField,
    updateField,
    deleteField,
    moveFieldUp,
    moveFieldDown,
  };
}