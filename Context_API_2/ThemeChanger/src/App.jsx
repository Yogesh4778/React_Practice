import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode("light")
  }

  //actual change in theme 

  useEffect(() => {
    //first we have to remove present theme
    document.querySelector('html').classList.remove('light','dark')
    //then we have to add the selected theme in classlist
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  const darkTheme = () => {
    setThemeMode("dark")
  }

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Btn */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card />
                    </div>
                </div>
            </div>
    </ThemeProvider>        
  )
}

export default App
