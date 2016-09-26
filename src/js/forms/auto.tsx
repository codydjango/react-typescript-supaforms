import * as React from 'react';
import Field from '../fields/fields';


interface Props {

};


interface State {
  valid: boolean
};


export default class Auto extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    console.log('form props', props);

    this.state = {
      valid: true
    };
  }


  protected validate() {
    console.log('validate');
  }


  protected submit(evt) {
    console.log('submitForm', evt);
    evt.preventDefault();
    evt.stopPropagation();
  }


  protected onFormChange(evt) {
    console.log('onFormChange', evt);
  }


  protected onFieldUpdate(name:string, error:boolean, errorMessage:string) {
    // console.log('onFieldUpdate', error);

    this.setState({
       valid: (!error)
    });
  }


  public render() {
    console.log(Field.Text);
    return (
      <form id="qualification_form_auto_id" onChange={this.onFormChange}>

        <Field.Text
          id="qualification_unit"
          name="unit"
          label="Unit number"
          className="field_short"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="optional|numbers-only" />

        <Field.Text
          id="qualification_address"
          name="address"
          label="Address"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>

        <button type="submit" onClick={this.submit}>Submit</button>
      </form>
    );
  }
}
