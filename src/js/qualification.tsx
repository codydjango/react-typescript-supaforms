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


  public render() {
    let Form = mapping[this.state.form];

    return (
      <div className="address-qualification">
        <Form />
      </div>
    );
  }
}


export default AddressQualification
