import * as React from 'react';


interface Props {
  id: string,
  name: string,
  value: string,
  borderClasses: string,
  onChange: (evt:React.FormEvent) => void,
  onBlur: (evt:React.FormEvent) => void,
  onFocus: (evt:React.FormEvent) => void
};


interface State {};


export default class TextWidget extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }


  public render() {
    return (
      <input
        id={this.props.id}
        type="text"
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
