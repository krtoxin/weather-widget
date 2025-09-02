"use client"

import { useState } from "react"
import { SearchForm } from "./weather/search-form"
import { CurrentWeather } from "./weather/current-weather"
import { WeatherForecast } from "./weather/weather-forecast"
import { WelcomeMessage } from "./weather/welcome-message"
import type { WeatherData } from "./weather/types"

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchWeather = async (city: string) => {
    if (!city.trim()) return

    setLoading(true)
    setError("")

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "City not found")
      }

      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #9C92AC 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <SearchForm onSearch={searchWeather} loading={loading} error={error} />

          {weatherData && <CurrentWeather data={weatherData} />}
          {weatherData && <WeatherForecast forecast={weatherData.forecast.forecastday} />}
          {!weatherData && !loading && <WelcomeMessage />}
        </div>
      </div>
    </div>
  )
}
