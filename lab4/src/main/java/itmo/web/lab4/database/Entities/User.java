package itmo.web.lab4.database.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (name = "username", nullable = false)
    private String username;
    @Column (name = "password", nullable = false)
    private String password;
    @Column (name = "email", nullable = false)
    private String email;
    @Column(name = "is_confirmed")
    private boolean is_confirmed;
}
