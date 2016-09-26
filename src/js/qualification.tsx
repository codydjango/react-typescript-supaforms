import * as React from 'react';
import Forms from './forms/forms';


interface Props {
};

interface State {
  form: string;
};


let mapping = {
  'auto': Forms.Auto,
  'manual': Forms.Manual
};


class AddressQualification extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      form: 'manual'
    }
  }


  protected onFormSubmit() {
    console.log('onFormSubmit');
  }


  protected setForm(evt:React.FormEvent, name:string): void {
    this.setState({
      form: name
    });
  }


  public render() {
    let Form = mapping[this.state.form];

    return (
      <div className="address-qualification">
        <Form />
        <hr />
        <div className="actions">
          <button onClick={ evt=> this.setForm(evt, 'auto')}>Autocomplete Form</button>
          <button onClick={ evt=> this.setForm(evt, 'manual')}>Manual Form</button>
        </div>
      </div>
    );
  }
}


export default AddressQualification
