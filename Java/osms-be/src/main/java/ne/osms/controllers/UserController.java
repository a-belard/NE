package ne.osms.controllers;

import ne.osms.dtos.SignUpDTO;
import ne.osms.enums.ERole;
import ne.osms.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ne.osms.payload.ApiResponse;
import ne.osms.services.IUserService;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    private final IUserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @Autowired
    public UserController(IUserService userService,BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping(path = "/current-user")
    public ResponseEntity<ApiResponse> currentlyLoggedInUser() {
        return ResponseEntity.ok(new ApiResponse(true, userService.getLoggedInUser()));
    }

    @PostMapping(path = "/register/as-customer")
    public ResponseEntity<ApiResponse> registerAsCustomer(@Valid @RequestBody SignUpDTO dto) {

        User user = new User();

        String encodedPassword = bCryptPasswordEncoder.encode(dto.getPassword());

        user.setEmail(dto.getEmail());
        user.setName(dto.getName());
        user.setPhone(dto.getPhone());
        user.setPassword(encodedPassword);
        user.setRole(ERole.CUSTOMER);

        User entity = this.userService.create(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, entity));
    }

    @PostMapping(path = "/register/as-admin")
    public ResponseEntity<ApiResponse> registerAsAdmin(@Valid @RequestBody SignUpDTO dto) {

        User user = new User();

        String encodedPassword = bCryptPasswordEncoder.encode(dto.getPassword());

        user.setEmail(dto.getEmail());
        user.setName(dto.getName());
        user.setPhone(dto.getPhone());
        user.setPassword(encodedPassword);
        user.setRole(ERole.ADMIN);

        User entity = this.userService.create(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, entity));
    }

}