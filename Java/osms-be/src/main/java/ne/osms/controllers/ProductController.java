package ne.osms.controllers;

import ne.osms.dtos.CreateOrUpdateProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ne.osms.payload.ApiResponse;
import ne.osms.services.IProductService;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping(path = "/")
    public ResponseEntity<ApiResponse> getAll() {
        return ResponseEntity.ok(new ApiResponse(true, productService.findAll()));
    }

    @PostMapping(path = "/")
    public ResponseEntity<ApiResponse> create(@Valid @RequestBody CreateOrUpdateProductDTO dto) {

        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, productService.create(dto)));
    }

}