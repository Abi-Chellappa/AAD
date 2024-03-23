package com.example.jobportal.service;



import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.jobportal.dtorequest.AuthenticationRequest;
import com.example.jobportal.dtorequest.registerDtoRequest;
import com.example.jobportal.dtoresponse.AuthenticationResponse;
import com.example.jobportal.entity.Login;
import com.example.jobportal.entity.UserRegister;
import com.example.jobportal.enumerate.Role;
import com.example.jobportal.repository.LoginRepository;
import com.example.jobportal.repository.registerRepository;
import java.util.List;

@Service
public class AuthenticationService {
    private final registerRepository repository;
    private final LoginRepository loginRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtservice;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(registerRepository repository,
                                  LoginRepository loginRepository,
                                  PasswordEncoder passwordEncoder,
                                  JWTService jwtservice,
                                  AuthenticationManager authenticationManager) {
        this.repository = repository;
        this.loginRepository = loginRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtservice = jwtservice;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(registerDtoRequest request) {
        var user = UserRegister.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .confirmpassword(request.getConfirmpassword())
                .role(Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtservice.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = repository.findByUsername(request.getUsername())
                .orElseThrow();

        var jwtToken = jwtservice.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public List<UserRegister> getRegister() {
        return repository.findAll();
    }

    public void updateRegister(UserRegister registerEntity) {
        repository.save(registerEntity);
    }

    public void deleteRegister(int id) {
        repository.deleteById(id);
    }

    public List<Login> getUser() {
        return loginRepository.findAll();
    }

    public void updateUser(Login login) {
        loginRepository.save(login);
    }

    public void deleteUser(int userId) {
        loginRepository.deleteById(userId);
    }
}
