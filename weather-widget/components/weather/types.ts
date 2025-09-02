export interface WeatherData {
  location: {
    name: string
    country: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    humidity: number
    wind_kph: number
    vis_km: number
    feelslike_c: number
  }
  forecast: {
    forecastday: ForecastDay[]
  }
}

export interface ForecastDay {
  date: string
  day: {
    maxtemp_c: number
    mintemp_c: number
    condition: {
      text: string
      icon: string
    }
  }
}
