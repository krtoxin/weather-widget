export function WelcomeMessage() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
      <div className="text-center py-12 px-6">
        <div className="text-6xl mb-6">🌤️</div>
        <h3 className="text-2xl font-bold mb-4 text-white">Weather Dashboard</h3>
        <p className="text-white/80 mb-6 text-lg">
          Enter a city name above to get current weather conditions and a 5-day forecast
        </p>
        <p className="text-sm text-white/60">Try searching for cities like "London", "New York", or "Tokyo"</p>
      </div>
    </div>
  )
}
