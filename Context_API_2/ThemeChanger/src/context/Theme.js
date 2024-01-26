import { createContext, useContext } from "react";

// variable aur method ese bhi le skte hai
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider


//with the help of these we need not to import two different useContext and then another context from context folder
export default function useTheme(){
    return useContext(ThemeContext)
}