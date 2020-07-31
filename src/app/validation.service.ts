import isEmpty from "lodash/isEmpty";
import isString from "lodash/isString";
import isNumber from "lodash/isNumber";
import { AbstractControl } from '@angular/forms';

export class ValidationService {

  static getValidatorErrorMessage(
    validatorName: string,
    fieldName: string,
    validatorValue?: any,
  ): string {
    const config = {
      required: `${fieldName} is required`,
      invalid_email: "Please enter a valid email address",
      invalid_password:
        "Please enter a valid password. Password must be at least 6 characters long, and contain a number.",
      invalid_age: "Please enter a valid age",
      invalid_medicare: "Please enter a valid Medicare card number",
      whole_number: `${fieldName} must be a whole number`,
      greater_than: `${fieldName} must be more than ${validatorValue}`,
    };

    return config[validatorName];
  }

  static isRequired(control: AbstractControl): { [key: string]: boolean } | null  {
    if (isEmpty(control.value)) {
      return { required: true };
    }
    return null;
  }

  static isEmailValid(control: AbstractControl) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalid_email: true };
    }
  }

  static passwordValidator(control: AbstractControl) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalid_password: true };
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

  // Medicare Card:
  // https://stackoverflow.com/questions/3589345/how-do-i-validate-an-australian-medicare-number
  // https://www.clearwater.com.au/code/medicare
  
  static isValidMedicareCardNumber(control: AbstractControl) {
    const medicareNumber = control.value;
    let isValid: boolean;

    if (medicareNumber && medicareNumber.length === 10) {
      const matches: boolean = medicareNumber.match(/^(\d{8})(\d)/);

      if (!matches) {
        return { invalid_medicare: true };
      }

      const base: string = matches[1];
      const checkDigit: string = matches[2];
      const weights: Array<number> = [1, 3, 7, 9, 1, 3, 7, 9];

      let sum: number = 0;
      for (let i = 0; i < weights.length; i++) {
        sum += parseInt(base[i], 10) * weights[i];
      }

      isValid = sum % 10 === parseInt(checkDigit, 10);
    }
    return isValid ? null : { invalid_medicare: true };
  }
   
  static WHOLE_NUMBER: RegExp = /^-?\d*(?:\.0+)?$/;

  static isWholeNumber(control: AbstractControl) {
    const val = control.value;
    if (isString(val)) {
      if (control.value.match(ValidationService.WHOLE_NUMBER)) {
        return null;
      } else {
        return { whole_number : true };
      }
    } else if (isNumber(val)) {
      if (Number.isInteger(val)) {
        return null;
      } else {
        return { whole_number : true };
      }
    } else {
      return { whole_number : true };
    }
  }

  static isGreaterThan(limit: number) {
    return (control: AbstractControl) => {
      if (control.value > limit) {
        return null;
      }

      return { greater_than: limit };
    };
  }

}
