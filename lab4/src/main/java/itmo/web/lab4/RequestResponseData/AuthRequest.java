package itmo.web.lab4.RequestResponseData;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class AuthRequest {
    private String login;
    private String password;
}
