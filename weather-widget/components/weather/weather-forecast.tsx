import { getWeatherIcon } from "./weather-utils"
import type { ForecastDay } from "./types"

interface WeatherForecastProps {
  forecast: ForecastDay[]
}

export function WeatherForecast({ forecast }: WeatherForecastProps) {
  return (
    <div className="glass-card">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold text-white/90">5-Day Forecast</h3>
      </div>
      <div className="px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <ForecastCard key={day.date} day={day} isToday={index === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ForecastCard({ day, isToday }: { day: ForecastDay; isToday: boolean }) {
  const date = new Date(day.date)
  const dayName = isToday ? "Today" : date.toLocaleDateString("en-US", { weekday: "short" })
  const WeatherIcon = getWeatherIcon(day.day.condition.text)

  return (
    <div className="forecast-item">
      <div className="font-semibold text-sm mb-3 text-white/90">{dayName}</div>
      <WeatherIcon className="h-10 w-10 neon-text mx-auto mb-3" />
      <div className="text-xs text-white/70 mb-2 font-medium">{day.day.condition.text}</div>
      <div className="flex justify-center gap-2 text-sm">
        <span className="font-bold text-white">{Math.round(day.day.maxtemp_c)}°</span>
        <span className="text-white/60">{Math.round(day.day.mintemp_c)}°</span>
      </div>
    </div>
  )
}
