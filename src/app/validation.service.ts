import * as _ from "lodash";
import { AbstractControl } from '@angular/forms';

export class ValidationService {

  static getValidatorErrorMessage(
    validatorName: string,
    fieldName: string,
    validatorValue?: any,
  ): string {
    const config = {
      required: `This ${fieldName} is required`,
      invalidEmailAddress: "Please enter a valid email address",
      invalidPassword:
        "Please enter a valid password. Password must be at least 6 characters long, and contain a number.",
      invalid_age: "Please enter a valid age",
      invalidInches: "Please enter a valid height in inches",
    };

    return config[validatorName];
  }

  static isRequired(control: AbstractControl): { [key: string]: boolean } | null  {
    const isEmpty = _.isEmpty(control.value);
    if (isEmpty) {
      return { required: true };
    }
    return null;
  }

  static isEmailValid(control: AbstractControl) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control: AbstractControl) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static ageValidator(control: AbstractControl) {
    const notWholeNumber = control.value % 1 !== 0;
    const tooOld = control.value > 120;
    const tooYoung = control.value < 1;
    const notANumber = isNaN(control.value);

    if (notWholeNumber || tooOld || tooYoung || notANumber) {
      return { invalid_age: true };
    } else {
      return null;
    }
  }

}
