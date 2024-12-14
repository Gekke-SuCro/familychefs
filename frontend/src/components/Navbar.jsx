import React, { useState } from "react";
import {Bars4Icon} from "@heroicons/react/24/solid";

const Navbar = ({ setIsOpen }) => {

    function openSidebar() {
        setIsOpen(true);
    }

    return (
        <nav
            className="bg-white text-gray-800 border-b border-gray-200 px-4 py-4 sticky top-0 left-0 right-0 flex items-center justify-between">
            <button
                onClick={openSidebar}
                className="block focus:outline-none"
            >
                <Bars4Icon className="size-6 text-gray-800"/>
            </button>
        </nav>
    );
};

export default Navbar;
