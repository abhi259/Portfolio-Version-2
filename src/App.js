import { useState, useEffect } from "react"
import "./App.css"
import Body from "./Components/Body.js/Body"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const customStyle = darkMode
    ? " dark:text-[#bcbcbc] dark:bg-gradient-to-b dark:from-[#001115] dark:via-[#011E26] dark:to-[#001115] "
    : "bg-gradient-to-b from-[#6b6b6b] via-[#dddddd] to-[#6b6b6b] text-[#333333] "

  return (
    <div className={darkMode ? "dark" : ""}>
      {loading && (
        <div className="flex justify-center items-center h-screen dark:text-[#bcbcbc] dark:bg-gradient-to-b dark:from-[#001115] dark:via-[#011E26] dark:to-[#001115] ">
          <LoadingScreen />
        </div>
      )}
      {!loading && (
        <div className={customStyle}>
          <div className=" px-[8%] pt-7 h-auto transition duration-[1500ms]">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Body />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
