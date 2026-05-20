"use client";

import { useLocation } from "@/lib/context/LocationContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TripForm({ newTrip }) {
  const router = useRouter();
  const [notes, setNotes] = useState("");
  const { selectedLocation, setSelectedLocation } = useLocation();
  const { city, country } = newTrip;
  const [formCity, setFormCity] = useState(city);
  const date = new Date().toLocaleDateString("en-CA");
  const handleAdd = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newTrip,
      date,
      notes,
    };
    console.log(newEntry);
    const isDuplicate = selectedLocation?.some(
      (item) =>
        item.city === city && item.country === country && item.date === date,
    );
    if (!isDuplicate) {
      setSelectedLocation([...selectedLocation, newEntry]);
    }
    router.push("/map/cities");
  };

  return (
    <form className="flex flex-col bg-gray-600 p-5 rounded-lg gap-3">
      <label htmlFor="city" className="font-semibold text-sm text-gray-100">
        City name
      </label>
      <input
        type="text"
        id="city"
        className="bg-gray-200 p-2 rounded text-black"
        value={formCity}
        onChange={(e) => setFormCity(e.target.value)}
      />
      <label htmlFor="date" className="font-semibold text-sm text-gray-100">
        When did you go to {city}?
      </label>
      <input
        type="date"
        id="date"
        className="bg-gray-200 p-2 rounded text-black"
        defaultValue={date}
      />
      <label htmlFor="notes" className="font-semibold text-sm text-gray-100">
        Notes about your trip to
      </label>
      <textarea
        id="notes"
        name="notes"
        rows="2"
        cols="50"
        className="bg-gray-200 p-2 rounded text-black"
        onChange={(e) => setNotes(e.target.value)}
      />
      <div className="flex gap-3 mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition"
          onClick={handleAdd}
        >
          ADD
        </button>
        <button className="bg-gray-500 hover:bg-gray-400 text-white font-semibold px-4 py-2 rounded transition">
          BACK
        </button>
      </div>
    </form>
  );
}
