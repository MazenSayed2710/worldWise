import CityCountryTabs from "@/components/CityCountryTabs";
import Logo from "@/components/Logo";
import MapClient from "@/components/MapClient";
import User from "@/components/User";
import LocationProvider from "@/lib/context/LocationContext";

const containerStyle = { display: "flex", gap: "1rem", height: "100%" };
const leftPaneStyle = { flex: 1, height: "100%", overflow: "auto" };
const rightPaneStyle = {
  flex: 1,
  height: "100%",
  overflow: "hidden",
  position: "relative",
};
export default function layout({ children }) {
  return (
    <LocationProvider>
      <div style={containerStyle}>
        <div style={leftPaneStyle}>
          <div className="bg-gray-700 p-4 h-full flex flex-col gap-4 items-center">
            <Logo />
            <CityCountryTabs />
            {children}
          </div>
        </div>
        <div style={rightPaneStyle}>
          <User />

          <MapClient />
        </div>
      </div>
    </LocationProvider>
  );
}
// export default function layout({ children }) {
//   return <>{children}</>;
// }
