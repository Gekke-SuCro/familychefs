import React from "react";
import PropTypes from "prop-types";

import {ClockIcon} from "@heroicons/react/16/solid/index.js";

export const RecipeCard = ({recipeData}) => {
    return (
        <>
            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-full h-full p-8 flex flex-col justify-between">
                {/*> recipe img will come here */}

                <div className="flex flex-col gap-8 mb-4">
                    {/* Card header */}
                    <p className="p-2 font-black text-sm text-center text-gray-700 bg-gray-200 rounded-lg">
                        {recipeData?.username}
                    </p>

                    {/* Card content */}
                    <div>
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{recipeData?.title}</h5>
                        <p className="mb-3 font-normal text-gray-700">{recipeData?.description}</p>
                    </div>
                </div>

                {/* Card footer */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-gray-200 rounded-lg px-5 py-2">
                        <ClockIcon className={"size-5 text-gray-700"} />
                        <span className="font-normal text-gray-700">{recipeData?.prepareTime}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

RecipeCard.propTypes = {
    recipeData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        prepareTime: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
}