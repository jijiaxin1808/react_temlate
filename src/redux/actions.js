import { INIT_SESSION } from './actionType';

export const initSession = state => ({
	type: INIT_SESSION,
	payload: state
});
