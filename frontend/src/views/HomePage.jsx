import React, {useEffect, useState} from 'react';
import {RecipeCard} from "../components/RecipeCard.jsx";
import {RecipeAPI} from "../api/RecipeAPI.js";

export const HomePage = () =>  {
    const [recipesData, setRecipesData] = useState([]);

    useEffect(() => {
        // const fetchData = async function () {
        //     const data = await RecipeAPI.getAll();
        //     console.log(data);
        //     setRecipesData(data)
        // }
        //
        // fetchData().then(r => {});

        const dummyData = [
            {
                id: 1,
                description: "Heerlijke surinaamse nasy",
                title: "Surinaamse Nasy",
            },
            {
                id: 2,
                description: "Frisse tonijnsalade, alsof het vers uit de zee komt.\"\n",
                title: "Frisse Tonijnsalade",
            },
            {
                id: 3,
                description: "Knapperige panini met gesmolten kaas, tonijnsalade, saus en rijk belegd met olijven, pepers en kappertjes.",
                title: "Pittige Panini Tonijn",
            },
        ];
        setRecipesData(dummyData);
    }, []);

    return (
        <>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center pt-12 pb-6">Recipes</h3>
            <section className="pb-12">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center">
                    {recipesData.map((recipeData) => (<RecipeCard recipeData={recipeData} />))}
                </div>
            </section>
        </>
    )
}