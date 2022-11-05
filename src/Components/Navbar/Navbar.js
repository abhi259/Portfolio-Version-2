import ToggleButton from "../ToggleButton/ToggleButton"

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="mt-5 text-sm">abhishekpatil.me</h1>
      <div>
        <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}
