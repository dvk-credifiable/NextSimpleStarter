import React from 'react';
import { connect } from 'react-redux';
// import Radio from './signup/Radio';
import Currency from './signup/Currency';
// import DropDown from './signup/DropDown';
import { signUp } from '../actions/signup';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			isCheck: false,
			radioValue1: {key:'a',val:'dvk'},
			radioValue2: {key:'b',val:'hvk'},
			radioValue3: {key:'c',val:'mvk'},
	    radioValue: {key:'b',val:'hvk'},
			cash: 0,
			credit: 0,
			selectOptions: [{key:'a',text:'dvk'},{key:'b',text:'hvk'},{key:'c',text:'mvk'}],
	    selectOption: {key:'b',text:'hvk'},
			Province: {},
	    city: {}
		}
		this.onRadioChanged = this.onRadioChanged.bind(this);
	}
	onRadioChanged (changeEvent) {
		changeEvent.preventDefault()
  	this.setState({
    	radioValue: changeEvent.target.value
  	});
	}
	signUp = e => {
			e.preventDefault()
			this.props.signUp({ name: 'mvk' });
			// this.setState({ text: '' })
	}
	render() {
    const createItem = (item, key) => <option key={key} value={item.key}>{item.text}</option>;
		return (
      <div style={{margin:'20px'}}>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">New User Registration</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column'}} className="mdl-card__supporting-text">
            <input value={this.state.text} type="text" onChange={event => this.setState({ text: event.target.value })} />
						<label><input name="isCheck" type="checkbox" checked={this.state.isCheck} onChange={event => this.setState({ isCheck: !this.state.isCheck })} />is Check?</label>
						{/* <label><input type="radio" value={this.state.radioValue1} checked={this.state.radioValue1.key === this.state.radioValue.key} onChange={this.onRadioChanged} />{this.state.radioValue1.val}</label>
            <label><input type="radio" value={this.state.radioValue2} checked={this.state.radioValue2.key === this.state.radioValue.key} onChange={this.onRadioChanged} />{this.state.radioValue2.val}</label>
						<label><input type="radio" value={this.state.radioValue3} checked={this.state.radioValue3.key === this.state.radioValue.key} onChange={this.onRadioChanged} />{this.state.radioValue3.val}</label> */}
						<Currency value={this.state.cash} />
						<Currency value={this.state.credit} />
            <select onChange={event => this.setState({ selectOption: event.target.value })} value={this.state.selectOption}>
                {this.state.selectOptions.map(createItem)}
            </select>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.signUp}>
              Register User
            </a>
          </div>
        </div>
      </div>
		)
	}
}

export default connect(
  ({ user }) => ({ user }),
	{signUp})(SignUp)
