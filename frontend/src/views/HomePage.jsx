import React, {useEffect, useState} from 'react';
import {RecipeCard} from "../components/RecipeCard.jsx";
import {RecipeAPI} from "../api/RecipeAPI.js";

export const HomePage = () =>  {
    const [recipesData, setRecipesData] = useState([]);

    useEffect(() => {
        const fetchData = async function () {
            const data = await RecipeAPI.getAll();
            console.log(data);
            setRecipesData(data)
        }

        fetchData().then(r => {});
    }, []);

    return (
        <>
            <h3>Recipes</h3>
            <section>
                <div className="recipes">
                    {recipesData.map((recipeData) => (
                        <>
                            <RecipeCard recipeData={recipeData} />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}