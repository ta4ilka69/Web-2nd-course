package itmo.lab3.app.validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("y-valid")
public class ValidatorY implements Validator<String> {
    public void validate(FacesContext context, UIComponent component, String y) throws ValidatorException {
        if(y==null || y.isEmpty()){
            throw new ValidatorException(new FacesMessage("Y can't be empty"));
        }
        try {
            float value = Float.parseFloat(y);
            if (value > 5) {
                throw new ValidatorException(new FacesMessage("Y must be less than 5"));
            }
            if (value < -5) {
                throw new ValidatorException(new FacesMessage("Y must be greater than -5"));
            }
        }
        catch (Exception e) {
            throw new ValidatorException(new FacesMessage("Y must be a float number"));
        }
    }
}
