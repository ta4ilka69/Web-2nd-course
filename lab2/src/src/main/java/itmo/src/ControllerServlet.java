package itmo.src;


import java.io.*;
import java.util.ArrayList;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "ControlServlet", value = "/control")
public class ControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xParameter = request.getParameter("x");
        String yParameter = request.getParameter("y");
        String rParameter = request.getParameter("r");
        System.out.println(xParameter + " " + yParameter + " " + rParameter);
        if (xParameter != null && yParameter != null && rParameter != null) {
            request.getServletContext().getRequestDispatcher("/area").forward(request, response);
        } else {
            request.setAttribute("Points", request.getServletContext().getAttribute("Points"));
            request.getServletContext().getRequestDispatcher("/table.jsp").forward(request, response);
        }
    }
}