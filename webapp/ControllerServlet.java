package itmo.web.app;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
@WebServlet(name = "ControllerServlet", value = "/lab2")
public class ControllerServlet extends HttpServlet{
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            String xParameter = request.getParameter("x");
            String yParameter = request.getParameter("y");
            String rParameter = request.getParameter("r");

            if (xParameter != null && yParameter != null && rParameter != null) {
                getServletContext().getRequestDispatcher("/area-check").forward(request, response);
            } else {
                getServletContext().getRequestDispatcher("index.jsp").forward(request, response);
            }
        }
    }