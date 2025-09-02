import { Droplets, Wind, Eye, Thermometer } from "lucide-react"

interface WeatherDetailsProps {
  current: {
    humidity: number
    wind_kph: number
    vis_km: number
    feelslike_c: number
  }
}

export function WeatherDetails({ current }: WeatherDetailsProps) {
  const weatherDetails = [
    {
      icon: Droplets,
      label: "Humidity",
      value: `${current.humidity}%`,
    },
    {
      icon: Wind,
      label: "Wind",
      value: `${current.wind_kph} km/h`,
    },
    {
      icon: Eye,
      label: "Visibility",
      value: `${current.vis_km} km`,
    },
    {
      icon: Thermometer,
      label: "Feels like",
      value: `${Math.round(current.feelslike_c)}°C`,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {weatherDetails.map((detail) => {
        const IconComponent = detail.icon
        return (
          <div key={detail.label} className="detail-item">
            <div className="flex items-center gap-3">
              <IconComponent className="h-5 w-5 neon-text" />
              <div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wide">{detail.label}</div>
                <div className="font-bold text-white text-sm">{detail.value}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
