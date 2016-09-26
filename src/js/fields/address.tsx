import * as React from 'react';
import Validator from '../validators/validators';
import AddressWidget from '../widgets/address';


interface Props {
  id: string,
  name: string,
  label: string,
  value?: string,
  error?: string,
  validators?: string,
  className?: string,
  onUpdate?: () => void;
};


interface State {
  value: string,
  focused: boolean
  error: boolean,
  errorClass: string,
  errorMessage: string,
};


export default class Address extends React.Component<Props, State> {
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
      focused: false,
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
    let fieldClass = this.props.className||'';
    let borderClass = this.state.focused||'';
    let errorClass = this.state.errorClass;
    let fieldClasses = `field field_text ${fieldClass} ${errorClass}`;
    let borderClasses = `border ${borderClass} ${errorClass}`;

    return (
      <div className={fieldClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        { this.state.error ? <span className="error">{this.state.errorMessage}</span> : null }
        <input
          id={this.props.id}
          type="text"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          className={borderClasses}
          value={this.state.value}
          name={this.props.name}
          onChange={this.onChange.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onFocus={this.onFocus.bind(this)}
          />
      </div>
    );
  }
}
