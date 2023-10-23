package itmo.src;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
@WebServlet(name = "AreaCheckServlet", value = "/area")
public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long startTime = System.nanoTime();
        Date date = new Date(System.currentTimeMillis());
        ArrayList<String> Points = (ArrayList<String>) getServletContext().getAttribute("points");
        if(Points==null) Points = new ArrayList<String>();
        System.out.println(Points);
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
            request.setAttribute("Points", Points);
            request.getServletContext().setAttribute("points", Points);
            request.getRequestDispatcher("/table.jsp").forward(request, response);
        }
        catch (Exception e){
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
