package ne.osms.controllers;

import ne.osms.dtos.AddToCartDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ne.osms.payload.ApiResponse;
import ne.osms.services.IPurchasedService;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/v1/purchased")
public class PurchasedController {
    @Autowired
    private IPurchasedService purchasedService;

    @GetMapping(path = "/")
    public ResponseEntity<ApiResponse> getAll() {
        return ResponseEntity.ok(new ApiResponse(true, purchasedService.findAll()));
    }

    @PostMapping(path = "/")
    public ResponseEntity<ApiResponse> buy(@Valid @RequestBody AddToCartDTO dto) {

        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true,purchasedService.create(dto)));
    }


}