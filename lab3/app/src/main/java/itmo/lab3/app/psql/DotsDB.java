package itmo.lab3.app.psql;

import javax.persistence.*;

import java.util.List;

public class DotsDB {
    private final EntityManagerFactory emf;
    private final String session;
    public DotsDB(String session) {
        this.emf = Persistence.createEntityManagerFactory("PostTa4ilka");
        this.session = session;
    }

    public List<Dot> getDots() {
        EntityManager em = emf.createEntityManager();
        List<Dot> dots  = em.createQuery("SELECT d FROM Dot d WHERE d.session = :session", Dot.class).setParameter("session", session).getResultList();
        em.close();
        return dots;
    }
    public void addDot(Dot dot) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
        t.begin();
        em.persist(dot);
        t.commit();
        em.close();
    }
    public String getSession(){
        return this.session;
    }
}
