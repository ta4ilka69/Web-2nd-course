package itmo.lab3.app.psql;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import java.util.List;

public class DotsDB {
    private final EntityManagerFactory emf;
    private final String session;
    public DotsDB(String session) {
        this.emf = Persistence.createEntityManagerFactory("MyPSQLConnection");
        this.session = session;
    }

    public List<Dot> getDots() {
        EntityManager em = emf.createEntityManager();
        TypedQuery<Dot> query = em.createQuery("SELECT d FROM Dot d WHERE d.session = :session", Dot.class);
        List<Dot> dots = query.setParameter("session", session).getResultList();
        em.close();
        return dots;
    }
    public void addDot(Dot dot) {
        emf.createEntityManager().getTransaction().begin();
        emf.createEntityManager().persist(dot);
        emf.createEntityManager().getTransaction().commit();
    }
}
