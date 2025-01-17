"use client";

import React from "react";

interface Props {
  onInputChange: (value: string) => void;
}

const Textbox: React.FC<Props> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numbersOnly = value.replace(/[^0-9]/g, "");
    setInputValue(numbersOnly);
    onInputChange(numbersOnly);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Quantity of products"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Textbox;
