import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import axios from "axios";
import Weather from "./components/Weather";
import Input from "./components/Input";

const App = () => {
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("London");
  const [inputText, setInputText] = React.useState("");
  const [weather, setWeather] = React.useState([]);
  const [speed, setSpeed] = React.useState();
  const [temp, setTemp] = React.useState();

  React.useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12cb915946025ac4aef542b20c06822d&lang=ru`
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          // setWeather(response.data.weather);
          setName(data.name);
          setWeather(data.weather);
          setSpeed(data.wind.speed);
          setTemp(data.main.temp - 273, 15);
          console.log(data);
        } else {
          alert(
            "Вы не правильно ввели город . Вводите город на английском языке"
          );
        }
      });
  }, [city]);

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
        <Weather name={name} weather={weather} speed={speed} temp={temp} />
      </div>
    </div>
  );
};

export default App;
