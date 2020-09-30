import React from "react";

const Weather = ({ weather, name, temp, speed }) => {
  console.log(weather);

  return (
    <div className="weather1">
      <div className="weather__name center">
        <h3>{name}</h3>
      </div>
      <div className="">
        <h4>Темпаратура: {Math.round(temp)}°C</h4>
      </div>
      <div className="">
        <h4>Скорость ветра: {speed} m/s</h4>
      </div>
      <div className="">
        <h4> Погода: {weather.map((main) => main.description)}</h4>
      </div>
    </div>
  );
};

export default Weather;
