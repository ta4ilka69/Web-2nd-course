package itmo.lab3.app.beans;
import java.io.Serializable;

import itmo.lab3.app.psql.Dot;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "dotBean")
@SessionScoped
public class DotBean implements Serializable {
    private static final long serialVersionUID = -8835016776644265867L;

}
