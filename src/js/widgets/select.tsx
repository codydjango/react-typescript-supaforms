import * as React from 'react';


interface Props {
  id: string,
  name: string,
  value: string,
  defaultText: string,
  options: Array<[string, string]>,
  borderClasses: string,
  onChange: (evt:React.FormEvent) => void,
  onBlur: (evt:React.FormEvent) => void,
  onFocus: (evt:React.FormEvent) => void
};


interface State {};


export default class SelectWidget extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }


  public render() {
    return (
      <div className={this.props.borderClasses}>
        <select
          id={this.props.id}
          name={this.props.name}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={ evt => this.props.onChange(evt)}
          onBlur={ evt => this.props.onBlur(evt)}
          onFocus={ evt => this.props.onFocus(evt)}>
          <option id="option_id" key="option" value=''>{this.props.defaultText}</option>
          {
            this.props.options.map(function(option, index, array) {
              let key = `option_${index}`;
              let id =  `option_${index}_id`;
              return <option id={id} key={key} value={option[0]}>{option[1]}</option>;
            })
          }
        </select>
      </div>
    );
  }
}
