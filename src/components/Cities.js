"use client";
import { useState } from "react";
import { useLocation } from "@/lib/context/LocationContext";
import getCountryCode from "@/lib/contsnts/getCountryCode";

export default function Cities() {
  const { selectedLocation } = useLocation();
  const [selectedCity, setSelectedCity] = useState(null);

  if (!selectedLocation || selectedLocation.length === 0) {
    return <div>👋 Add your first city by clicking on a city on the map</div>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleCityClick = (trip) => {
    setSelectedCity(trip);
  };

  const handleBack = () => {
    setSelectedCity(null);
  };

  const getWikipediaUrl = (cityName) => {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(cityName)}`;
  };

  // Display detailed view when a city is selected
  if (selectedCity) {
    return (
      <div className="bg-gray-700 p-6 h-full flex flex-col gap-4 justify-between">
        <div className="flex-1 flex flex-col gap-6 justify-center items-center">
          <button
            onClick={handleBack}
            className="self-start px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            ← Back
          </button>

          <div className="text-center">
            <h2 className="text-white text-4xl font-bold mb-2">
              📍 {selectedCity.city}
            </h2>
            <p className="text-gray-300 text-xl mb-4">{selectedCity.country}</p>

            <p className="text-gray-400 ">Your notes: {selectedCity.notes}</p>
            <p className="text-gray-400 text-lg mb-6">
              Visited on: {formatDate(selectedCity.date)}
            </p>

            <a
              href={getWikipediaUrl(selectedCity.city)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              📖 Learn more on Wikipedia
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-700 p-6 h-full flex flex-col gap-4">
      <h2 className="text-white text-2xl font-bold">Your Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto cursor-pointer">
        {selectedLocation.map((trip, index) => (
          <div
            key={index}
            onClick={() => handleCityClick(trip)}
            className="bg-linear-to-br from-gray-600 to-gray-700 rounded-lg p-4 hover:shadow-lg transition transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-blue-400">
                {getCountryCode(trip.country)}
              </span>
              <span className="text-gray-300 text-sm">
                {formatDate(trip.date)}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">
              📍 {trip.city}
            </h3>
            <p className="text-gray-300 text-sm">{trip.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
