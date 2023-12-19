package itmo.web.lab4.RequestResponseData;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponse{
    private String message;
    private String token;
}
