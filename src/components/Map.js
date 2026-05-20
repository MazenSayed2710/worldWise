"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocation } from "@/lib/context/LocationContext";

function MapClickHandler() {
  const router = useRouter();
  useMapEvent("click", async (e) => {
    const { lat, lng } = e.latlng;
    // Store lat/lng in URL
    router.push(`/map/?lat=${lat}&lng=${lng}`);
  });
  return null;
}

function GeolocationButton() {
  const map = useMap();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    container.innerHTML = `
      <button 
        id="geolocate-btn" 
        title="Get your current location"
        style="
          background-color: white;
          border: 2px solid #999;
          border-radius: 4px;
          padding: 8px 10px;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          transition: background-color 0.2s;
        "
      >
        📍
      </button>
    `;

    const button = container.querySelector("#geolocate-btn");

    button.addEventListener("click", () => {
      setIsLoading(true);
      button.disabled = true;
      button.style.opacity = "0.6";

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Center map on current location
            map.setView([latitude, longitude], 13);
            // Navigate to add trip form
            router.push(`/map/?lat=${latitude}&lng=${longitude}`);
            setIsLoading(false);
            button.disabled = false;
            button.style.opacity = "1";
          },
          (error) => {
            console.error("Geolocation error:", error);
            alert(`Unable to get your location: ${error.message}`);
            setIsLoading(false);
            button.disabled = false;
            button.style.opacity = "1";
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          },
        );
      } else {
        alert("Geolocation is not supported by your browser");
        setIsLoading(false);
        button.disabled = false;
        button.style.opacity = "1";
      }
    });

    const control = L.Control.extend({
      onAdd: function () {
        return container;
      },
    });

    const geoControl = new control({ position: "topleft" });
    geoControl.addTo(map);

    return () => {
      map.removeControl(geoControl);
    };
  }, [map, router]);

  return null;
}

const position = [51.505, -0.09];
export default function Map() {
  const { selectedLocation } = useLocation();

  useEffect(() => {
    // Fix Leaflet's default marker icon path issue in Next.js
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: 40 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapClickHandler />
      <GeolocationButton />

      {selectedLocation.map((trip, index) => (
        <Marker key={index} position={[trip.lat, trip.lng]}>
          <Popup>
            <div>
              <strong>
                {trip.city}, {trip.country}
              </strong>
              <br />
              {trip.date}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
