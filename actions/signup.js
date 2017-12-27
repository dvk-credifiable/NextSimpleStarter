import { SIGNUP } from './';

export function signUp (user) {
	return {
		type: SIGNUP,
		user
	}
}
