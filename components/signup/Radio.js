import React from 'react';

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      value: this.props.value
    };
  }
  render() {
    const createRadio = (item) => <label><input type="radio" value="{item}" checked={this.state.radio.key === item.key} />{item.value}</label>;
    return (
      <radiogroup>
        { this.props.values.map(createRadio) }
      </radiogroup>
    );
  }
}

export default Radio;
