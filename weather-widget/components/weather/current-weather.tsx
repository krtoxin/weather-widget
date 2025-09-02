import { MapPin } from "lucide-react"
import { WeatherDetails } from "./weather-details"
import { getWeatherIcon } from "./weather-utils"
import type { WeatherData } from "./types"

interface CurrentWeatherProps {
  data: WeatherData
}

export function CurrentWeather({ data }: CurrentWeatherProps) {
  const { location, current } = data
  const WeatherIcon = getWeatherIcon(current.condition.text)

  return (
    <div className="glass-card">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-white/90">
          <MapPin className="h-5 w-5 neon-text" />
          {location.name}, {location.country}
        </h3>
      </div>
      <div className="px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <WeatherIcon className="weather-icon-large neon-text" />
              <div>
                <div className="temperature-display">{Math.round(current.temp_c)}°</div>
                <div className="text-white/80 font-medium text-lg">{current.condition.text}</div>
              </div>
            </div>
            <div className="text-sm text-white/60 font-medium">Feels like {Math.round(current.feelslike_c)}°C</div>
          </div>

          <WeatherDetails current={current} />
        </div>
      </div>
    </div>
  )
}
