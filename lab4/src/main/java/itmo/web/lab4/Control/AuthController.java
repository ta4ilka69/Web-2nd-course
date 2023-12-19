package itmo.web.lab4.Control;

import itmo.web.lab4.RequestResponseData.AuthRequest;
import itmo.web.lab4.RequestResponseData.LoginResponse;
import itmo.web.lab4.RequestResponseData.LogoutRequest;
import itmo.web.lab4.Utils.TokenGeneration;
import itmo.web.lab4.database.Entities.Token;
import itmo.web.lab4.database.Entities.User;
import itmo.web.lab4.database.Reps.TokensRepository;
import itmo.web.lab4.database.Reps.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokensRepository tokensRepository;
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody AuthRequest auth, HttpServletResponse response){
        User user = userRepository.findByUsernameAndPassword(auth.getLogin(), auth.getPassword());
        if(user == null){
            return ResponseEntity.badRequest().body(new LoginResponse("Incorrect login or password", null));
        }
        if(!user.is_confirmed()){
            return ResponseEntity.badRequest().body(new LoginResponse("Check your email first!", null));
        }
        String tokenValue = TokenGeneration.generateToken();
        Token token = new Token();
        token.setTokenExpireDate(LocalDateTime.now().plusHours(10));
        token.setUser(user);
        token.setToken(tokenValue);
        tokensRepository.save(token);
        return ResponseEntity.ok(new LoginResponse("Logged in successfully!", tokenValue));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestBody LogoutRequest token, HttpServletResponse response) {
        Token token1 = tokensRepository.findByToken(token.getToken());
        if(token1 == null){
            return ResponseEntity.badRequest().body("Wrong token");
        }
        tokensRepository.delete(token1);
        return ResponseEntity.ok("Logged out successfully!");
    }
}
