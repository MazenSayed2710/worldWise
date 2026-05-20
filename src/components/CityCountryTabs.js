"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CityCountryTabs() {
  const pathName = usePathname();
  const activeTap = pathName.split("/")[2];

  return (
    <ul className="bg-gray-600 py-1 flex  font-semibold text-sm rounded cursor-pointer">
      <li>
        <Link
          href="/map/cities"
          className={`px-3 py-1 rounded transition ${activeTap === "cities" ? "bg-gray-500" : "hover:bg-gray-400"}`}
        >
          CITIES
        </Link>
      </li>
      <li>
        <Link
          href="/map/countries"
          className={`px-3 py-1 rounded transition ${activeTap === "countries" ? "bg-gray-500" : "hover:bg-gray-400"}`}
        >
          COUNTRIES
        </Link>
      </li>
    </ul>
  );
}
