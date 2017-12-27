import { SUBMIT_NAME } from '../actions';

export default function(state = [], action) {
	const { type, text } = action

	switch (type) {
		case SUBMIT_NAME:
			return [...state, { key: Math.random().toString(36).substring(2), text: text }]
		default:
			return state
	}
}
