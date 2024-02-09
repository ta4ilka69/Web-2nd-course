package itmo.web.lab4.Control;

import itmo.web.lab4.RequestResponseData.DotRequest;
import itmo.web.lab4.RequestResponseData.DotsResponse;
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
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class DotController {
    @Autowired
    private DotRepository dotRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokensRepository tokensRepository;
    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("/dots/{token}")
    public ResponseEntity<List<DotsResponse>> getDots(@PathVariable String token){
        System.err.println("new request");
        Token t = tokensRepository.findByToken(token);
        System.err.println(token);
        if(t==null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
       // if(t.getTokenExpireDate().isBefore(LocalDateTime.now())||true){
       //     return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
       // }
        List<Dot> dots = dotRepository.findAllByUserId(t.getUser().getId());
        List<DotsResponse> dotDTOs = dots.stream()
                .map(dot -> {
                    DotsResponse dotDTO = new DotsResponse();
                    dotDTO.setX(dot.getX());
                    dotDTO.setY(dot.getY());
                    dotDTO.setR(dot.getR());
                    dotDTO.setResult(dot.isResult());
                    dotDTO.setReceivedAt(dot.getRecieveTime());
                    dotDTO.setExecutionTime(dot.getExecutionTime());
                    return dotDTO;
                }).toList();
        return ResponseEntity.ok(dotDTOs);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/new-dot")
    public ResponseEntity<String> addNewDot(@RequestBody DotRequest dotRequest){
        System.err.println("new request");
        Token t = tokensRepository.findByToken(dotRequest.getToken());
        System.err.println(dotRequest.getToken());
        if(t==null){
            System.err.println("not found");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No access");
        }
       // if(t.getTokenExpireDate().isBefore(LocalDateTime.now())){
       //     return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No access");
       // }
        Dot dot = new Dot(dotRequest.getX(), dotRequest.getY(), dotRequest.getR(), LocalDateTime.now(), System.currentTimeMillis(), t.getUser());
        dotRepository.save(dot);
        return ResponseEntity.ok("OK");
    }
}
