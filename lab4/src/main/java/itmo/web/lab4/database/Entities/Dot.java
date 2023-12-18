package itmo.web.lab4.database.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "dots")
@Getter
@Setter
public class Dot {
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
}
