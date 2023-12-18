package itmo.web.lab4.database.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "dots")
@Getter
@Setter
public class Dot implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Column(name = "x", nullable = false)
    private double x;
    @Column(name = "y", nullable = false)
    private double y;
    @Column(name = "r", nullable = false)
    private double r;
    @Column(name = "result", nullable = false)
    private boolean result;
    @Column(name = "receive_time", nullable = false)
    private LocalDateTime recieveTime;
    @Column(name = "execution_time", nullable = false)
    private long executionTime;
    public Dot(double x, double y, double r, LocalDateTime time, long timeS, User user){
        long start = System.currentTimeMillis();
        this.x = x;
        this.y = y;
        this.r = r;
        this.recieveTime = time;
        this.user = user;
        this.result = checkResult(x, y, r);
        this.executionTime = timeS-start;
    }
    private boolean checkResult(double x, double y, double r){
        if(x<=0&&y>=0){
            return (x>-r&&y<r);
        }
        if(x>=0&&y>=0){
            return ((x*x+y*y)<((r/2)*(r/2)));
        }
        if(x>=0&&y<=0){
            return (y>x-r/2);
        }
        return false;
    }
}
