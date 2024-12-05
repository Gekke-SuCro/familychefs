import React, {useEffect, useState} from 'react';
import {RecipeCard} from "../components/RecipeCard.jsx";
import {RecipeAPI} from "../api/RecipeAPI.js";

export const HomePage = () =>  {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        const fetchData = async function () {
            const data = await RecipeAPI.getAll();
            console.log(data);
            setRecipes(data)
        }

        fetchData().then(r => {});
    }, []);

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