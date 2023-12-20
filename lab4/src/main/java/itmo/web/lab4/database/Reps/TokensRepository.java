package itmo.web.lab4.database.Reps;

import itmo.web.lab4.database.Entities.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TokensRepository extends JpaRepository<Token,Long>{
    @Query("select t from Token t where t.token = ?1")
    Token findByToken(String token);
}
