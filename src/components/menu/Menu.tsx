import React from "react";
import { useTranslation } from "react-i18next";

interface MenuProps {
  selected: string;
  setSelected: (name: string) => void;
}

const Menu: React.FC<MenuProps> = ({ selected, setSelected }) => {
  const { t } = useTranslation();

  const menuItems = [
    { key: "Dashboard", label: t("dashboard") },
    { key: "ToDo", label: t("todo") },
    { key: "Weather", label: t("weather") },
    { key: "Profile", label: t("profile") },
  ];

  return (
    <div className="border border-black shadow-lg p-4 h-full bg-gray-900">
      <ul className="flex flex-col gap-2">
        {menuItems.map(({ key, label }) => (
          <li key={key}>
            <p
              onClick={() => setSelected(key)}
              className={`mt-2 text-left text-white rounded-lg pl-4 py-1 cursor-pointer border border-transparent
                hover:bg-slate-50 hover:border-purple-300 hover:text-black transition-all
                ${selected === key ? "bg-purple-100 border-purple-300 text-black font-bold" : ""}`}
            >
              {label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
