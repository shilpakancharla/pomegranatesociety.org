import { FormGroup, ValidationErrors } from "@angular/forms";

export function validateEmail(formGroup: FormGroup): ValidationErrors {
    const anonymousCtrl = formGroup && formGroup.get("contact");
    if (!anonymousCtrl || !anonymousCtrl.value) {
        return null;
    }
    
    const control = formGroup && formGroup.get("email");
    
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const emailMalformed = !regex.test(control.value);
    const emailRequired = !control.value;
    
    let error = {};
    
    if (emailMalformed) {
        error = { ...error, emailMalformed: true };
    }
    
    if (emailRequired) {
        error = { ...error, emailRequired: true };
    }
    
    return Object.keys(error).length ? error : null;
}
    
export function validateName(formGroup: FormGroup): ValidationErrors {
    const anonymousCtrl = formGroup && formGroup.get("anonymous");
    if (!anonymousCtrl || anonymousCtrl.value) {
        return null;
    }
    
    const control = formGroup.get("name");
    
    const nameMaxLength = control.value && control.value.length > 250;
    const nameRequired = !control.value;
    
    let error = {};
    
    if (nameMaxLength) {
        error = { ...error, nameMaxLength: true };
    }
    
    if (nameRequired) {
        error = { ...error, nameRequired: true };
    }
    
    return Object.keys(error).length ? error : null;
}


