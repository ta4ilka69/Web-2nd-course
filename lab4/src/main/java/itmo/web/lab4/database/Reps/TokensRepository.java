package itmo.web.lab4.database.Reps;

import itmo.web.lab4.database.Entities.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokensRepository extends JpaRepository<Token,Long>{
    Token findByToken(String token);
}
