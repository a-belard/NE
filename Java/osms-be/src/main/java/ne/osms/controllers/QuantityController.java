package ne.osms.controllers;

import ne.osms.dtos.CreateQuantityDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ne.osms.payload.ApiResponse;
import ne.osms.services.IQuantityService;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/v1/quantities")
public class QuantityController {
    @Autowired
    private IQuantityService quantityService;

    @PostMapping(path = "/")
    public ResponseEntity<ApiResponse> create(@Valid @RequestBody CreateQuantityDTO dto) {

        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, quantityService.create(dto)));
    }


}