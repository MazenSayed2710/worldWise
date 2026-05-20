"use client";
import { useEffect, useState } from "react";
import TripForm from "./TripForm";
import getCityName from "@/lib/getCityName";
import { useSearchParams } from "next/navigation";

export default function TripDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [trip, setTrip] = useState(false);
  const searchParams = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    const fetchCityName = async () => {
      setIsLoading(true);
      const { city, country } = await getCityName(lat, lng);
      const newTrip = {
        city,
        country,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      };
      setTrip(newTrip);
      setIsLoading(false);
    };
    fetchCityName();
  }, [lat, lng, setIsLoading]);
  console.log(isLoading);
  return (
    <div className="bg-gray-700 p-4 h-full flex flex-col gap-4 items-center">
      {!isLoading && <TripForm newTrip={trip} />}
    </div>
  );
}
