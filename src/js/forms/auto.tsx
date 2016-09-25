import * as React from 'react';
import Field from '../fields';


interface Props {

};

interface State {
  valid: boolean
};


class Auto extends React.Component<Props, State> {
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
    console.log('submitForm');
  }

  protected onFormChange(evt) {
    console.log('onFormChange', evt);
  }

  protected onFieldUpdate(name:string, error:boolean, errorMessage:string) {
    console.log('onFieldUpdate', error);

    this.setState({
       valid: (!error)
    });
  }
  
  public render() {
    return (
      <form id="form_qualification_auto" onChange={this.onFormChange}>
        <Field.TextInput 
          id="unit" 
          name="unit" 
          label="Unit"
          onUpdate={this.onFieldUpdate.bind(this)} 
          validators="required|numbers-only" />
        
        <Field.TextInput 
          id="address" 
          name="address" 
          label="Address" 
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>
        
        <button type="submit" onClick={this.submit}>Submit</button>
      </form>
    );
  }
}


export default Auto