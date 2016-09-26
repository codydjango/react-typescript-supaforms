namespace Validator {
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;


  interface BasicInterface {
    validate(value: string): boolean;
    validate(value: string): boolean;
  }


  export abstract class Basic implements BasicInterface {
    protected message = '';
    abstract validate(value: string)
    abstract getErrorMessage(value: string)
  }


  export class Optional extends Basic {
    protected message = '';
    validate(value) {
      return true;
    }

    getErrorMessage(value) {
      return this.message;
    }
  }


  export class Required extends Basic {
    protected message = 'This field is required';
    validate(value) {
      return (value) ? true : false;
    }

    getErrorMessage(value) {
      return this.message;
    }
  }


  export class LettersOnly extends Basic {
    protected message = 'Letter only, please';
    validate(value) {
      return (value) ? lettersRegexp.test(value) : true;
    }

    getErrorMessage(value) {
      return this.message;
    }
  }


  export class NumbersOnly extends Basic {
    protected message = 'Number only, please';
    validate(value) {
      return (value) ? numberRegexp.test(value) : true;
    }

    getErrorMessage(value) {
      return this.message;
    }
  }


  export const map = {
    'optional': Optional,
    'required': Required,
    'numbers-only': NumbersOnly,
    'letters-only': LettersOnly
  }
}


export default Validator;
