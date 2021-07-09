import { AbstractControl, FormControl } from '@angular/forms';


export class ValidationStyles {

    inputStyle(input: AbstractControl): string { // working? 
        if (input.touched && input.invalid) {
            return 'redBorder';
        }
        return '';
    }

    requiredPrecaution(input: AbstractControl) { // returns true when an input is empty
        if (input.errors?.required && input.touched) {
            return true;
        }
        return;
    }

    emailPatternPrecaution(input: AbstractControl) { // returns true if there is an error with the regex pattern validator for the email input
        if (input.errors?.pattern && input.touched) {
            return true;
        }
        return;
    }

    namesPatternPrecaution(input: AbstractControl){ // returns true if there is an error with the regex pattern validator for the names input
        if (input.errors?.pattern && input.touched){
            return true;
        }
        return;
    }

    samePassword(input, input2){ // returns true if password and repeated password are the same
        if ((input.value == input2.value)){
            return true;
        }
        return;
    }

    passwordMinLength(input: AbstractControl){ // returns true if there is an error with input length
        if (input.errors?.minlength && input.touched){
            return true;
        }
        return;
    }

}



