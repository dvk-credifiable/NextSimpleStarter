import { SUBMIT_NAME } from './';

export function submitName(text) {
	return {
		type: SUBMIT_NAME,
		text
	}
}
