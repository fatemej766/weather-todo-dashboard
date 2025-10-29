import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { Button } from "../ui/button";

const ProfilePage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [isDark, setIsDark] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const languages = [
    { code: "en", native: "English", flag: "US" },
    { code: "fa", native: "فارسی", flag: "IR" },
  ];
  /*------------------------------*/
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(initialTheme);
    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  /*------------------------------*/

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(e.target.value);
  };
  /*------------------------------*/

  const handleUpdateProfile = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  /*------------------------------*/
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  /*------------------------------*/

  return (
    <div className="  p-6">
      <div className="max-w-md mx-auto space-y-8">
        <div className="fixed bottom-6 left-64 flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <span>{isDark ? "light" : "dark"}</span>
          </button>
          <select
            onChange={handleLanguageChange}
            className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.native}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{t("profile")}</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t("nameLabel")}
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("enterName") || "Enter your name"}
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t("emailLabel")}
              </label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("enterEmail") || "Enter your email"}
                type="email"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <Button variant="default" onClick={handleUpdateProfile}>
            {t("updateProfile") || "Update Profile"}
          </Button>
          {showSuccessMessage && (
            <div className="  text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {t("profileUpdated")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
