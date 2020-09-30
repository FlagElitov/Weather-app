import React from "react";

const Input = ({ inputText, inputChange, onKeyHandle }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        onChange={inputChange}
        value={inputText}
        id="title"
        placeholder="Уведи текст"
        onKeyPress={onKeyHandle}
      />
      <label htmlFor="title" className="active">
        Уведите город
      </label>
    </div>
  );
};

export default Input;
