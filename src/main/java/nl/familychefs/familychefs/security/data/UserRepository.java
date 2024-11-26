package nl.familychefs.familychefs.security.data;

import nl.familychefs.familychefs.security.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
