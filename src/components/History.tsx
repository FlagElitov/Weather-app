import React from "react";
import { WeatherTypes } from "./types/types";

// type HistoryProps = {
//   name?: string | null;
//   country?: string | null;
//   data?: WeatherTypes[];
// };
// interface WeatherBlock {
//   data?: WeatherTypes[];
// }

const History: React.FC= (props) => {
  // const [data, setData] = React.useState<WeatherTypes[]>();
  // React.useEffect(() => {
  //   setData(props.data);
  // }, []);

  // const [historyData, setHistoryData] = React.useState<WeatherTypes[]>();

  // React.useEffect(() => {
  //   const saved = JSON.parse(
  //     localStorage.getItem("history") || "[]"
  //   ) as WeatherTypes[];
  //   setHistoryData(saved);
  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem("history", JSON.stringify(data));
  // }, [data]);

  return (
    <div>
      Здесь должно было быть история запросов
      {/* {historyData &&
        historyData.map((data, index) => (
          <div key={index} className="weather1">
            <div className="display-flex">
              <div className="weather_content">
                <div>
                  <h5>Дата: {data?.dt_txt}</h5>
                </div>
                <div>
                  <h5>Темпаратура: {data?.main.temp}</h5>
                </div>
                <div>
                  <h5>Скорость ветра: {data?.wind.speed} m/s</h5>
                </div>
                <div>
                  <h5>Погода: {data?.weather[0].description}</h5>
                </div>
                <div>
                  <h5> Влажность воздуха: {data?.main.humidity}%</h5>
                </div>
                <div>
                  <h5> Хмарность: {data?.clouds.all}%</h5>
                </div>
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                  alt={data?.weather[0].description}
                />
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default History;
