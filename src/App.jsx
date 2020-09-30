import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import axios from "axios";
import Weather from "./components/Weather";
import Input from "./components/Input";

const App = () => {
  const [weather, setWeather] = React.useState();
  const [city, setCity] = React.useState("London");
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12cb915946025ac4aef542b20c06822d`
      )
      .then((response) => {
        if (response.status === 200) {
          setWeather(response.data);
          console.log(response.data);
        }
      });
  }, [city]);

  console.log(weather);

  const inputChange = (event) => {
    setInputText(event.target.value);
  };

  const onKeyHandle = (event) => {
    if (event.key === "Enter") {
      setCity(inputText);
      setInputText("");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Input
          inputText={inputText}
          inputChange={inputChange}
          onKeyHandle={onKeyHandle}
        />
        <Weather weather={weather} />
      </div>
    </div>
  );
};

export default App;
