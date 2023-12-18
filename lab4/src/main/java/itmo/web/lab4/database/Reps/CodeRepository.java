package itmo.web.lab4.database.Reps;

import itmo.web.lab4.database.Entities.Code;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodeRepository extends JpaRepository<Code,Long>{
    Code findByCode(String code);
}
