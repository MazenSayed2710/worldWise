"use client";

import { useLocation } from "@/lib/context/LocationContext";
import getCountryCode from "@/lib/contsnts/getCountryCode";

export default function Countries() {
  const { selectedLocation } = useLocation();
  if (!selectedLocation || selectedLocation.length === 0) {
    return (
      <div>👋 Add your first country by clicking on a country on the map</div>
    );
  }

  // Get unique countries to avoid duplicates
  const uniqueCountries = Array.from(
    new Map(selectedLocation.map((trip) => [trip.country, trip])).values(),
  );

  return (
    <div className="bg-gray-700 p-6 h-full flex flex-col gap-4">
      <h2 className="text-white text-2xl font-bold">Countries Visited</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
        {uniqueCountries.map((trip, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-gray-600 to-gray-700 rounded-lg p-6 hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <span className="text-5xl font-bold text-green-400 mb-3">
              {getCountryCode(trip.country)}
            </span>
            <h3 className="text-white font-semibold text-lg text-center">
              🌍 {trip.country}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
