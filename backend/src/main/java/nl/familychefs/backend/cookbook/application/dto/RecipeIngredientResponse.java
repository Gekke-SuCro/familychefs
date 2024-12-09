package nl.familychefs.backend.cookbook.application.dto;

import nl.familychefs.backend.cookbook.domain.RecipeIngredient;

public record RecipeIngredientResponse(
        IngredientResponse ingredientResponse,
        String measureUnit,
        double quantity

) {

    public static RecipeIngredientResponse fromRecipeIngredient(RecipeIngredient recipeIngredient) {
        return new RecipeIngredientResponse(
                IngredientResponse.fromIngredient(recipeIngredient.getIngredient()),
                recipeIngredient.getMeasureUnit().name(),
                recipeIngredient.getQuantity()
        );
    }
}
