package itmo.lab3.app.psql;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.TypedQuery;

import java.util.List;

public class DotsDB {
    private final EntityManagerFactory emf;
    private final String session;
    public DotsDB(String session) {
        this.emf = Persistence.createEntityManagerFactory("Psql");
        this.session = session;
    }

    public List<Dot> getDots() {
        EntityManager em = emf.createEntityManager();
        TypedQuery<Dot> query = em.createQuery("SELECT d FROM dots d WHERE d.session = :session", Dot.class);
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
