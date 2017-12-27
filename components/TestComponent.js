import React from 'react';
import { connect } from 'react-redux';
import { submitName } from '../actions/names';

class TestComponent extends React.Component {
	state = {
		text: '',
		currentName: ''
	}
  submitName = e => {
			e.preventDefault()
			this.props.submitName(this.state.text)
			this.setState({ text: '' })
  }
	render() {
    const createItem = (item, key) => <option key={key} value={item.key}>{item.text}</option>;
		return (
      <div style={{margin:'20px'}}>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Next Redux Example</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column'}} className="mdl-card__supporting-text">
            <input value={this.state.text} type="text" onChange={event => this.setState({ text: event.target.value })} />
            <select onChange={event => this.setState({ currentName: event.target.value })} value={this.state.currentName}>
                {this.props.names.map(createItem)}
            </select>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.submitName}>
              Add Name
            </a>
          </div>
        </div>
      </div>
		)
	}
}

export default connect(
  ({ names }) => ({ names }),
	{submitName})(TestComponent)
