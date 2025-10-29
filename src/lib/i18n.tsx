import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nameLabel: "Name",
      emailLabel: "Email",
      language: "Language",
      dashboard: "Dashboard",
      todo: "To-Do",
      weather: "Weather",
      profile: "Profile",
      select_city: "Select a City",
      city_placeholder: "Choose a city",
      temperature: "Temperature",
      wind_speed: "Wind Speed",
      todo_title: "ToDo List",
      new_task: "New Task",
      edit_task: "Edit Task",
      task_name: "Task Name",
      enter_task_name: "Enter task name...",
      status: "Status",
      cancel: "Cancel",
      add_to_list: "Add to List",
      update_task: "Update Task",
      no_todo: "No Todo Yet!",
      pending: "Pending",
      completed: "Completed",
      done: "Done",
      goodMorning: "Good Morning!",
      goodAfternoon: "Good Afternoon!",
      goodEvening: "Good Evening!",
      goodNight: "Good Night!",
      dear: "Dear",
      guest: "Guest",
      showTime: "Show current time",
      hideTime: "Hide time",
      updateProfile: "Update Profile",
      profileUpdated: "Profile updated successfully!",
    },
  },
  fa: {
    translation: {
      nameLabel: "نام",
      emailLabel: "ایمیل",
      language: "زبان",
      dashboard: "داشبورد",
      todo: "کارها",
      weather: "هواشناسی",
      profile: "پروفایل",
      select_city: "انتخاب شهر",
      city_placeholder: "شهر را انتخاب کنید",
      temperature: "دما",
      wind_speed: "سرعت باد",
      todo_title: "لیست کارها",
      new_task: "کار جدید",
      edit_task: "ویرایش کار",
      task_name: "نام کار",
      enter_task_name: "نام کار را وارد کنید...",
      status: "وضعیت",
      cancel: "انصراف",
      add_to_list: "افزودن به لیست",
      update_task: "به‌روزرسانی کار",
      no_todo: "هیچ کاری اضافه نشده!",
      pending: "در انتظار",
      completed: "تکمیل‌شده",
      done: "انجام‌شده",
      goodMorning: "صبح بخیر!",
      goodAfternoon: "ظهر بخیر!",
      goodEvening: "عصر بخیر!",
      goodNight: "شب بخیر!",
      dear: "عزیز",
      guest: "مهمان",
      showTime: "نمایش ساعت",
      hideTime: "بستن ساعت",
      updateProfile: "به‌روزرسانی پروفایل",
      profileUpdated: "پروفایل با موفقیت به‌روزرسانی شد!",
    },
  },
};

export const languages = [
  { code: "en", native: "English" },
  { code: "fa", native: "فارسی" },
];


i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
