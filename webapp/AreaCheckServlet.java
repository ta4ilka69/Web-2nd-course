package itmo.web.app;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet(name = "AreaCheckServlet", value = "/area-check")
public class AreaCheckServlet extends HttpServlet{
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long startTime = System.nanoTime();
        Date date = new Date(System.currentTimeMillis());
        ArrayList<String> Points = (ArrayList<String>) getServletContext().getAttribute("points");
        if (Points == null){
           Points = new ArrayList<>();
        }
        FileWriter f = new FileWriter("./points.txt", true);
        f.write(Points.size());
        f.flush();
        f.close();
        response.setContentType("text/html;charset=UTF-8");
        String xParameter = request.getParameter("x");
        String yParameter = request.getParameter("y");
        String rParameter = request.getParameter("r");
        try {
            double x = Double.parseDouble(xParameter);
            double y = Double.parseDouble(yParameter);
            double r = Double.parseDouble(rParameter);
            String result = checkArea(x, y, r);
            String endTime = String.format("%.6f",(System.nanoTime()-startTime)/1000000.);
            Points.add(xParameter + " " + yParameter + " " + rParameter + " " + result+ " " + endTime +" "+ date);
            request.setAttribute("points", Points);
            getServletContext().setAttribute("points", Points);
            request.getRequestDispatcher("/index.jsp").forward(request, response);
        }
        catch (NumberFormatException e){
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
        finally {
            if (response.getWriter()!=null){
                response.getWriter().close();
            }
        }
    }

    private String checkArea(double x, double y, double r){
        if (x >= 0 && y >= 0 && x*x+y*y<=r*r/4) return "success";
        if (x <= 0 && y >= 0 && y <= x/2 + r/2) return "success";
        if (x >= 0 && y <= 0 && x<=r &&y>=-r) return "success";
        return "failure";
    }
}