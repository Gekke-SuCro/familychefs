import React, { useState } from "react";
import {Bars4Icon} from "@heroicons/react/24/solid";

const Sidebar = ({ isOpen, setIsOpen }) => {

    function closeSidebar() {
        setIsOpen(false);
    }

    return (
        <aside
            className={`fixed ${isOpen ? "left-0" : "left-[-100svw]"} bg-white left-0 top-0 h-full w-full p-8 transition-all ease-in-out duration-300`}>
            <div className="justify-end flex">
                <button onClick={closeSidebar}>Close</button>
            </div>
            <div className="text-xl font-bold text-center mt-16">Family Chefs</div>
        </aside>
    );
};

export default Sidebar;
