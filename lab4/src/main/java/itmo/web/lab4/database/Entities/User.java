package itmo.web.lab4.database.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (name = "username", nullable = false)
    private String username;
    @Column (name = "password", nullable = false)
    private String password;
    @Column (name = "token", nullable = false)
    private String token;
    @Column (name = "token_expire_date", nullable = false)
    private LocalDateTime tokenExpireDate;
    @Column (name = "email", nullable = false)
    private String email;
}
