package nl.familychefs.backend.cookbook.application.dto;


import lombok.Data;
import nl.familychefs.backend.cookbook.domain.Recipe;

import java.util.List;
import java.util.stream.Collectors;

public record RecipeResponse(
        long id,
        String title,
        String description,
        int prepareTime,
        String username,
        List<RecipeIngredientResponse> ingredients
) {

    public static RecipeResponse fromRecipe(Recipe recipe) {
        return new RecipeResponse(
                recipe.getId(),
                recipe.getName(),
                recipe.getDescription(),
                recipe.getPrepareTime(),
                recipe.getCustomer().getUsername(),
                recipe.getIngredients().stream()
                        .map(RecipeIngredientResponse::fromRecipeIngredient)
                        .collect(Collectors.toList())
        );
    }
}
