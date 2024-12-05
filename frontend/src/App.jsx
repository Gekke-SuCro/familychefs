import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/App.css'
import './views/HomePage'
import {HomePage} from "./views/HomePage.jsx";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <p>App Layout</p>
        <Outlet />
    </>
  )
}

export default App
