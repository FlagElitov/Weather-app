import React from "react";

const Weather = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather1">





      {weather}
      {weather
        ? weather.map((data) => {
            return <li>{data.name}</li>;
          })
        : "null"}
    </div>
  );
};

export default Weather;
