import React, { useState, useEffect, createContext } from 'react'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On init check if the browser is in dark mode
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  // Update the document's class list with the dark mode toggle
  useEffect(() => {
    if (isDarkMode === true) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={"w-[100vw] h-[100vh] text-black dark:text-white bg-sky-200 dark:bg-sky-800"}>
        {children}
      </div>
    </DarkModeContext.Provider>
  )
}