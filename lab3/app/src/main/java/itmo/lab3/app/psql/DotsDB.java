package itmo.lab3.app.psql;

import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import java.util.List;

public class DotsDB {
    private EntityManagerFactory emf;
    public DotsDB() {
        this.emf = Persistence.createEntityManagerFactory("MyPSQLConnection");
    }

    public List<Dot> getDots(String session) {
        return emf.createEntityManager().createQuery("SELECT d FROM Dot d where session = ", Dot.class).getResultList();
    }
}
