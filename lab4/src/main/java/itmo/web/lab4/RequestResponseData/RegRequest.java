package itmo.web.lab4.RequestResponseData;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RegRequest {
    private String login;
    private String email;
    private String password;
}
