package itmo.web.lab4.database.Reps;

import itmo.web.lab4.database.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsernameAndPassword(String username, String password);
    int countByUsername(String username);
}
