import React from "react";

const Weather = ({ weather, name, temp, speed, humidity, coulds, country }) => {
  console.log(weather);

  return (
    <div className="weather1">
      <div className=" center">
        <span className="weather__name">
          <h3>{name}</h3>
          {country}
        </span>
      </div>
      <div className="weather_content">
        <div>
          <h5>Темпаратура: {Math.round(temp)}°C</h5>
        </div>
        <div>
          <h5>Скорость ветра: {speed} m/s</h5>
        </div>
        <div>
          <h5> Погода: {weather.map((main) => main.description)}</h5>
        </div>
        <div>
          <h5> Влажность воздуха: {humidity}%</h5>
        </div>
        <div>
          <h5> Хмарность: {coulds}%</h5>
        </div>
      </div>
    </div>
  );
};

export default Weather;
