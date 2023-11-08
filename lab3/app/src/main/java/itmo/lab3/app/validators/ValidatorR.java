package itmo.lab3.app.validators;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.FacesValidator;
import jakarta.faces.validator.Validator;
import jakarta.faces.validator.ValidatorException;

import java.util.ArrayList;
import java.util.Arrays;

@FacesValidator("r-valid")
public class ValidatorR implements Validator<String> {
    private static final ArrayList<Float> usedR = new ArrayList<>(Arrays.asList(1f, 1.5f, 2f, 2.5f, 3f));
    public void validate(FacesContext context, UIComponent component, String r) throws ValidatorException {
        if(r==null || r.isEmpty()){
            throw new ValidatorException(new FacesMessage("R musy be selected"));
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
