import React, { createContext, useState, useContext, useEffect } from "react"
import type { ReactNode } from "react"

interface ThemeContextProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: true,
  setDarkMode: () => {}
})

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider