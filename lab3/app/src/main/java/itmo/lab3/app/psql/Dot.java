package itmo.lab3.app.psql;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "Dot")
public class Dot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique = true)
    private long id;
    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "result")
    private boolean result;
    @Column(name = "receivedAt")
    private long receivedAt;
    @Column(name = "session")
    private String session;
    @Column(name = "responseTime")
    private long responseTime;

    public Dot(){
    }

    public Dot(Dot d) {
        this.session = d.session;
        this.x = d.x;
        this.y = d.y;
        this.r = d.r;
        this.result = check();
        this.receivedAt = d.receivedAt;
        Date date = new Date();
        this.responseTime = System.nanoTime()-receivedAt;
    }

    private boolean check() {
        boolean circle = (x >= -r && x <= 0 && y >= 0 && y <= r) && (x * x + y * y <= r * r);
        boolean rectangle = (x >= 0 && x <= r && y <= 0 && y >= -r);
        boolean triangle = (x <= 0 && y <= 0 && y >= -x - r);
        return circle || rectangle || triangle;
    }


    public int getId() {
        return (int) id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public double getX() {
        return x;
    }
    public void setX(double x) {
        this.x = x;
    }
    public void setY(double y) {
        this.y = y;
    }
    public double getY() {
        return y;
    }
    public double getR() {
        return r;
    }
    public void setR(double r) {
        this.r = r;
    }
    public boolean getResult() {
        return result;
    }
    public void setResult(boolean result) {
        this.result = result;
    }
    public long getReceivedAt() {
        return receivedAt;
    }
    public void setReceivedAt(long receivedAt) {
        this.receivedAt = receivedAt;
    }
    public String getSession() {
        return session;
    }
    public void setSession(String session) {
        this.session = session;
    }
    public long getResponseTime() {
        return responseTime;
    }
    public void setResponseTime(long responseTime) {
        this.responseTime = responseTime;
    }
}
