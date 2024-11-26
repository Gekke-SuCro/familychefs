package nl.familychefs.familychefs.security.data;

import nl.familychefs.familychefs.security.domain.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Roles, Long> {

}