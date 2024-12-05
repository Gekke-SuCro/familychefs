import { apiConfig } from "./configs/apiConfig";

export const RecipeAPI = {
    getAll: async function () {
        const response = await apiConfig.request({
            url: "/recipes",
            method: "GET",
        });

        return response.data;
    },
};