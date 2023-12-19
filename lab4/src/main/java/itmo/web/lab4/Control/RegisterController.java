package itmo.web.lab4.Control;

import itmo.web.lab4.RequestResponseData.RegRequest;
import itmo.web.lab4.Utils.SimpleMailService;
import itmo.web.lab4.Utils.TokenGeneration;
import itmo.web.lab4.database.Entities.Code;
import itmo.web.lab4.database.Entities.User;
import itmo.web.lab4.database.Reps.CodeRepository;
import itmo.web.lab4.database.Reps.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/register")
public class RegisterController {
    @Autowired
    private SimpleMailService mailService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CodeRepository codeRepository;
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/register")
    public ResponseEntity<String> login(@RequestBody RegRequest reg, HttpServletResponse response){
        String code = TokenGeneration.generateToken();
        if(userRepository.countByUsername(reg.getLogin())>0){
            return ResponseEntity.badRequest().body("User with this login already exists");
        }
        User user = new User();
        user.setUsername(reg.getLogin());
        user.setPassword(reg.getPassword());
        user.setEmail(reg.getEmail());
        user.set_confirmed(false);
        userRepository.save(user);
        mailService.sendEmail(reg.getEmail(),"Confirm your registration","http://localhost:6969/register/confirm/"+code);
        Code c = new Code();
        c.setCode(code);
        c.setUser(user);
        codeRepository.save(c);
        return ResponseEntity.ok("Check your email");
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/confirm/{code}")
    public ResponseEntity<String> confirm(@PathVariable String code){
        Code c = codeRepository.findByCode(code);
        if(c==null){
            return ResponseEntity.badRequest().body("Wrong code");
        }
        Optional<User> user = userRepository.findById(c.getUser().getId());
        if(user.isEmpty()){
            return ResponseEntity.badRequest().body("Wrong code");
        }
        user.get().set_confirmed(true);
        userRepository.save(user.get());
        codeRepository.delete(c);
        return ResponseEntity.ok("You have successfully confirmed your registration");
    }
}
