import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

const ToggleDarkModeButton = () => { 
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="bg-sky-100 dark:bg-sky-900 text-textColor dark:text-darkTextColor font-bold py-2 px-4 rounded" onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
}


export default ToggleDarkModeButton;