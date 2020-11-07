export interface dataTypes {
  list: WeatherTypes[];
  city: {
    name: string;
    country: string;
  };
}
export interface historyTypes {
  data?: WeatherTypes[];
}

export interface WeatherTypes {
  main: {
    temp: number;
    humidity: number;
  };
  weather: weatherrTypes[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  dt_txt: string;
}

export interface weatherrTypes {
  description?: string;
  icon?: string;
}
