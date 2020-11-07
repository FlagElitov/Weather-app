import React from "react";
import { WeatherTypes } from "./types/types";

interface WeatherBlock {
  name?: string | null;
  country?: string | null;
  data?: WeatherTypes[];
}

const Weather: React.FC<WeatherBlock> = ({ name, data, country }) => {
  return (
    <>
      {data &&
        data.map((datas, index) => (
          <div key={index} className="weather1">
            <div className=" center">
              <span className="weather__name">
                <h3>{name}</h3>
                {country}
              </span>
            </div>

            <div className="display-flex">
              <div className="weather_content">
                <div>
                  <h5>Дата: {datas.dt_txt}</h5>
                </div>
                <div>
                  <h5>Темпаратура: {datas.main.temp}</h5>
                </div>
                <div>
                  <h5>Скорость ветра: {datas.wind.speed} m/s</h5>
                </div>
                <div>
                  <h5>Погода: {datas.weather[0].description}</h5>
                </div>
                <div>
                  <h5> Влажность воздуха: {datas.main.humidity}%</h5>
                </div>
                <div>
                  <h5> Хмарность: {datas.clouds.all}%</h5>
                </div>
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
                  alt={datas.weather[0].description}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

// {
//   data &&
//     data.map((datas) => (
//       <div className="display-flex">
//         <div className="weather_content">
//           <div>
//             <h5>Темпаратура: {datas.main.temp}°C</h5>
//           </div>
//           <div>
//             <h5>Скорость ветра: {datas.wind.speed} m/s</h5>
//           </div>
//           <div>
//             <h5>Погода: {datas.weather.descriptio}</h5>
//           </div>
//           <div>
//             <h5> Влажность воздуха: {datas.main.humidity}%</h5>
//           </div>
//           <div>
//             <h5> Хмарность: {datas.coulds.all}%</h5>
//           </div>
//         </div>
//         <div>
//           <img
//             src={`http://openweathermap.org/img/wn/${datas.weather.icon}@2x.png`}
//             alt={datas.weather.description}
//           />
//         </div>
//       </div>
//     ));
// }

export default Weather;
