package itmo.lab3.app.beans;

import itmo.lab3.app.psql.Dot;
import itmo.lab3.app.psql.DotsDB;
import jakarta.enterprise.context.SessionScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

import javax.faces.application.FacesMessage;
import javax.faces.validator.ValidatorException;
import lombok.Getter;
import lombok.Setter;


import java.io.Serializable;
import java.util.List;
    @Getter
    @Setter
    @ManagedBean(name = "dotBean")
    @SessionScoped
    public class DotBean implements Serializable {
        private static final long serialVersionUID = -8835016776644265867L;
        private DotsDB dotsDB = new DotsDB(FacesContext.getCurrentInstance().getExternalContext().getSessionId(true));
        private Dot current = new Dot();
        private Dot last = new Dot();
        private List<Dot> dots;
        private boolean setRto1;
        private boolean setRto15;
        private boolean setRto2;
        private boolean setRto25;
        private boolean setRto3;
        public void getDots(){
            dots = dotsDB.getDots();
        }
        public void addDot(){
            current.setSession(dotsDB.getSession());
            if(!checkR())
            {
                throw new ValidatorException(new FacesMessage("R must be selected (and only one)"));
            }
            if(setRto1)
                current.setR(1);
            if(setRto15)
                current.setR(1.5);
            if(setRto2)
                current.setR(2);
            if(setRto25)
                current.setR(2.5);
            if(setRto3)
                current.setR(3);
            System.err.println("starting to add");
            current.setY(this.current.getY());
            System.err.println("set y");
            current.setReceivedAt(System.nanoTime());
            Dot added=new Dot(current);
            System.err.println("dot added created");
            System.err.println("time set");
            dotsDB.addDot(added);
            System.err.println("dot added to db");
            last.setX(current.getX()*120/current.getR()+150);
            last.setY(150-current.getY()*120/current.getR());
            last.setResult(added.getResult());
            getDots();
            current = new Dot();
            current.setSession(FacesContext.getCurrentInstance().getExternalContext().getSessionId(true));
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
        public boolean checkR(){
            int count = 0;
            if(setRto1) count++;
            if(setRto15) count++;
            if(setRto2) count++;
            if(setRto25) count++;
            if(setRto3) count++;
            return count == 1;
        }
        public static String resultInWords(boolean result) {
            return result ? "success" : "failure";
        }
        public static String resultInColor(boolean result) {
            return result ? "green" : "red";
        }
        public void executeAddPoint(){
            double x = getParam("x");
            double y = getParam("y");
            double r = getParam("r");
            newR(r);
            current.setX(x);
            current.setY(y);
            addDot();
        }
        private void newR(double r){
            setRto1 = false;
            setRto15 = false;
            setRto2 = false;
            setRto25 = false;
            setRto3 = false;
            if(r == 1){
                setRto1 = true;
            } else if(r == 1.5){
                setRto15 = true;
            } else if(r == 2){
                setRto2 = true;
            } else if(r == 2.5){
                setRto25 = true;
            } else if(r == 3){
                setRto3 = true;
            }
        }
        private double getParam(String param){
            return Double.parseDouble(FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get(param));
        }
        public void changeRadius(){
            double r = getParam("r");
            newR(r);
            last.setX((last.getX()-150)*last.getR()/r+150);
            last.setY(150-((150-last.getY())*last.getR()/r));
            last.setR(r);
        }
    }
