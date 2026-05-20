"use client";

import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState([]);
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
export const useLocation = () => useContext(LocationContext);
