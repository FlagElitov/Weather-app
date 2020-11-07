import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import axios from "axios";
import Weather from "./components/Weather";
import { Switch, Route } from "react-router-dom";
import History from "./components/History";
import Autocompleted from "./components/InputAuto";
import { historyTypes, WeatherTypes } from "./components/types/types";

const App: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [city, setCity] = React.useState<string | null>("");
  const [country, setCountry] = React.useState<string>("");
  const [inputText, setInputText] = React.useState<string | null>("");

  const [data, setData] = React.useState<WeatherTypes[]>();

  const [history, setHistory] = React.useState<historyTypes>();

  const handleSubmitHistory = () => {};

  // const handleHistory = (object: historyTypes) => {
  //   console.log(history);
  // };

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=1cc2123bc71d389e71ab30d37baeb9da&q=${city}&units=metric&lang=ru&cnt=25`
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setData([data.list[0], data.list[8], data.list[16], data.list[24]]);
          setName(data.city.name);
          setCountry(data.city.country);
          handleSubmitHistory();
          console.log(data);
        }
      });
  }, [city]);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onKeyHandle = (event: React.KeyboardEvent) => {
    setCity(inputText);
    setInputText("");
  };
  return (
    <div className="App">
      <Navbar handleSubmitHistory={handleSubmitHistory} />
      <div className="container">
        <Switch>
          <Route exact path="/history" render={() => <History />} />
          <Route
            path="/"
            render={() => (
              <>
                <Autocompleted
                  setInputText={setInputText}
                  inputChange={inputChange}
                  onKeyHandle={onKeyHandle}
                />
                <Weather data={data} name={name} country={country} />
              </>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
