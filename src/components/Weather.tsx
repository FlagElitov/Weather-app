import React from "react";

interface WeatherBlock {
  description: string;
  name: string;
  temp: number;
  speed: number | undefined;
  humidity: number | undefined;
  coulds: number | undefined;
  country: string;
}

const Weather: React.FC<WeatherBlock> = ({
  description,
  name,
  temp,
  speed,
  humidity,
  coulds,
  country,
}) => {
  console.log(country);

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
          <h5> Погода: {description}</h5>
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
