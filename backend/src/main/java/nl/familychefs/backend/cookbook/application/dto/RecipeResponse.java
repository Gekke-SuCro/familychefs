package nl.familychefs.backend.cookbook.application.dto;


import nl.familychefs.backend.cookbook.domain.Recipe;

public record RecipeResponse(
        long id,
        String title,
        String description,
        int prepareTime,
        String username
) {

    public static RecipeResponse fromRecipe(Recipe recipe) {
        return new RecipeResponse(
                recipe.getId(),
                recipe.getTitle(),
                recipe.getDescription(),
                recipe.getPrepareTime(),
                recipe.getCustomer().getUsername()
        );
    }
}
