import { useContext,createContext } from "react";

export const ThemeContext = createContext(
    {themeMode : "Light",
            darkTheme : ()=>{},
            lightTheme: ()=>{}, 
    }
)

export const ThemeProvider = ThemeContext.Provider

// Custom hook
export default function useTheme(){
        return useContext(ThemeContext)
}
