package ne.osms.serviceImpls;

import ne.osms.dtos.CreateQuantityDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ne.osms.models.Product;
import ne.osms.models.Quantity;
import ne.osms.repositories.IQuantityRepository;
import ne.osms.services.IProductService;
import ne.osms.services.IQuantityService;

import java.time.LocalDateTime;

@Service
public class QuantityServiceImpl  implements IQuantityService {
    @Autowired
    private IProductService productService;
    @Autowired
    private IQuantityRepository quantityRepository;
    @Override
    public Quantity create(CreateQuantityDTO dto) {
        Product product = productService.findByCode(dto.getProductCode());
        Quantity quantity = new Quantity();
        quantity.setQuantity(dto.getQuantity());
        quantity.setDate(LocalDateTime.now());
        quantity.setProductCode(product);
        quantity.setOperation(dto.getOperation());
        return quantityRepository.save(quantity);
    }
}
