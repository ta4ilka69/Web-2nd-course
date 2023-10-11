package itmo.src;

import java.io.*;
import java.util.ArrayList;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "ControlServlet", value = "/control")
public class ControllerServlet extends HttpServlet {
    private ArrayList<String> points = new ArrayList<>();
    public void init() {
        points.add("1 2 3 success 1.5 1");
        getServletContext().setAttribute("points", points);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xParameter = request.getParameter("x");
        String yParameter = request.getParameter("y");
        String rParameter = request.getParameter("r");
        if (xParameter != null && yParameter != null && rParameter != null) {
            request.getServletContext().getRequestDispatcher("/area").forward(request, response);
        } else {
            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }
}