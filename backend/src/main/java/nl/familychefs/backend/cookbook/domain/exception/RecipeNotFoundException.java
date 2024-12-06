package nl.familychefs.backend.cookbook.domain.exception;

public class RecipeNotFoundException extends RuntimeException{
    public RecipeNotFoundException() {
        super("Recipe not found.");
    }

    public RecipeNotFoundException(String message) {
        super(message);
    }
}
