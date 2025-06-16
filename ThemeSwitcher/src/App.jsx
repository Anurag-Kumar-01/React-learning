
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
 const [themeMode,setthemeMode] = useState('light')

 const lightTheme=()=>{
  setthemeMode('light')
 }
 const darkTheme=()=>{
  setthemeMode('dark')
 }
 //actual change in  theme 
 useEffect(()=>{
  const ele = document.querySelector('html')
  ele.classList.remove("light","dark");
  ele.classList.add(themeMode)

 },[themeMode])

  return (
  <>
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*themebtn */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                                              {/*cardBtn */}
                                              <Card/>
                       
                    </div>
                </div>
            </div>
            </ThemeProvider>

  </>
  )
}

export default App
