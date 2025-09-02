import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city")

  if (!city) {
    return NextResponse.json({ error: "City parameter is required" }, { status: 400 })
  }

  try {
    const API_KEY = process.env.WEATHER_API_KEY

    if (!API_KEY) {
      return NextResponse.json({ error: "Weather API key not configured" }, { status: 500 })
    }

    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=5&aqi=no&alerts=no`

    const response = await fetch(API_URL)

    if (!response.ok) {
      return NextResponse.json({ error: "City not found" }, { status: 404 })
    }

    const weatherData = await response.json()
    return NextResponse.json(weatherData)
  } catch (error) {
    console.error("Weather API error:", error)
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 })
  }
}
