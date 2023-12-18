package itmo.web.lab4.database.Reps;

import itmo.web.lab4.database.Entities.Dot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DotRepository extends JpaRepository<Dot,Long> {
    List<Dot> findAllByUserId(Long userId);
}
