import * as React from 'react';
import Validator from '../validators/validators';


export interface GenericBaseProps {
  id: string,
  label: string,
  name: string,
  value?: string,
  error?: string,
  validators?: string,
  className?: string,
  onUpdate: (name:string, value:string, error:boolean, errorMessage:string) => void
};


export interface GenericBaseState {
  error: boolean,
  errorMessage: string,
  errorClass: string,
  value: string
};


export class GenericBase<Props extends GenericBaseProps, State extends GenericBaseState> extends React.Component<Props, State> {
  protected validators: Array<any>;
  // protected onUpdate: (name:string, error:boolean, message:string) => void;


  constructor(props) {
    super(props);
  }


  protected notify(): void {
    this.props.onUpdate(this.props.name,
      this.state.value,
      this.state.error,
      this.state.errorMessage);
  }


  protected componentWillMount(): void {
  }


  protected onChange(evt): void {
    this.setState(Object.assign({}, this.state, {
      value: evt.target.value,
    }));
  }


  protected onFocus(evt): void {
    this.setState(Object.assign({}, this.state, {
      focused: true
    }));
  }


  protected onBlur(evt): void {
    this.validate(this.state.value);
    this.setState(Object.assign({}, this.state, {
      focused: false
    }));
    this.notify();
  }


  protected setValidators(validatorNames:Array<string>): void {
    this.validators = [];

    for (let validator of validatorNames) {
      let instance = new Validator.map[validator];
      this.validators.push(instance);
    }
  }


  protected isValid(value): boolean {
    for (let validator of this.validators) {
      if (!validator.validate(value)) {
        this.setError(validator.getErrorMessage(value));
        return false;
      }
    }

    this.setValid();
    return true;
  }


  protected setError(error: string): void {
    console.log('setError', error);
    this.state.errorMessage = error;
    this.state.errorClass = 'error';
    this.state.error = true;
  }


  protected setValid(): void {
    console.log('setValid');
    this.state.errorMessage = '';
    this.state.errorClass = 'valid';
    this.state.error = false;
  }


  protected validate(value): string {
    this.isValid(value);

    return value;
  }
}

export default GenericBase;
