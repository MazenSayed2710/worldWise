const getCountryCode = (countryName) => {
  const countryCodes = {
    "United States": "US",
    "United Kingdom": "GB",
    "United Arab Emirates": "AE",
    Germany: "DE",
    France: "FR",
    Italy: "IT",
    Spain: "ES",
    Canada: "CA",
    Australia: "AU",
    Japan: "JP",
    China: "CN",
    India: "IN",
    Brazil: "BR",
    Mexico: "MX",
    Netherlands: "NL",
    Belgium: "BE",
    Switzerland: "CH",
    Sweden: "SE",
    Norway: "NO",
    Denmark: "DK",
    Poland: "PL",
    Greece: "GR",
    Portugal: "PT",
    Ireland: "IE",
    "New Zealand": "NZ",
    "South Africa": "ZA",
    Thailand: "TH",
    Vietnam: "VN",
    "South Korea": "KR",
    Singapore: "SG",
    Malaysia: "MY",
    Philippines: "PH",
    Indonesia: "ID",
  };

  return countryCodes[countryName] || countryName.slice(0, 2).toUpperCase();
};

export default getCountryCode;
