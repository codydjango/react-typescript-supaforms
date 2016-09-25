import * as React from 'react';
import Validator from './validators';


interface Props {
  id: string,
  name: string,
  label: string,
  value?: string,
  error?: string,
  validators?: string,
  onUpdate?: () => void;
};


interface State {
  value: string,
  error: boolean,
  errorClass: string,
  errorMessage: string,
};


class TextInput extends React.Component<Props, State> {
  private validators: Array<any>;
  private onUpdate: (name:string, error:boolean, message:string) => void;

  constructor(props) {
    super(props);

    let validators = this.props.validators||'';
    let errorMessage = this.props.error||'';
    let onUpdate = this.props.onUpdate||null;
    let errorClass = (errorMessage) ? 'error' : 'valid';
    let error = (errorMessage) ? true : false;
    let value = this.props.value||'';

    this.state = {
      errorMessage: errorMessage,
      errorClass: errorClass,
      error: error,
      value: value,
    };

    this.setValidators(validators);
    this.onUpdate = onUpdate;
  }

  private notify(): void {
    if (this.onUpdate) {
      this.onUpdate(this.props.name, this.state.error, this.state.errorMessage);
    }
  }


  protected componentWillMount(): void {
    console.log('componentWillMount');
  }


  protected onChange(evt): void {
    this.setState({
      value: evt.target.value,
      errorClass: this.state.errorClass,
      errorMessage: this.state.errorMessage,
      error: this.state.error
    });
  }


  protected onBlur(evt): void {
    this.validate(this.state.value);

    this.setState({
      value: this.state.value,
      errorClass: this.state.errorClass,
      errorMessage: this.state.errorMessage,
      error: this.state.error,
    });

    this.notify();
  }


  protected setValidators(validatorsAsString:string): void {
    this.validators = [];

    for (let validator of validatorsAsString.split('|')) {
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


  private setError(error: string): void {
    console.log('setError', error);
    this.state.errorMessage = error;
    this.state.errorClass = 'error';
    this.state.error = true;
  }


  private setValid(): void {
    console.log('setValid');
    this.state.errorMessage = '';
    this.state.errorClass = 'valid';
    this.state.error = false;
  }


  protected validate(value): string {
    this.isValid(value);

    return value;
  }


  public render() {
    let errorClass = this.state.errorClass;
    let fieldClasses = 'field field_text ' + errorClass;

    return (
      <div className={fieldClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        { this.state.error ? <span className="error">{this.state.errorMessage}</span> : null }
        <input 
          id={this.props.id} 
          type="text" 
          value={this.state.value}
          name={this.props.name}
          onChange={this.onChange.bind(this)}
          onBlur={this.onBlur.bind(this)}
          />
      </div>
    );
  }
}


export default {TextInput};