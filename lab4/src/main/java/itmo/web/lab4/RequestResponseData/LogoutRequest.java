package itmo.web.lab4.RequestResponseData;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class LogoutRequest {
    private String token;
}
