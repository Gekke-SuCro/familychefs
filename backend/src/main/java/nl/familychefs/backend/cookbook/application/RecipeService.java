package nl.familychefs.backend.cookbook.application;

import lombok.Data;
import nl.familychefs.backend.cookbook.application.dto.RecipeResponse;
import nl.familychefs.backend.cookbook.data.RecipeRepository;
import nl.familychefs.backend.cookbook.domain.Recipe;
import nl.familychefs.backend.cookbook.domain.exception.RecipeNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Data
public class RecipeService {

    private final RecipeRepository recipeRepository;


    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<RecipeResponse> getAllRecipes() {
//        Get all recipes from the repository. If not found, throw exception.
        List<Recipe> recipes = recipeRepository.findAll();
        if (recipes.isEmpty()) {
            throw new RecipeNotFoundException();
        }

//        Convert all recipes to recipe response dto's and return this new list.
        List<RecipeResponse> recipeResponses = new ArrayList<>();
        for (Recipe recipe : recipes) {
            recipeResponses.add(RecipeResponse.fromRecipe(recipe));
        }

        return recipeResponses;
    }
}
