import React from "react";

const Input = ({ inputText, inputChange, onKeyHandle }) => {
  return (
    <div className="input-field mt20 input">
      <input
        type="text"
        onChange={inputChange}
        value={inputText}
        id="title"
        placeholder="Город"
        onKeyPress={onKeyHandle}
      />
      <label htmlFor="title" className="active">
        Уведите город
      </label>
    </div>
  );
};

export default Input;
