"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"

interface SearchFormProps {
  onSearch: (city: string) => void
  loading: boolean
  error: string
}

export function SearchForm({ onSearch, loading, error }: SearchFormProps) {
  const [city, setCity] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
      <div className="p-6">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl transition-colors duration-200 flex items-center justify-center min-w-[60px]"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}
