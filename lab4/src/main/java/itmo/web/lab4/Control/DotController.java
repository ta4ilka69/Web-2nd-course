package itmo.web.lab4.Control;

import itmo.web.lab4.database.Reps.DotRepository;
import itmo.web.lab4.database.Reps.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class DotController {
    @Autowired
    private DotRepository dotRepository;
    @Autowired
    private UserRepository userRepository;

}
