package nl.familychefs.backend.cookbook.data;

import nl.familychefs.backend.cookbook.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

}
