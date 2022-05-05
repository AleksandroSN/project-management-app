import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { RegExForInputValidation } from "@utils";

@Injectable()
export class InputValidationService {
  // eslint-disable-next-line class-methods-use-this
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!new RegExp(RegExForInputValidation.minLength).test(control.value)) {
        return { minLength: true };
      }
      if (!new RegExp(RegExForInputValidation.upperAndLowerCase).test(control.value)) {
        return { upperAndLowerCase: true };
      }
      if (!new RegExp(RegExForInputValidation.numbersAndLetters).test(control.value)) {
        return { numbersAndLetters: true };
      }
      if (!new RegExp(RegExForInputValidation.specialChar).test(control.value)) {
        return { specialChar: true };
      }
      return null;
    };
  }
}
