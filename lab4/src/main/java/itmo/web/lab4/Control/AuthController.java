package itmo.web.lab4.Control;

import itmo.web.lab4.RequestResponseData.AuthRequest;
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
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthRequest auth, HttpServletResponse response){
        User user = userRepository.findByUsernameAndPassword(auth.getLogin(), auth.getPassword());
        if(user == null){
            return ResponseEntity.badRequest().body("Wrong login or password");
        }
        if(!user.is_confirmed()){
            return ResponseEntity.badRequest().body("User not confirmed");
        }
        String tokenValue = TokenGeneration.generateToken();
        Token token = new Token();
        token.setTokenExpireDate(LocalDateTime.now().plusHours(10));
        token.setUser(user);
        token.setToken(tokenValue);
        tokensRepository.save(token);
        Cookie cookie = new Cookie("SESSION_ID", tokenValue);
        cookie.setMaxAge(3600*10);
        cookie.setPath("/");
        response.addCookie(cookie);
        return ResponseEntity.ok("Login successful!");
    }
    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("SESSION_ID", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
        return ResponseEntity.ok("Logged out successfully!");
    }
}
