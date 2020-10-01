import React from "react";

interface WeatherBlock {
  descriptio: string;
  name: string;
  temp: number;
  speed: number | undefined;
  humidity: number | undefined;
  coulds: number | undefined;
  country: string;
  icon: string;
}

const Weather: React.FC<WeatherBlock> = ({
  descriptio,
  icon,
  name,
  temp,
  speed,
  humidity,
  coulds,
  country,
}) => {
  return (
    <div className="weather1">
      <div className=" center">
        <span className="weather__name">
          <h3>{name}</h3>
          {country}
        </span>
      </div>
      <div className="display-flex">
        <div className="weather_content">
          <div>
            <h5>Темпаратура: {Math.round(temp)}°C</h5>
          </div>
          <div>
            <h5>Скорость ветра: {speed} m/s</h5>
          </div>
          <div>
            <h5>Погода: {descriptio}</h5>
          </div>
          <div>
            <h5> Влажность воздуха: {humidity}%</h5>
          </div>
          <div>
            <h5> Хмарность: {coulds}%</h5>
          </div>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
