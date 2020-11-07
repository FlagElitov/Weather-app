import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface InputBlock {
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyHandle: (event: React.KeyboardEvent) => void;
  setInputText: (value: string | null) => void;
}
const options = [
  "Введите запрос",
  "Киев",
  "Сумы",
  "Черкассы",
  "Одесса",
  "Кривой Рог",
  "Житомир",
  "Черновцы",
  "Стамбул",
  "Токио",
  "Пекин",
];

const Autocompleted: React.FC<InputBlock> = ({ setInputText, onKeyHandle }) => {
  const [value] = React.useState<string | null>(options[0]);

  const inputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: string | null
  ) => {
    event.preventDefault();
    setInputText(newValue);
  };

  return (
    <div>
      <Autocomplete
        value={value}
        onKeyPress={onKeyHandle}
        onChange={(event: any, newValue: string | null) => {
          inputChange(event, newValue);
        }}
        id="controllable-states-demo"
        options={options}
        noOptionsText="Введите правильний запрос!"
        style={{ width: 800, margin: "auto", marginTop: 20 }}
        renderInput={(params) => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
    </div>
  );
};

export default Autocompleted;
