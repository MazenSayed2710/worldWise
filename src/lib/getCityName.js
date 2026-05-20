const getCityName = async (lat, lng) => {
  try {
    if (lat && lng) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      );
      const data = await response.json();
      const city =
        data.address?.suburb ||
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        data.address?.state ||
        "Unknown location";
      console.log(data);
      const countryName = data.address?.country || "Unknown country";
      console.log("Clicked location:", {
        latitude: lat,
        longitude: lng,
        coordinates: [lat, lng],
        city: city,
        country: countryName,
        address: data.address,
      });
      return { city, country: countryName };
    }
  } catch (error) {
    console.error("Error fetching location:", error);
  }
  return;
};
export default getCityName;
