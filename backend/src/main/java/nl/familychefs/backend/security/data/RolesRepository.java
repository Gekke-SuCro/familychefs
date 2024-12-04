package nl.familychefs.backend.security.data;

import nl.familychefs.backend.security.domain.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Roles, Long> {

}
