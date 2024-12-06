import { useState } from 'react'
import './assets/styles/App.css'
import './views/HomePage'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
    <>
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    </>
  )
}

export default App
