import React, { useEffect, useState } from "react";
import { Tweather } from "@/type/weatherType";
import { WeatherData } from "@/type/weatherType";
import { TResponceWeatherAPi } from "@/type/weatherType";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loading } from "../ui/loading";

const WeatherPage = () => {
  const [cities, setCities] = useState<Tweather[]>([]);
  const [selectedCity, setSelectedCity] = useState<Tweather | null>(null);
  const [weather, setWeather] = useState<TResponceWeatherAPi | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  /*
  -----------------------------
  */
  useEffect(() => {
    setCities(WeatherData);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      if (!selectedCity) return;
      const lat = selectedCity.lat;
      const lon = selectedCity.lng;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

      try {
        const response = await fetch(url);
        const data: TResponceWeatherAPi = await response.json();
        setWeather(data);
        console.log("Weather data:", data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [selectedCity]);
  /*
  -----------------------------
  */

  console.log(loading);
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-bold">{t("select_city")}</h2>

      <Select
        onValueChange={(value) => {
          const city = cities.find((c) => c.city === value) || null;
          setSelectedCity(city);
        }}
      >
        <SelectTrigger className="w-[240px] hover:border-purple-400 ">
          <SelectValue placeholder="  city" />
        </SelectTrigger>

        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.city} value={city.city}>
              {city.city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {loading && selectedCity && (
        <div className="flex justify-center mt-4">
          <Loading borderColor="#6b21a8" size="60px" duration="0.3s" />
        </div>
      )}
      {selectedCity && weather && !loading && (
        <div className="mt-14 p-4 border rounded-md shadow-sm bg-gray-50">
          <h3 className="font-semibold text-lg  text-gray-700">{selectedCity.city}</h3>
          <p className=" text-gray-700">
            🌡️ {t("temperature")}:{" "}
            <span className="font-medium  text-gray-700">
              {weather.current_weather.temperature}
              {weather.current_weather_units.temperature}
            </span>
          </p>
          <p className=" text-gray-700">
            💨 {t("wind_speed")}:{" "}
            <span className="font-medium  text-gray-700">
              {weather.current_weather.windspeed}
              {weather.current_weather_units.windspeed}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
