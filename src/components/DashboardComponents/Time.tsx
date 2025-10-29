import React, { useState, useEffect } from "react";
import { FaClock, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface TimeAndWelcomeProps {
  savedName: string | null;
}

const TimeAndWelcome: React.FC<TimeAndWelcomeProps> = ({ savedName }) => {
  const { t, i18n } = useTranslation();
  const [showTime, setShowTime] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [text, SetText] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString(i18n.language === "fa" ? "fa-IR" : "en-US", {
          hour12: true,
        })
      );
      updateGreeting(now);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const updateGreeting = (date: Date) => {
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      SetText(t("goodMorning"));
    } else if (hours >= 12 && hours < 17) {
      SetText(t("goodAfternoon"));
    } else if (hours >= 17 && hours < 21) {
      SetText(t("goodEvening"));
    } else {
      SetText(t("goodNight"));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center md:justify-start">
        {!showTime ? (
          <div key="clock-button">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowTime(true)}
              className="group rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Show current time"
            >
              <FaClock className="text-xl text-gray-600 group-hover:text-purple-600 transition-colors" />
            </Button>
          </div>
        ) : (
          <div
            key="time-display"
            className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-indigo-50 px-5 py-3 rounded-full shadow-md border border-purple-200"
          >
            <FaClock className="text-purple-600" />
            <span className="text-lg font-semibold text-gray-800">
              {currentTime}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowTime(false)}
              className="ml-2 hover:bg-purple-100  rounded-full"
              aria-label="Hide time"
            >
              <FaTimes className="text-sm text-gray-500 hover:text-red-600" />
            </Button>
          </div>
        )}
      </div>

      <div className="rounded-2xl shadow-xl p-6 border mt-48 h-32 border-gray-100 transition-all hover:shadow-2xl hover:shadow-purple-100">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          {t("dear")} <span className=" font-bold">{savedName},</span>
          <br />
          <span className="text-lg text-gray-600 font-medium">{text}</span>
        </h2>
      </div>
    </div>
  );
};

export default TimeAndWelcome;
