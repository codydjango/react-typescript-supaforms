import * as React from 'react';
import {GenericBase, GenericBaseState, GenericBaseProps} from './base';
import AddressWidget from '../widgets/address';


interface Props extends GenericBaseProps {
};


interface State extends GenericBaseState {
  focused: boolean
};


export default class Text extends GenericBase<Props, State> {
  constructor(props) {
    super(props);

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

    this.setValidators([]);
  }


  public render() {
    let fieldClass = this.props.className||'';
    let errorClass = this.state.errorClass;
    let fieldClasses = `field field_text ${fieldClass} ${errorClass}`;
    let borderClass = (this.state.focused) ? 'focus' : '';
    let borderClasses = `border ${borderClass} ${errorClass}`;

    return (
      <div className={fieldClasses}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        { this.state.error ? <span className="error">{this.state.errorMessage}</span> : null }
        <AddressWidget
          borderClasses={borderClasses}
          id={this.props.id}
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
