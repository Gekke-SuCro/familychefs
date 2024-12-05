import React from "react";
import PropTypes from "prop-types";

export const RecipeCard = ({ recipeData } ) => {
    return (
        <>
            <div className="p-2 bg-gray-50 max-w-[256px]">
                <span>{recipeData?.title}</span>
                <p>{recipeData?.description}</p>
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