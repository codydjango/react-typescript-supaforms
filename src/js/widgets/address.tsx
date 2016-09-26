import * as React from 'react';


interface Props {
  id: string,
  name: string,
  value: string,
  borderClasses?: string,
  onChange: (e:React.FormEvent) => void,
  onBlur: (e:React.FormEvent) => void,
  onFocus: (e:React.FormEvent) => void
};


interface State {};


export default class AddressWidget extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }


  public render() {
    return (
      <input
        id={this.props.id}
        type="text"
        value={this.props.value}
        name={this.props.name}
        onChange={ e=> this.props.onChange(e) }
        onBlur={ e=> this.props.onBlur(e) }
        onFocus={ e=> this.props.onFocus(e) }
        />
    );
  }
}
