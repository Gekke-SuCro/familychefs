import { useState } from 'react'
import './assets/styles/App.css'
import './views/HomePage'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
    <>
        <div className="h-screen flex flex-col">
            <Navbar setIsOpen={setIsSidebarOpen} />
            <div className="flex flex-1">
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    </>
  )
}

export default App
