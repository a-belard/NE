package ne.osms.services;

import ne.osms.dtos.CreateOrUpdateProductDTO;
import org.springframework.web.multipart.MultipartFile;
import ne.osms.models.Product;

import java.util.List;
import java.util.UUID;

public interface IProductService {
    Product create(CreateOrUpdateProductDTO dto);
    List<Product> findAll();
    Product findByCode(UUID id);
}
