package ne.osms.serviceImpls;

import ne.osms.dtos.AddToCartDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ne.osms.exceptions.BadRequestException;
import ne.osms.exceptions.ResourceNotFoundException;
import ne.osms.models.Product;
import ne.osms.models.Purchased;
import ne.osms.models.Quantity;
import ne.osms.repositories.IPurchasedRepository;
import ne.osms.repositories.IQuantityRepository;
import ne.osms.services.IProductService;
import ne.osms.services.IPurchasedService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Service

public class PurchasedServiceImpl implements IPurchasedService {

    @Autowired
    private IPurchasedRepository purchasedRepository;
    @Autowired
    private IQuantityRepository quantityRepository;
    @Autowired
    private IProductService productService;


    @Override
    public Purchased create(AddToCartDTO dto) {
        Optional<Purchased> purchasedBy = purchasedRepository.findByUserAndProductCode(dto.getUser(),dto.getProductCode());
        if (purchasedBy.isPresent()){
             throw new BadRequestException("Product already bought!");
        }
       Purchased purchased = new Purchased();
        Quantity quantity =  quantityRepository.findByProductCode(dto.getProductCode());
        if (quantity.getQuantity() < dto.getQuantity() || (quantity.getQuantity()-dto.getQuantity()) < 0){
            throw new BadRequestException("The selected quantity is not in the stock");
        }
        LocalDateTime localDateTime = LocalDateTime.now();
        purchased.setDate(localDateTime);
        purchased.setQuantity(dto.getQuantity());
        quantity.setQuantity(quantity.getQuantity()-dto.getQuantity());
        quantityRepository.save(quantity);
        Product product = productService.findByCode(dto.getProductCode());
        purchased.setProductCode(product);
        purchased.setTotal(product.getPrice() * dto.getQuantity());
        return purchasedRepository.save(purchased);
    }

    @Override
    public List<Purchased> findAll() {
        return purchasedRepository.findAll();
    }

    @Override
    public Purchased findById(UUID id) {
        return purchasedRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Purchased", "id", id.toString()));
    }

    @Override
    public List<Purchased> findByCustomer(UUID customer) {
        return purchasedRepository.findByUser(customer);
    }


}
