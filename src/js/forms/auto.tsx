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

    this.state = {
      valid: true
    };
  }


  protected validate() {
    // to be implemented
  }


  protected submit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    // to be implemented
  }


  protected onFormChange(evt) {
    // to be implemented
  }


  protected onFieldUpdate(name:string, error:boolean, errorMessage:string) {
    this.setState({
       valid: (!error)
    });
  }


  public render() {
    return (
      <form id="qualification_form_auto_id" onChange={this.onFormChange}>
        <input type="hidden" name="latitude" id="qualification_latitude_id" />
        <input type="hidden" name="longitude" id="qualification_longitude_id" />
        <input type="hidden" name="street_number" id="qualification_street_number_id" />
        <input type="hidden" name="street_name" id="qualification_street_name_id" />
        <input type="hidden" name="city" id="qualification_city_id" />
        <input type="hidden" name="province" id="qualification_province_id" />

        <Field.Text
          id="qualification_unit_id"
          name="unit"
          label="Unit number"
          className="field_short"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="optional|numbers-only" />

        <Field.Address
          id="qualification_address_id"
          name="address"
          label="Address"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>

        <button type="submit" onClick={this.submit}>Submit</button>
      </form>
    );
  }
}
