package itmo.web.lab4.RequestResponseData;

import itmo.web.lab4.database.Entities.Dot;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DotsResponse {
    private double x;
    private double y;
    private double r;
    private boolean result;
    private LocalDateTime receivedAt;
    private long executionTime;
}
