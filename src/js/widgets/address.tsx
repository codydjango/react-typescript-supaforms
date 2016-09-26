import * as React from 'react';
declare var window: any;


interface Props {
  id: string,
  name: string,
  value: string,
  borderClasses?: string,
  onChange: (evt:React.FormEvent) => void,
  onBlur: (evt:React.FormEvent) => void,
  onFocus: (evt:React.FormEvent) => void
};


interface State {};


export default class AddressWidget extends React.Component<Props, State> {
  public geocoder;
  public input;
  public autocomplete;

  constructor(props) {
    super(props);

    this.geocoder = new window.google.maps.Geocoder({
      componentRestrictions: {country: 'CA'}
    });
  }


  public componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(this.input, {
      componentRestrictions: {country: 'CA'}
    });
  }


  public render() {
    return (
      <input
        id={this.props.id}
        type="text"
        ref={(input) => this.input = input}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        value={this.props.value}
        name={this.props.name}
        className={this.props.borderClasses}
        onChange={ evt => this.props.onChange(evt) }
        onBlur={ evt => this.props.onBlur(evt) }
        onFocus={ evt => this.props.onFocus(evt) }
        />
    );
  }
}
