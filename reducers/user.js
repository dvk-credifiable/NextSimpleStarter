import { SIGNUP } from '../actions';

export default function(state = [], action) {
	const { type, user } = action

	switch (type) {
		case SIGNUP:
			return [...state, user: user];
		default:
			return state;
	}
}
