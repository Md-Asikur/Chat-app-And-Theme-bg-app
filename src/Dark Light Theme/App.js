import React,{useEffect,useState} from 'react'
import './App.css'
import ColorItem from "./Color-items";
import SettingsIcon from "@mui/icons-material/Settings";
import { yellow } from '@mui/material/colors';
const App = () => {
  const [state,setState]=useState(false)
  useEffect(() => {
    const currentColor = localStorage.getItem("color");
   setTheme(currentColor);
  }, []);
  const colors = [
    "#2d3436",
    "#4834d4",
    "#be2ed0",
    "#f9ca24",
    "#6ab04c",
    "#30336b",
    "black",
    "red",
    "green",
    "blue",
    "yellow",
    "#0db44b",
  ];
  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color",color)
  }
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color")
    setTheme(currentColor)
    localStorage.setItem("color",currentColor)
  }
  // 
  
  
  return (
    <>
      <div className={`color-switcher ${state && "color-switcher--open"} `}>
        <button onClick={() => setState((prevState) => !prevState)}>
          <SettingsIcon id="icon" />
        </button>
        <h1 className="heading">Select Theme</h1>
        <div className="color-list">
          {colors.map((color, idx) => (
            <ColorItem key={idx} setColor={setColor} color={color} />
          ))}
          
        </div>
      </div>
      <div id="main">
        <h1>Hello World</h1>
        <h2>Hello World</h2>
      </div>
    </>
  );
}
export default App