namespace Validator {
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;


  interface BasicInterface {
    validate(value: string): boolean;
    validate(value: string): boolean;
  }


  export abstract class Basic implements BasicInterface {
    abstract validate(value: string)
    abstract getErrorMessage(value: string)
  }


  export class LettersOnly extends Basic {
    validate(value) {
      return lettersRegexp.test(value);
    }

    getErrorMessage(value) {
      return 'Letter only, please';
    }
  }


  export class NumbersOnly extends Basic {
    validate(value) {
      return numberRegexp.test(value);
    }

    getErrorMessage(value) {
      return 'Number only, please';
    }
  }


  export class Required extends Basic {
    validate(value) {
      return numberRegexp.test(value);
    }

    getErrorMessage(value) {
      return 'This field is required';
    }
  }


  export const map = {
    'required': Required,
    'numbers-only': NumbersOnly,
    'letters-only': LettersOnly
  }
}





export default Validator;