package nl.familychefs.backend.cookbook.application.dto;


import nl.familychefs.backend.cookbook.domain.Recipe;

public record RecipeResponse(
        long id,
        String title,
        String description
) {

    public static RecipeResponse fromRecipe(Recipe recipe) {
        return new RecipeResponse(
                recipe.getId(),
                recipe.getTitle(),
                recipe.getDescription()
        );
    }
}
