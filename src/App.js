import React, { useState } from "react";
import useDarkMode from "./Utils/Hooks/useDarkMode";

const App = () => {
  const [theme, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    theme === "light" ? true : false
  );

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-white
                    dark:bg-gray-700"
    >
      <button
        onClick={toggleTheme}
        className="p-4 bg-black dark:bg-white dark:text-black text-white"
      >
        Toggle dark mode
      </button>
    </div>
  );
};

export default App;
