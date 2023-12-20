package itmo.web.lab4.RequestResponseData;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DotRequest {
    private double x;
    private double y;
    private double r;
    private String token;
}
