import React from 'react';

class Currency extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.onCustomChange = this.onCustomChange.bind(this);
  }
  onCustomChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    let min = null;
    let max = null;
    if (this.state.value < 50000) {
      min = <span style={{ color: 'darkorange' }}>Should not be less than $50,000</span>;
    }
    if (this.state.value > 500000) {
      max = <span style={{ color: 'darkorange' }}>Should not be greater than $5,00,000</span>;
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type={"number"}
          onChange={this.onCustomChange}
          style={{textAlign:'right'}}
          value={this.state.value}
          placeholder="Enter numeral"
        />
        {min}{max}
      </div>
    );
  }
}

export default Currency;
