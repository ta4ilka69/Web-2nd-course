package itmo.web.lab4.Control;

import itmo.web.lab4.RequestResponseData.DotRequest;
import itmo.web.lab4.RequestResponseData.LogoutRequest;
import itmo.web.lab4.database.Entities.Dot;
import itmo.web.lab4.database.Entities.Token;
import itmo.web.lab4.database.Reps.DotRepository;
import itmo.web.lab4.database.Reps.TokensRepository;
import itmo.web.lab4.database.Reps.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/")
public class DotController {
    @Autowired
    private DotRepository dotRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokensRepository tokensRepository;
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/")
    public ResponseEntity<List<Dot>> getDots(@RequestBody LogoutRequest logoutRequest){
        Token t = tokensRepository.findByToken(logoutRequest.getToken());
        if(t==null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        if(t.getTokenExpireDate().isAfter(LocalDateTime.now())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        return ResponseEntity.ok(dotRepository.findAllByUserId(t.getUser().getId()));
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/new-dot")
    public ResponseEntity<String> addNewDot(@RequestBody DotRequest dotRequest){
        Token t = tokensRepository.findByToken(dotRequest.getToken());
        if(t==null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No access");
        }
        if(t.getTokenExpireDate().isAfter(LocalDateTime.now())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Your session is expired. Please, log in again");
        }
        Dot dot = new Dot(dotRequest.getX(), dotRequest.getY(), dotRequest.getR(), LocalDateTime.now(), System.currentTimeMillis(), t.getUser());
        dotRepository.save(dot);
        return ResponseEntity.ok("OK");
    }
}
