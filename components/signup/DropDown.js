import React from 'react';

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: '',
    };
  }
  render() {
    return (
      <div>
        <select>
          <option>Bengaluru</option>
          <option>Delhi</option>
          <option>Patna</option>
          <option>Kolkata</option>
          <option>Chennai</option>
        </select>
      </div>
    );
  }
}

export default DropDown;
