export interface Tweather {
  city: string;
  lat: string;
  lng: string;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
}
export type TResponceWeatherAPi = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    [key: string]: number | string;
  };
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    [key: string]: string;
  };
};

export const WeatherData: Tweather[] = [
  {
    city: "Tehran",
    lat: "35.7000",
    lng: "51.4167",
    country: "Iran",
    iso2: "IR",
    admin_name: "Tehrān",
    capital: "primary",
    population: "13633000",
    population_proper: "9033003",
  },
  {
    city: "Mashhad",
    lat: "36.3069",
    lng: "59.6042",
    country: "Iran",
    iso2: "IR",
    admin_name: "Khorāsān-e Raẕavī",
    capital: "admin",
    population: "3001184",
    population_proper: "3001184",
  },
  {
    city: "Eşfahān",
    lat: "32.6447",
    lng: "51.6675",
    country: "Iran",
    iso2: "IR",
    admin_name: "Eşfahān",
    capital: "admin",
    population: "1756126",
    population_proper: "1756126",
  },
  {
    city: "Karaj",
    lat: "35.8327",
    lng: "50.9915",
    country: "Iran",
    iso2: "IR",
    admin_name: "Alborz",
    capital: "admin",
    population: "1592492",
    population_proper: "1592492",
  },
  {
    city: "Tabrīz",
    lat: "38.0833",
    lng: "46.2833",
    country: "Iran",
    iso2: "IR",
    admin_name: "Āz̄arbāyjān-e Sharqī",
    capital: "admin",
    population: "1558693",
    population_proper: "1558693",
  },
  {
    city: "Shīrāz",
    lat: "29.6100",
    lng: "52.5425",
    country: "Iran",
    iso2: "IR",
    admin_name: "Fārs",
    capital: "admin",
    population: "1460665",
    population_proper: "1460665",
  },
  {
    city: "Qom",
    lat: "34.6461",
    lng: "50.8789",
    country: "Iran",
    iso2: "IR",
    admin_name: "Qom",
    capital: "admin",
    population: "1201158",
    population_proper: "1201158",
  },
  {
    city: "Ahvāz",
    lat: "31.3203",
    lng: "48.6692",
    country: "Iran",
    iso2: "IR",
    admin_name: "Khūzestān",
    capital: "admin",
    population: "1184788",
    population_proper: "1184788",
  },
  {
    city: "Kermānshāh",
    lat: "34.3167",
    lng: "47.0686",
    country: "Iran",
    iso2: "IR",
    admin_name: "Kermānshāh",
    capital: "admin",
    population: "851405",
    population_proper: "851405",
  },
  {
    city: "Orūmīyeh",
    lat: "37.5486",
    lng: "45.0675",
    country: "Iran",
    iso2: "IR",
    admin_name: "Āz̄arbāyjān-e Gharbī",
    capital: "admin",
    population: "736224",
    population_proper: "736224",
  },
  {
    city: "Rasht",
    lat: "37.2833",
    lng: "49.6000",
    country: "Iran",
    iso2: "IR",
    admin_name: "Gīlān",
    capital: "admin",
    population: "639951",
    population_proper: "639951",
  },
  {
    city: "Kermān",
    lat: "30.2833",
    lng: "57.0667",
    country: "Iran",
    iso2: "IR",
    admin_name: "Kermān",
    capital: "admin",
    population: "573449",
    population_proper: "573449",
  },
  {
    city: "Zāhedān",
    lat: "29.4833",
    lng: "60.8667",
    country: "Iran",
    iso2: "IR",
    admin_name: "Sīstān va Balūchestān",
    capital: "admin",
    population: "560725",
    population_proper: "560725",
  },
  {
    city: "Eslāmshahr",
    lat: "35.5333",
    lng: "51.2000",
    country: "Iran",
    iso2: "IR",
    admin_name: "Tehrān",
    capital: "minor",
    population: "548620",
    population_proper: "548620",
  },
  {
    city: "Hamadān",
    lat: "34.8065",
    lng: "48.5162",
    country: "Iran",
    iso2: "IR",
    admin_name: "Hamadān",
    capital: "admin",
    population: "528256",
    population_proper: "330",
  },
  {
    city: "Yazd",
    lat: "31.8972",
    lng: "54.3678",
    country: "Iran",
    iso2: "IR",
    admin_name: "Yazd",
    capital: "admin",
    population: "486152",
    population_proper: "486152",
  },
  {
    city: "Arāk",
    lat: "34.0800",
    lng: "49.7000",
    country: "Iran",
    iso2: "IR",
    admin_name: "Markazī",
    capital: "admin",
    population: "484212",
    population_proper: "484212",
  },
  {
    city: "Ardabīl",
    lat: "38.2500",
    lng: "48.3000",
    country: "Iran",
    iso2: "IR",
    admin_name: "Ardabīl",
    capital: "admin",
    population: "482632",
    population_proper: "482632",
  },
  {
    city: "Bandar ‘Abbās",
    lat: "27.2000",
    lng: "56.2500",
    country: "Iran",
    iso2: "IR",
    admin_name: "Hormozgān",
    capital: "admin",
    population: "435751",
    population_proper: "435751",
  },
  {
    city: "Zanjān",
    lat: "36.6667",
    lng: "48.4833",
    country: "Iran",
    iso2: "IR",
    admin_name: "Zanjān",
    capital: "admin",
    population: "433475",
    population_proper: "433475",
  },
  {
    city: "Kāshān",
    lat: "33.9833",
    lng: "51.4333",
    country: "Iran",
    iso2: "IR",
    admin_name: "Eşfahān",
    capital: "minor",
    population: "432557",
    population_proper: "432557",
  },
  {
    city: "Qazvīn",
    lat: "36.2688",
    lng: "50.0041",
    country: "Iran",
    iso2: "IR",
    admin_name: "Qazvīn",
    capital: "admin",
    population: "381598",
    population_proper: "381598",
  },

  {
    city: "Mahābād",
    lat: "36.7650",
    lng: "45.7210",
    country: "Iran",
    iso2: "IR",
    admin_name: "Āz̄arbāyjān-e Gharbī",
    capital: "",
    population: "168393",
    population_proper: "168393",
  },

  {
    city: "Bandar-e Māhshahr",
    lat: "30.5589",
    lng: "49.1981",
    country: "Iran",
    iso2: "IR",
    admin_name: "Khūzestān",
    capital: "minor",
    population: "162797",
    population_proper: "162797",
  },
  {
    city: "Rafsanjān",
    lat: "30.4000",
    lng: "56.0000",
    country: "Iran",
    iso2: "IR",
    admin_name: "Kermān",
    capital: "minor",
    population: "161909",
    population_proper: "161909",
  },
  {
    city: "Shahr-e Kord",
    lat: "32.3256",
    lng: "50.8644",
    country: "Iran",
    iso2: "IR",
    admin_name: "Chahār Maḩāl va Bakhtīārī",
    capital: "admin",
    population: "159775",
    population_proper: "159775",
  },
  {
    city: "Gonbad-e Kāvūs",
    lat: "37.2500",
    lng: "55.1672",
    country: "Iran",
    iso2: "IR",
    admin_name: "Golestān",
    capital: "minor",
    population: "151910",
    population_proper: "151910",
  },
];
