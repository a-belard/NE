package ne.osms.services;

import ne.osms.dtos.AddToCartDTO;
import ne.osms.models.Purchased;

import java.util.List;
import java.util.UUID;

public interface IPurchasedService {
    List<Purchased> findAll();
    Purchased findById(UUID id);
    List<Purchased> findByCustomer(UUID customer);
    Purchased create(AddToCartDTO dto);

}
