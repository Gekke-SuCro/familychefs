import React from 'react';
import {RecipeCard} from "../components/RecipeCard.jsx";

export const HomePage = () =>  {
    return (
        <>
            <h3>Recipes</h3>
            <section>
                <div className="recipes">
                    <RecipeCard />
                </div>
            </section>
        </>
    )
}