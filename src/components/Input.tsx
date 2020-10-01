import React from "react";

interface InputBlock {
  inputText: string;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyHandle: (event: React.KeyboardEvent) => void;
}

const Input: React.FC<InputBlock> = ({
  inputText,
  inputChange,
  onKeyHandle,
}) => {
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
