import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/App.css'
import './views/HomePage'
import {HomePage} from "./views/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main>
            <HomePage />
        </main>
    </>
  )
}

export default App
