package itmo.lab3.app.validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("y-valid")
public class ValidatorY implements Validator<Double> {
    public void validate(FacesContext context, UIComponent component, Double y) throws ValidatorException {
        if(y==null){
            throw new ValidatorException(new FacesMessage("Y can't be empty"));
        }
        try {
            if (y > 5) {
                throw new ValidatorException(new FacesMessage("Y must be less than 5"));
            }
            if (y < -5) {
                throw new ValidatorException(new FacesMessage("Y must be greater than -5"));
            }
        }
        catch (Exception e) {
            throw new ValidatorException(new FacesMessage("Y must be a float number"));
        }
    }
}
