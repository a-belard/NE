package ne.osms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ne.osms.models.Purchased;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface IPurchasedRepository extends JpaRepository<Purchased, UUID> {
    Optional<Purchased> findByUserAndProductCode(UUID user, UUID productCode);
    List<Purchased> findByUser(UUID customer);
}
