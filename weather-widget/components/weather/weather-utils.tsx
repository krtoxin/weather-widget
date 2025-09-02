import { Sun, Cloud, CloudRain, CloudSnow, Zap } from "lucide-react"

export function getWeatherIcon(condition: string) {
  const lowerCondition = condition.toLowerCase()

  if (lowerCondition.includes("sunny") || lowerCondition.includes("clear")) {
    return Sun
  }
  if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
    return CloudRain
  }
  if (lowerCondition.includes("snow")) {
    return CloudSnow
  }
  if (lowerCondition.includes("thunder")) {
    return Zap
  }
  return Cloud
}
