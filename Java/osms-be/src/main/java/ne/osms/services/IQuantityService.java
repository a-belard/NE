package ne.osms.services;

import ne.osms.dtos.CreateQuantityDTO;
import ne.osms.models.Quantity;

public interface IQuantityService {
    Quantity create(CreateQuantityDTO dto);
}
