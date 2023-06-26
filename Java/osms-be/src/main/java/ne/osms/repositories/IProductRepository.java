package ne.osms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ne.osms.models.Product;

import java.util.UUID;

@Repository
public interface IProductRepository extends JpaRepository<Product, UUID> {

}
