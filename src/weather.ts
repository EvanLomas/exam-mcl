export type Weather =                           
{
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: String
      description: String
      icon: String
    }
  ],
  base: string,
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  },
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  },
  rain: {
    '1h': number
  },
  clouds: {
    all: number
  },
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  },
  timezone: number
  id: number
  name: string
  cod: number
}

export async function getCityWeather({API_KEY,lat,lon}:{API_KEY:String,lat:Number,lon:Number}) : Promise<Weather> {
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => { return res as Weather})
    .catch(res => {
      // NOTE: before throwing an error, sending the error result to an external error handling service would be ideal
      throw new Error(res)
    })
  return weather
}


type WeatherHistoryItem = {
  dt: Number
  main: {
    temp: Number
    feels_like: Number
    pressure: Number
    humidity: Number
    temp_min: Number
    temp_max: Number
  },
  wind: {
    speed: Number
    deg: Number
  },
  clouds: {
    all: Number
  },
  weather: [
    {
      id: Number
      main: String
      description: String
      icon: String
    }
  ]
  rain: {
    '1h': Number
  }
}

export type WeatherHistory = {
  message: String
  cod: String
  city_id: Number
  calctime: Number
  cnt: Number
  list: Array<WeatherHistoryItem>
}

export async function getCityWeatherHistory({API_KEY,lat,lon}:{API_KEY:String,lat:Number,lon:Number}) : Promise<WeatherHistory> {
  const weatherHistory = await fetch(`https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => { return res as WeatherHistory})
    .catch(res => {
      // NOTE: before throwing an error, sending the error result to an external error handling service would be ideal
      throw new Error(res)
    })
  return weatherHistory
}