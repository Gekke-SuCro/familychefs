import React from "react";
import PropTypes from "prop-types";

export const RecipeCard = ({ recipeData } ) => {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-full h-full">
                {/*> recipe img will come here */}

                <div className="p-5">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{recipeData?.title}</h5>
                    <p className="mb-3 font-normal text-gray-700">{recipeData?.description}</p>
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
    }).isRequired
}