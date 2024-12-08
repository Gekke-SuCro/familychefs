import React from "react";
import PropTypes from "prop-types";
import { ClockIcon, ListBulletIcon, BoltIcon, FireIcon as SolidFireIcon } from "@heroicons/react/16/solid";

export const RecipeCard = ({ recipeData }) => {
    const trueBolts = 5 - recipeData?.difficulty
    let allBolts = [];

    for (let i = 0; i < trueBolts; i++) {
        allBolts.push("text-gray-900");
    }

    if (trueBolts < 5) {
        for (let i = 0; i < 5 - trueBolts; i++) {
            allBolts.push("text-gray-200");
        }
    }

    return (
        <div
            className="w-[90%] max-w-[420px] sm:w-72 bg-white border border-gray-200 rounded-lg shadow flex flex-col overflow-hidden">
            {/* Image section */}
            <div className="h-44 w-full overflow-hidden bg-gray-200">
                <img
                    className="w-full h-full object-cover"
                    src={recipeData?.imgUrl}
                    alt="recipe thumbnail"
                />
            </div>

            {/* Content section */}
            <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        {recipeData?.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 text-sm">
                        {recipeData?.description}
                    </p>
                </div>

                {/* Footer section */}
                <div className="flex gap-2 my-2">
                    {allBolts.map((color) => (
                        <BoltIcon className={`h-5 w-5 ${color ? color : ""}`} />
                    ))}
                </div>

                <div className="flex gap-2 flex-wrap my-2">
                    <div className="flex gap-2 items-center mt-auto bg-gray-200 text-sm px-4 py-2 rounded-lg">
                    <ClockIcon className="h-5 w-5 text-gray-700"/>
                        <span>{recipeData?.prepareTime} mins</span>
                    </div>
                    <div className="flex gap-2 items-center mt-auto bg-gray-200 text-sm px-4 py-2 rounded-lg">
                        <ListBulletIcon className="h-5 w-5 text-gray-700"/>
                        <span>{recipeData?.prepareTime} ingredients</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    recipeData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        prepareTime: PropTypes.number.isRequired,
        difficulty: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
    }).isRequired,
};
