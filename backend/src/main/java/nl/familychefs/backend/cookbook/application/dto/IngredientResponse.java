package nl.familychefs.backend.cookbook.application.dto;

import nl.familychefs.backend.cookbook.domain.Ingredient;

public record IngredientResponse(
        long id,
        String name
) {

    public static IngredientResponse fromIngredient(Ingredient ingredient) {
        return new IngredientResponse(ingredient.getId(), ingredient.getName());
    }
}
