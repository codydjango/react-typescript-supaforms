import * as React from 'react';
import {GenericBase, GenericBaseState, GenericBaseProps} from './base';
import SelectWidget from '../widgets/select';


interface Props extends GenericBaseProps {
  options: Array<[string, string]>,
  defaultText?: string,
};


interface State extends GenericBaseState {
  focused: boolean
};


export default class Select extends GenericBase<Props, State> {
  constructor(props) {
    super(props);

    let validators = this.props.validators||'';
    let errorMessage = this.props.error||'';
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

    this.setValidators(validators.split('|'));
  }


  public render() {
    let defaultText = this.props.defaultText||'Please choose';
    let fieldClass = this.props.className||'';
    let errorClass = this.state.errorClass;
    let fieldClasses = `field field_select ${fieldClass} ${errorClass}`;
    let borderClasses = `border ${errorClass}`;

    return (
      <div className={fieldClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        { this.state.error ? <span className="error">{this.state.errorMessage}</span> : null }

        <SelectWidget
          id={this.props.id}
          borderClasses={borderClasses}
          defaultText={this.props.defaultText}
          options={this.props.options}
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
