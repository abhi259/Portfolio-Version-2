import "./ToggleButton.css"

export default function ToggleButton({ darkMode, setDarkMode }) {
  const sunColor = darkMode ? " moon " : "moon invert"
  const moonColor = darkMode ? " sun invert" : "sun "

  return (
    <>
      <input
        type="checkbox"
        id="darkmode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      />
      <label htmlFor="darkmode-toggle">
        <img src="sun-svgrepo-com.svg" alt="sun" className={sunColor} />
        <img src="moon-svgrepo-com.svg" alt="moon" className={moonColor} />
      </label>
    </>
  )
}
