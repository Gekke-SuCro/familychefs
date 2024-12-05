package nl.familychefs.backend.cookbook.presentation.controller;

import nl.familychefs.backend.cookbook.application.dto.RecipeResponse;
import nl.familychefs.backend.cookbook.application.dto.RecipeService;
import nl.familychefs.backend.cookbook.data.RecipeRepository;
import nl.familychefs.backend.cookbook.domain.Recipe;
import nl.familychefs.backend.cookbook.domain.exception.RecipeNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<List<RecipeResponse>> getAllRecipes() {
        try {
            return ResponseEntity.ok(recipeService.getAllRecipes());
        } catch (RecipeNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
