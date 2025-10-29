import Menu from "./menu/Menu";
import ToDoPage from "./DashboardComponents/Todo";
import WeatherPage from "./DashboardComponents/Weather";
import ProfilePage from "./DashboardComponents/Profile";
import TimeAndWelcome from "./DashboardComponents/Time";
import { useState } from "react";
const Dashboard = () => {
  const savedName = localStorage.getItem("userName");
  const [selected, setSelected] = useState<string>("Dashboard"); 
  const renderComponent = () => {
    switch (selected) {
      case "Dashboard":
        return <TimeAndWelcome savedName={savedName} />;
      case "ToDo":
        return <ToDoPage />;
      case "Weather":
        return <WeatherPage />;
      case "Profile":
        return <ProfilePage />;
      default:
        return null;
    }
  };
  return (
    <div className="fixed flex top-0 left-0 w-full h-full bg-[#F4F4F5] ">
      <div className="w-64 h-ful bg-[#1F1F1F]">
        <Menu selected={selected} setSelected={setSelected} />
      </div>
      <div className="flex-1 p-8 overflow-auto">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
