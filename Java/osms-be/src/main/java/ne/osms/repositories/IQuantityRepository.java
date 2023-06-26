package ne.osms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ne.osms.models.Quantity;

import java.util.List;
import java.util.UUID;

@Repository
public interface IQuantityRepository extends JpaRepository<Quantity, UUID> {
    public Quantity findByProductCode(UUID code);
}
