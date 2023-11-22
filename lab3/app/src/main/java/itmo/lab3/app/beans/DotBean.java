package itmo.lab3.app.beans;

import itmo.lab3.app.psql.Dot;
import itmo.lab3.app.psql.DotsDB;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.bean.ManagedBean;
import jakarta.faces.context.FacesContext;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.PostLoad;
import java.io.Serializable;
import java.util.List;
    @Getter
    @Setter
    @ManagedBean(name = "dotBean")
    @SessionScoped
    public class DotBean implements Serializable {
        private static final long serialVersionUID = -8835016776644265867L;
        private DotsDB dotsDB;
        private Dot current;
        private List<Dot> dots;
        private double y;
        @PostConstruct
        public void init(){
            FacesContext f = FacesContext.getCurrentInstance();
            dotsDB = new DotsDB(f.getExternalContext().getSessionId(true));
            dots = dotsDB.getDots();
            current = new Dot();
        }
        public void getDots(){
            dots = dotsDB.getDots();
        }
        public void addDot(){
            current.setY(this.y);
            Dot added=new Dot(current);
            dotsDB.addDot(added);
            getDots();
            current = new Dot();
        }
        public void setY(double y){
            current.setY(y);
        }
        public double getY(){
            return current.getY();
        }
        public void setXtoM2(){
            current.setX(-2);
        }
        public void setXtoM1(){
            current.setX(-1);
        }
        public void setXto0(){
            current.setX(0);
        }
        public void setXto1(){
            current.setX(1);
        }
        public void setXtoM15(){
            current.setX(-1.5);
        }
        public void setXtoM05(){
            current.setX(-0.5);
        }
        public void setXto05(){
            current.setX(0.5);
        }
        public void setXto15(){
            current.setX(1.5);
        }
        public void setRto1(){
            current.setR(1);
        }
        public void setRto15(){
            current.setR(1.5);
        }
        public void setRto2(){
            current.setR(2);
        }
        public void setRto25(){
            current.setR(2.5);
        }
        public void setRto3(){
            current.setR(3);
        }
    }
