package itmo.lab3.app.validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

import java.util.ArrayList;
import java.util.Arrays;

@FacesValidator("r-valid")
public class ValidatorR implements Validator<String> {
    private static final ArrayList<Float> usedR = new ArrayList<>(Arrays.asList(1f, 1.5f, 2f, 2.5f, 3f));
    public void validate(FacesContext context, UIComponent component, String r) throws ValidatorException {
        if(r==null || r.isEmpty()){
            throw new ValidatorException(new FacesMessage("R must be selected"));
        }
        try {
            float value = Float.parseFloat(r);
            if (!usedR.contains(value)) {
                throw new ValidatorException(new FacesMessage("Y must be less than 5"));
            }
        }
        catch (Exception e) {
            throw new ValidatorException(new FacesMessage("Y must be a float number"));
        }
    }
}