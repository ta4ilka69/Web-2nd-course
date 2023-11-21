package itmo.lab3.app.beans;
import java.io.Serializable;
import java.util.List;

import itmo.lab3.app.psql.Dot;
import itmo.lab3.app.psql.DotsDB;
import jakarta.faces.context.FacesContext;
import jakarta.faces.model.FacesDataModel;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "dotBean")
@SessionScoped
@FacesDataModel(forClass = Dot.class)
public class DotBean implements Serializable {
    private static final long serialVersionUID = -8835016776644265867L;
    private DotsDB dotsDB;
    private Dot current;
    private List<Dot> dots;
    public void init(){
        FacesContext f = FacesContext.getCurrentInstance();
        dotsDB = new DotsDB(f.getExternalContext().getSessionId(true));
        dots = dotsDB.getDots();
        current = new Dot();
    }
    private void getDots(){
        dots = dotsDB.getDots();
    }
    private void addDot(){
        dotsDB.addDot(current);
    }
}

