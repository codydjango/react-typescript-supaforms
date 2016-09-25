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
  errorState: string,
  errorMessage: string,
};


class TextInput extends React.Component<Props, State> {
  private validators: Array<any>;
  private valueAttempt: string;
  private onUpdate: (name:string, state:string) => void;

  constructor(props) {
    super(props);

    let validators = this.props.validators||'';
    let errorMessage = this.props.error||'';
    let onUpdate = this.props.onUpdate||null;
    let errorState = (errorMessage) ? 'error' : 'valid';

    this.onUpdate = onUpdate;

    this.state = {
      errorMessage: errorMessage,
      errorState: errorState,
      value: this.props.value||'',
    };

    this.setValidators(validators);
  }

  private notify(): void {
    if (this.onUpdate) {
      this.onUpdate(this.props.name, this.state.errorState);
    }
  }


  protected componentWillMount(): void {
    console.log('componentWillMount');
  }


  protected onChange(evt): void {
    this.setState({
      value: evt.target.value,
      errorState: this.state.errorState,
      errorMessage: this.state.errorMessage
    });
  }


  protected onBlur(evt): void {
    this.validate(this.state.value);

    this.setState({
      value: this.state.value,
      errorState: this.state.errorState,
      errorMessage: this.state.errorMessage
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
    this.state.errorState = 'error';
  }


  private setValid(): void {
    console.log('setValid');
    this.state.errorMessage = '';
    this.state.errorState = 'valid';
  }


  protected validate(value): string {
    this.isValid(value);

    return value;
  }


  public render() {
    let fieldState = this.state.errorState;
    let fieldClasses = 'field field_text ' + fieldState;

    return (
      <div className={fieldClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
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