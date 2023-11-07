package itmo.lab3.app.psql;

import jakarta.persistence.*;

@Entity
@Table(name = "dots")
public class Dot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private double receivedAt;
    @Column(name = "session")
    private String session;
    @Column(name = "responseTime")
    private double responseTime;
    public Dot() {
    }
    public Dot(Dot d) {
        this.id = d.id;
        this.session= d.session;
        this.x = d.x;
        this.y = d.y;
        this.r = d.r;
        this.result = check();
        this.receivedAt = d.receivedAt;
        this.responseTime = System.currentTimeMillis() - d.receivedAt;
    }

    private boolean check(){
        boolean circle = (x >= -r && x <= 0 && y >= 0 && y <= r) && (x * x + y * y <= r * r);
        boolean rectangle = (x >= 0 && x <= r && y <= 0 && y >= -r);
        boolean triangle = (x<=0 && y<=0 && y>=-x-r);
        return circle || rectangle || triangle;
    }

    public static String resultInWords(boolean result){
        return result ? "success" : "failure";
    }
}
