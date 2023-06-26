package ne.osms.serviceImpls;

import ne.osms.dtos.CreateOrUpdateProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import ne.osms.exceptions.ResourceNotFoundException;
import ne.osms.models.Product;
import ne.osms.repositories.IProductRepository;
import ne.osms.services.IProductService;

import java.util.List;
import java.util.UUID;
@Service

public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public Product create(CreateOrUpdateProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setInDate(dto.getInDate());
        return productRepository.save(product);
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findByCode(UUID id) {
        return productRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Product", "id", id.toString()));
    }
}
