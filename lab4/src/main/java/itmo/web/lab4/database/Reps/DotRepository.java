package itmo.web.lab4.database.Reps;

import itmo.web.lab4.database.Entities.Dot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DotRepository extends JpaRepository<Dot,Long> {
    @Query("select d from Dot d where d.user.id = ?1")
    List<Dot> findAllByUserId(Long userId);
}
