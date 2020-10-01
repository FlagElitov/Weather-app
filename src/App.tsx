import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import axios from "axios";
import Weather from "./components/Weather";
import Input from "./components/Input";

const App: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("London");
  const [inputText, setInputText] = React.useState<string>("");
  const [descriptio, setDescription] = React.useState<string>("");
  const [speed, setSpeed] = React.useState<number>(0);
  const [temp, setTemp] = React.useState<number>(0);
  const [humidity, setHumidity] = React.useState<number>(0);
  const [coulds, setCoulds] = React.useState<number>(0);
  const [country, setCountry] = React.useState<string>("");
  const [icon, setIcon] = React.useState<string>("");

  React.useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12cb915946025ac4aef542b20c06822d&lang=ru`
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setName(data.name);
          setDescription(data.weather[0].description);
          setSpeed(data.wind.speed);
          setTemp(data.main.temp - 273.15);
          setHumidity(data.main.humidity);
          setCoulds(data.clouds.all);
          setCountry(data.sys.country);
          setIcon(data.weather[0].icon);
        }
      });
  }, [city]);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onKeyHandle = (event: React.KeyboardEvent) => {
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
        <Weather
          icon={icon}
          name={name}
          descriptio={descriptio}
          speed={speed}
          temp={temp}
          humidity={humidity}
          coulds={coulds}
          country={country}
        />
      </div>
    </div>
  );
};

export default App;
